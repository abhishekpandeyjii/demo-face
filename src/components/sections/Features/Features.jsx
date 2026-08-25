import { siteData } from '../../../data/siteData';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import { useScrollRevealChildren } from '../../../hooks/useScrollReveal';

export default function Features() {
  const gridRef = useScrollRevealChildren('.fade-in');

  return (
    <section className="features-section section-padding" id="features">
      <div className="container">
        <SectionTitle
          subtitle="Why Choose Us"
          title="Why Businesses"
          titleHighlight="Trust Us"
          description="We combine expertise, innovation, and dedication to deliver solutions that exceed expectations."
        />

        <div className="grid grid-3" ref={gridRef}>
          {siteData.features.map((feature, index) => (
            <div className={`fade-in delay-${index + 1}`} key={index}>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className={feature.icon}></i>
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
