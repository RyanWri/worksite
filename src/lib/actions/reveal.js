/**
 * Svelte action: fade + rise an element in as it scrolls into view (once).
 * Pairs with the `.reveal` / `.reveal.in-view` CSS in app.css.
 * Respects prefers-reduced-motion by revealing immediately.
 *
 * Usage: <section use:reveal> ... </section>
 */
export function reveal(node) {
  node.classList.add("reveal");

  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || typeof IntersectionObserver === "undefined") {
    node.classList.add("in-view");
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          node.classList.add("in-view");
          observer.unobserve(node);
        }
      }
    },
    { threshold: 0.12 },
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    },
  };
}
