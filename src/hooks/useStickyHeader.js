import { useState, useEffect } from 'react';

/**
 * Custom hook for sticky header behavior.
 * Returns isSticky state based on scroll position.
 */
export function useStickyHeader(threshold = 80) {
  const [isSticky, setIsSticky] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsSticky(window.scrollY > threshold);
      setShowBackToTop(window.scrollY > 400);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return { isSticky, showBackToTop };
}

export default useStickyHeader;
