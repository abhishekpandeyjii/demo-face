import { siteData } from '../../../data/siteData';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import { useScrollRevealChildren } from '../../../hooks/useScrollReveal';

export default function Testimonials() {
  const gridRef = useScrollRevealChildren('.fade-in');

  return (
    <section className="testimonials-section section-padding" id="testimonials">
      <div className="container">
        <SectionTitle
          subtitle="Testimonials"
          title="What Our Clients"
          titleHighlight="Say"
          description="Don't just take our word for it — hear from the businesses we've helped transform."
        />

        <div className="grid grid-3" ref={gridRef}>
          {siteData.testimonials.map((testimonial, index) => (
            <div className={`fade-in delay-${index + 1}`} key={index}>
              <div className="testimonial-card">
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i className="fas fa-star" key={i}></i>
                  ))}
                </div>
                <div className="testimonial-author">
                  <div className="testimonial-avatar" style={{
                    background: 'var(--gradient-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '16px',
                  }}>
                    {testimonial.avatar}
                  </div>
                  <div className="testimonial-author-info">
                    <h5>{testimonial.author}</h5>
                    <span>{testimonial.position}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
