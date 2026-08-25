import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

export default function CTA() {
  const ref = useScrollReveal();

  return (
    <section className="cta-section section-padding" id="cta">
      <div className="container">
        <div className="cta-wrapper scale-in" ref={ref}>
          <h2>Ready to Transform Your Business?</h2>
          <p>
            Let's discuss how our technology solutions can drive your business forward. 
            Get in touch with our team today for a free consultation.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
            <Link to="/contact" className="btn-outline-custom">
              Get Free Consultation <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
