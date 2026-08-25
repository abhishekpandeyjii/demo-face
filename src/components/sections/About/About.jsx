import { Link } from 'react-router-dom';
import { siteData } from '../../../data/siteData';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

export default function About() {
  const imageRef = useScrollReveal();
  const contentRef = useScrollReveal();

  return (
    <section className="about-section section-padding" id="about">
      <div className="container">
        <div className="grid grid-5-7 align-center">
          {/* About Image */}
          <div className="about-image-wrapper fade-in-left" ref={imageRef}>
            <div className="about-image">
              <img src="/images/about-team.jpg" alt="TechCore Team" />
            </div>
            <div className="about-experience-badge">
              <span className="years">{siteData.about.yearsExperience}+</span>
              <span className="text">Years of Experience</span>
            </div>
          </div>

          {/* About Content */}
          <div className="about-content fade-in-right" ref={contentRef}>
            <div className="sub-title">
              <i className="fas fa-circle"></i>
              {siteData.about.subtitle}
              <i className="fas fa-circle"></i>
            </div>

            <h2>
              {siteData.about.title.split('Technology')[0]}
              <span className="gradient-text">Technology</span> & Innovation
            </h2>

            <p>{siteData.about.description}</p>

            <div className="about-features">
              {siteData.about.features.map((feature, index) => (
                <div className="about-feature-item" key={index}>
                  <i className="fas fa-check-circle"></i>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Link to="/about" className="btn-primary-custom">
              Discover More <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
