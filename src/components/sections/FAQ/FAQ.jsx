import { useState } from 'react';
import { siteData } from '../../../data/siteData';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import { useScrollRevealChildren } from '../../../hooks/useScrollReveal';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);
  const gridRef = useScrollRevealChildren('.fade-in');

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section section-padding" id="faq">
      <div className="container">
        <SectionTitle
          subtitle="FAQ"
          title="Frequently Asked"
          titleHighlight="Questions"
          description="Find answers to common questions about our services and processes."
        />

        <div style={{ maxWidth: '800px', margin: '0 auto' }} ref={gridRef}>
          {siteData.faq.map((item, index) => (
            <div className={`fade-in delay-${Math.min(index + 1, 6)}`} key={index}>
              <div className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaq(index)}>
                  <h5>{item.question}</h5>
                  <div className="faq-toggle">
                    <i className="fas fa-chevron-down"></i>
                  </div>
                </div>
                <div
                  className="faq-answer"
                  style={{
                    maxHeight: activeIndex === index ? '300px' : '0',
                  }}
                >
                  <div className="faq-answer-inner">
                    <p>{item.answer}</p>
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
