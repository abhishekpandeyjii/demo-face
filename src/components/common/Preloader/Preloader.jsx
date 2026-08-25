import { useState, useEffect } from 'react';

export default function Preloader() {
  const [loaded, setLoaded] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
      setTimeout(() => setHidden(true), 500);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div className={`preloader ${loaded ? 'loaded' : ''}`} id="preloader">
      <div className="preloader-spinner"></div>
    </div>
  );
}
