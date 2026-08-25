import { Link } from 'react-router-dom';
import { siteData } from '../../../data/siteData';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import { useScrollRevealChildren } from '../../../hooks/useScrollReveal';

export default function Pricing() {
  const gridRef = useScrollRevealChildren('.fade-in');

  return (
    <section className="pricing-section section-padding" id="pricing">
      <div className="container">
        <SectionTitle
          subtitle="Pricing Plans"
          title="Choose Your"
          titleHighlight="Plan"
          description="Flexible pricing options designed to scale with your business needs."
        />

        <div className="grid grid-3" ref={gridRef}>
          {siteData.pricing.map((plan, index) => (
            <div className={`fade-in delay-${index + 1}`} key={index}>
              <div className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                <div className="pricing-icon">
                  <i className={plan.icon}></i>
                </div>
                <h3>{plan.name}</h3>
                <div className="price">
                  <sup>$</sup>
                  <span className="amount">{plan.price}</span>
                  <sub>{plan.period}</sub>
                </div>

                <ul className="pricing-features">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className={!feature.enabled ? 'disabled' : ''}>
                      <i className={`fas ${feature.enabled ? 'fa-check-circle' : 'fa-times-circle'}`}></i>
                      {feature.text}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={plan.popular ? 'btn-primary-custom' : 'btn-outline-custom'}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Get Started <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
