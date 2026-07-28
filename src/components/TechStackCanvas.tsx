import { useEffect, useRef } from 'react';
import { techStack, type TechStackItem } from '../data/techStack.ts';
import styles from './tech-stack-canvas.module.css';

interface Node {
  item: TechStackItem;
  img?: HTMLImageElement;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

function drawRoundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  if (typeof ctx.roundRect === 'function') {
    ctx.beginPath();
    ctx.roundRect(x, y, w, h, r);
    return;
  }
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

/** Hand-drawn fallback icons (canvas primitives) for concepts with no official brand logo. */
function drawCustomIcon(
  ctx: CanvasRenderingContext2D,
  kind: NonNullable<TechStackItem['customIcon']>,
  cx: number,
  cy: number,
  size: number,
  color: string
) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = Math.max(1.5, size * 0.09);
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  const half = size / 2;

  if (kind === 'vector') {
    const x1 = cx - half * 0.6;
    const y1 = cy + half * 0.6;
    const x2 = cx + half * 0.6;
    const y2 = cy - half * 0.6;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    const angle = Math.atan2(y2 - y1, x2 - x1);
    const headLen = size * 0.28;
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - headLen * Math.cos(angle - Math.PI / 7), y2 - headLen * Math.sin(angle - Math.PI / 7));
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - headLen * Math.cos(angle + Math.PI / 7), y2 - headLen * Math.sin(angle + Math.PI / 7));
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x1, y1, size * 0.06, 0, Math.PI * 2);
    ctx.fill();
  } else if (kind === 'search-spark') {
    const lensR = half * 0.5;
    const lensCx = cx - size * 0.08;
    const lensCy = cy - size * 0.08;
    ctx.beginPath();
    ctx.arc(lensCx, lensCy, lensR, 0, Math.PI * 2);
    ctx.stroke();

    const handleAngle = Math.PI / 4;
    ctx.beginPath();
    ctx.moveTo(lensCx + lensR * Math.cos(handleAngle), lensCy + lensR * Math.sin(handleAngle));
    ctx.lineTo(
      lensCx + lensR * Math.cos(handleAngle) + size * 0.22,
      lensCy + lensR * Math.sin(handleAngle) + size * 0.22
    );
    ctx.stroke();

    const sx = cx + size * 0.3;
    const sy = cy - size * 0.34;
    const sLen = size * 0.13;
    ctx.beginPath();
    ctx.moveTo(sx - sLen, sy);
    ctx.lineTo(sx + sLen, sy);
    ctx.moveTo(sx, sy - sLen);
    ctx.lineTo(sx, sy + sLen);
    ctx.stroke();
  } else if (kind === 'chip') {
    const s = half * 0.6;
    drawRoundRect(ctx, cx - s, cy - s, s * 2, s * 2, size * 0.08);
    ctx.stroke();

    const pinLen = size * 0.14;
    for (const p of [-0.5, 0, 0.5]) {
      ctx.beginPath();
      ctx.moveTo(cx + p * s * 1.2, cy - s);
      ctx.lineTo(cx + p * s * 1.2, cy - s - pinLen);
      ctx.moveTo(cx + p * s * 1.2, cy + s);
      ctx.lineTo(cx + p * s * 1.2, cy + s + pinLen);
      ctx.moveTo(cx - s, cy + p * s * 1.2);
      ctx.lineTo(cx - s - pinLen, cy + p * s * 1.2);
      ctx.moveTo(cx + s, cy + p * s * 1.2);
      ctx.lineTo(cx + s + pinLen, cy + p * s * 1.2);
      ctx.stroke();
    }
  }
  ctx.restore();
}

function iconToImage(item: TechStackItem, size: number): Promise<HTMLImageElement> {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${size}" height="${size}"><path fill="${item.color}" d="${item.path}"/></svg>`;
  const dataUrl = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.src = dataUrl;
  });
}

export function TechStackCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let animationFrame = 0;
    let hovered: Node | null = null;
    let destroyed = false;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const nodeRadius = 32;
    const iconSize = Math.round(nodeRadius * 1.3);

    const resize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const placeNodes = () => {
      const cols = Math.max(3, Math.floor(width / (nodeRadius * 3.2)));
      nodes = techStack.map((item, index) => {
        const col = index % cols;
        const row = Math.floor(index / cols);
        const cellW = width / cols;
        const x = cellW * col + cellW / 2 + (Math.random() - 0.5) * cellW * 0.3;
        const y = nodeRadius * 3 * row + nodeRadius * 2.2 + (Math.random() - 0.5) * 20;
        const angle = Math.random() * Math.PI * 2;
        const speed = prefersReducedMotion ? 0 : 0.15 + Math.random() * 0.15;
        return {
          item,
          x,
          y: Math.min(y, height - nodeRadius * 1.5),
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: nodeRadius,
        };
      });
    };
    placeNodes();

    const iconItems = techStack.filter((item) => item.path);
    Promise.all(iconItems.map((item) => iconToImage(item, iconSize * 2))).then((images) => {
      if (destroyed) return;
      let i = 0;
      for (const node of nodes) {
        if (node.item.path) {
          node.img = images[i];
          i++;
        }
      }
      draw();
      if (!prefersReducedMotion) {
        animationFrame = requestAnimationFrame(tick);
      }
    });

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Connecting lines between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = nodeRadius * 5;
          if (dist < maxDist) {
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.12 * (1 - dist / maxDist)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Nodes
      for (const node of nodes) {
        const isHovered = hovered === node;
        const r = isHovered ? node.radius * 1.12 : node.radius;

        ctx.save();
        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? 'rgba(139, 92, 246, 0.18)' : 'rgba(148, 163, 184, 0.1)';
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = isHovered ? 'rgba(139, 92, 246, 0.6)' : 'rgba(148, 163, 184, 0.25)';
        ctx.stroke();
        ctx.restore();

        const s = isHovered ? iconSize * 1.15 : iconSize;
        if (node.item.path && node.img) {
          ctx.drawImage(node.img, node.x - s / 2, node.y - s / 2, s, s);
        } else if (node.item.customIcon) {
          drawCustomIcon(ctx, node.item.customIcon, node.x, node.y, s, node.item.color);
        }

        if (isHovered) {
          ctx.font = '600 13px ui-sans-serif, system-ui, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillStyle = 'rgba(226, 232, 240, 0.95)';
          ctx.fillText(node.item.name, node.x, node.y - r - 10);
        }
      }
    }

    function tick() {
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x - node.radius < 0 || node.x + node.radius > width) {
          node.vx *= -1;
          node.x = Math.max(node.radius, Math.min(width - node.radius, node.x));
        }
        if (node.y - node.radius < 0 || node.y + node.radius > height) {
          node.vy *= -1;
          node.y = Math.max(node.radius, Math.min(height - node.radius, node.y));
        }
      }
      draw();
      animationFrame = requestAnimationFrame(tick);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const found = nodes.find((node) => {
        const dx = node.x - mx;
        const dy = node.y - my;
        return Math.sqrt(dx * dx + dy * dy) < node.radius * 1.2;
      });
      if (found !== hovered) {
        hovered = found ?? null;
        canvas.style.cursor = found ? 'pointer' : 'default';
        if (prefersReducedMotion) draw();
      }
    };

    const handleMouseLeave = () => {
      if (hovered) {
        hovered = null;
        if (prefersReducedMotion) draw();
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      const previousImages = nodes.map((node) => node.img);
      resize();
      placeNodes();
      nodes.forEach((node, index) => {
        node.img = previousImages[index];
      });
      draw();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      destroyed = true;
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.canvasContainer}>
      <canvas
        ref={canvasRef}
        role="img"
        aria-label={`Our technology stack: ${techStack.map((t) => t.name).join(', ')}`}
      />
      <span className="sr-only">
        Technologies we work with: {techStack.map((t) => t.name).join(', ')}.
      </span>
    </div>
  );
}
