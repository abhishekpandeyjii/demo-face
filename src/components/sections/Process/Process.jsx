import { siteData } from '../../../data/siteData';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import { useScrollRevealChildren } from '../../../hooks/useScrollReveal';

export default function Process() {
  const gridRef = useScrollRevealChildren('.fade-in');

  return (
    <section className="process-section section-padding section-bg-alt" id="process">
      <div className="container">
        <SectionTitle
          subtitle="Our Process"
          title="How We"
          titleHighlight="Work"
          description="Our proven methodology ensures successful project delivery from concept to launch."
        />

        <div className="grid grid-3" ref={gridRef}>
          {(siteData.process || []).map((step, index) => (
            <div className={`fade-in delay-${index + 1}`} key={index}>
              <div className="process-card">
                <div className="process-step-number">{step.step}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
