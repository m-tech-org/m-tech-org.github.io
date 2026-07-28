import type { ReactNode } from 'react';
import { Button } from './ui/button/button.tsx';
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from './ui/dialog/dialog.tsx';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './ui/carousel/carousel.tsx';
import type { Product } from '../data/products.ts';
import styles from './product-details-dialog.module.css';

interface ProductDetailsDialogProps {
  product: Product;
  children: ReactNode;
}

type Slide = { type: 'image'; src: string } | { type: 'video'; src: string } | { type: 'pdf'; src: string };

export function ProductDetailsDialog({ product, children }: ProductDetailsDialogProps) {
  const slides: Slide[] = [
    ...(product.screenshots ?? []).map((src): Slide => ({ type: 'image', src })),
    ...(product.video ? ([{ type: 'video', src: product.video }] as Slide[]) : []),
    ...(product.overviewPdf ? ([{ type: 'pdf', src: product.overviewPdf }] as Slide[]) : []),
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className={styles.content}>
        <div className={styles.header}>
          <DialogTitle className={styles.title}>{product.title}</DialogTitle>
          <DialogDescription className={styles.description}>{product.description}</DialogDescription>
        </div>

        {slides.length > 0 && (
          <Carousel opts={{ watchDrag: false }} className={styles.carousel}>
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem
                  key={`${slide.type}-${index}`}
                  className={slide.type === 'pdf' ? styles.slideItemPdf : styles.slideItem}
                >
                  {slide.type === 'image' && (
                    <img
                      src={slide.src}
                      alt={`${product.title} screenshot ${index + 1}`}
                      className={styles.slideImage}
                    />
                  )}
                  {slide.type === 'video' && (
                    <video controls playsInline className={styles.slideVideo} poster={product.image}>
                      <source src={slide.src} type="video/mp4" />
                    </video>
                  )}
                  {slide.type === 'pdf' && (
                    <iframe
                      src={slide.src}
                      title={`${product.title} overview PDF`}
                      className={styles.pdfFrame}
                    />
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious style={{ left: 'var(--space-4)' }} />
            <CarouselNext style={{ right: 'var(--space-4)' }} />
          </Carousel>
        )}

        <div className={styles.details}>
          <p className={styles.longDescription}>{product.longDescription}</p>

          <div className={styles.outcome}>
            <strong>Outcome:</strong> {product.outcome}
          </div>

          <div className={styles.techList}>
            {product.technologies.map((tech) => (
              <span key={tech} className={styles.techBadge}>
                {tech}
              </span>
            ))}
          </div>

          {product.installCommand && (
            <div className={styles.installBlock}>
              <span className={styles.installLabel}>Install</span>
              <code className={styles.installCommand}>{product.installCommand}</code>
            </div>
          )}

          {product.coupons && product.coupons.length > 0 && (
            <div className={styles.couponBanner}>
              🎉 Launch offer:
              <div className={styles.couponList}>
                {product.coupons.map((coupon) => (
                  <span key={coupon.code} className={styles.couponItem}>
                    <code className={styles.couponCode}>{coupon.code}</code> — {coupon.discount}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className={styles.footer}>
          <Button asChild size="lg">
            {product.link.startsWith('#') ? (
              <a href={product.link}>{product.ctaLabel ?? `Buy Now — ${product.price}`}</a>
            ) : (
              <a href={product.link} target="_blank" rel="noopener noreferrer">
                {product.ctaLabel ?? `Buy Now — ${product.price}`}
              </a>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
