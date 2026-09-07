import { Link } from 'react-router-dom';
import { siteData } from '../../../data/siteData';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

export default function Hero() {
  const contentRef = useScrollReveal();
  const imageRef = useScrollReveal();

  return (
    <section className="hero" id="hero">
      {/* Background Elements */}
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      {/* Particles */}
      <div className="particles-bg">
        {[...Array(8)].map((_, i) => (
          <div className="particle" key={i}></div>
        ))}
      </div>

      <div className="container">
        <div className="grid grid-2 align-center">
          {/* Hero Content */}
          <div className="hero-content fade-in" ref={contentRef}>
            <div className="hero-badge">
              <span>Next-Gen Digital Transformation</span>
            </div>

            <h1 className="hero-title">
              Innovative Technology <br />
              Solutions for Global <br />
              <span className="highlight">Enterprises</span>
            </h1>

            <div className="hero-buttons">
              <Link to="/services" className="btn-solid-white">
                Explore Our Expertise
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hero-image-wrapper fade-in-right" ref={imageRef}>
            <div className="hero-image-main">
              <img src="/images/hero-tech.jpg" alt="TechCore - Digital Solutions" />
            </div>
            <div className="hero-image-glow"></div>

            {/* SVG Spinning Badge */}
            <div className="spinning-badge">
              <svg viewBox="0 0 160 160" width="160" height="160" className="spinning-svg">
                <path
                  id="circlePath"
                  d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                  fill="none"
                />
                <text fill="#1868e8" fontSize="10.5" fontWeight="800" letterSpacing="2">
                  <textPath href="#circlePath" startOffset="0%">
                    ACCELERATE • INNOVATE • TRANSFORM •
                  </textPath>
                </text>
              </svg>
              <div className="spinning-badge-icon">
                <i className="fas fa-play"></i>
              </div>
            </div>

            <div className="hero-arrow">
              <i className="fas fa-arrow-down-left"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
