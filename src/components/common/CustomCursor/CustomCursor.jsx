import { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Target mouse coordinates
  const mousePos = useRef({ x: -100, y: -100 });
  // Ring smoothed coordinates
  const ringPos = useRef({ x: -100, y: -100 });
  const animationFrameId = useRef(null);

  useEffect(() => {
    // Only run on desktop/devices supporting fine pointer hover
    const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouchDevice) return;

    const onMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }

      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    // Check if hovering over clickable/interactive elements
    const onMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isInteractive = target.closest(
        'a, button, input, textarea, select, label, [role="button"], .btn, .nav-link, .portfolio-card, .service-card-item, .faq-question, .blog-card, .social-link'
      ) || window.getComputedStyle(target).cursor === 'pointer';

      setIsHovered(Boolean(isInteractive));
    };

    // Smooth animation loop for outer ring
    const render = () => {
      // Lerp (linear interpolation) smoothing factor
      const speed = 0.16;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * speed;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * speed;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId.current = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', onMouseOver);

    animationFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', onMouseOver);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isVisible]);

  return (
    <div
      className={`custom-cursor-container ${!isVisible ? 'hidden' : ''} ${
        isHovered ? 'hovered' : ''
      } ${isClicked ? 'clicked' : ''}`}
      aria-hidden="true"
    >
      <div ref={ringRef} className="custom-cursor-ring" />
      <div ref={dotRef} className="custom-cursor-dot" />
    </div>
  );
}
