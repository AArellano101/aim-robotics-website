import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver that adds `.is-visible` the first time an
 * element enters the viewport, driving the site's restrained reveal-on-scroll
 * motion. Respects prefers-reduced-motion by relying on CSS to no-op there.
 */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return ref;
}

export default useReveal;
