import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollReveal() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const root = document.querySelector('.site-main');
    if (!root) return undefined;

    root.dataset.revealEnabled = '';
    const targets = root.querySelectorAll('[data-reveal]');

    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      targets.forEach((target) => target.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

export default ScrollReveal;
