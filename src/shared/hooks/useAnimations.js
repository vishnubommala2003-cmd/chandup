import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { triggerAnimations } from '../utilities/animationEngine';

export function useAnimations() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change (unless hash link)
    if (!location.hash) {
      window.scrollTo(0, 0);
    } else {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }

    // Trigger animations after DOM paint
    const timer = setTimeout(() => {
      triggerAnimations();
    }, 80);

    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);
}
