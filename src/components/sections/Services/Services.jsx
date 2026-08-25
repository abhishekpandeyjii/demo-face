import { Link } from 'react-router-dom';
import { siteData } from '../../../data/siteData';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import { useScrollRevealChildren } from '../../../hooks/useScrollReveal';

export default function Services() {
  const gridRef = useScrollRevealChildren('.fade-in');

  return (
    <section className="services-section section-padding section-bg" id="services">
      <div className="container">
        <SectionTitle
          subtitle="Our Services"
          title="What We"
          titleHighlight="Offer"
          description="We provide comprehensive IT solutions tailored to your business needs, from development to deployment."
        />

        <div className="grid grid-3" ref={gridRef}>
          {siteData.services.map((service, index) => (
            <div className={`fade-in delay-${index + 1}`} key={index}>
              <div className="service-card">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={service.link} className="service-link">
                  Learn More <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
