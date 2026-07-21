import { mount, type WidgetOptions } from 'chatling';
import { useEffect, useRef } from 'react';

/**
 * Thin React wrapper around chatling's framework-agnostic `mount()`. Must stay a
 * sibling of App's routed page content, not inside it — App swaps pages by hash
 * without unmounting this component, so the widget's internal state (open/closed,
 * messages, position) survives navigation for free.
 */
export function ChatWidgetMount(options: WidgetOptions) {
  const containerRef = useRef<HTMLDivElement>(null);

  // mount() must run once, using the options present at that time — re-running it on every
  // options change would tear down and recreate the widget, losing its open/closed state,
  // messages, and position on every re-render of the parent.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!containerRef.current) return;
    const instance = mount(containerRef.current, options);
    return () => instance.destroy();
  }, []);

  return <div ref={containerRef} />;
}
