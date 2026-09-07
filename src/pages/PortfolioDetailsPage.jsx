import PageBanner from '../components/common/PageBanner/PageBanner';
import CTA from '../components/sections/CTA/CTA';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function PortfolioDetailsPage() {
  const contentRef = useScrollReveal();

  return (
    <>
      <PageBanner
        title="Project Details"
        breadcrumbs={[
          { label: 'Portfolio', path: '/portfolio' },
          { label: 'Project Details' }
        ]}
      />
      
      <section className="portfolio-details-section section-padding">
        <div className="container">
          <div className="portfolio-details-image fade-in-up" ref={contentRef} style={{ marginBottom: '50px' }}>
            <img 
              src="/images/portfolio_ecommerce.png" 
              alt="Project Showcase" 
              style={{ width: '100%', borderRadius: 'var(--radius-xl)' }} 
            />
          </div>

          <div className="grid grid-7-5">
            <div className="project-description">
              <h2 style={{ marginBottom: '20px' }}>E-Commerce Platform Redesign</h2>
              <p style={{ marginBottom: '20px' }}>
                We partnered with a leading retail brand to completely overhaul their digital storefront. 
                The goal was to create a modern, high-performance e-commerce platform that provides a seamless shopping experience across all devices.
              </p>
              <p>
                By implementing a headless architecture and integrating AI-powered product recommendations, we were able to significantly boost conversion rates and improve overall site speed.
              </p>
              
              <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>Project Challenges</h3>
              <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: 'var(--text-muted)' }}>
                <li style={{ marginBottom: '10px' }}>Migrating a massive product catalog without downtime.</li>
                <li style={{ marginBottom: '10px' }}>Integrating legacy inventory management systems.</li>
                <li>Optimizing the checkout flow to reduce cart abandonment.</li>
              </ul>
            </div>

            <div className="project-info" style={{ background: 'var(--bg-card)', padding: '40px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-glass)' }}>
              <h4 style={{ marginBottom: '25px', paddingBottom: '15px', borderBottom: '1px solid var(--border-glass)' }}>Project Info</h4>
              
              <div style={{ marginBottom: '20px' }}>
                <span style={{ display: 'block', fontSize: '13px', color: 'var(--text-muted)', marginBottom: '5px' }}>Client</span>
                <strong style={{ color: 'var(--text-dark)' }}>Global Retail Inc.</strong>
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <span style={{ display: 'block', fontSize: '13px', color: 'var(--text-muted)', marginBottom: '5px' }}>Category</span>
                <strong style={{ color: 'var(--text-dark)' }}>Web Development</strong>
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <span style={{ display: 'block', fontSize: '13px', color: 'var(--text-muted)', marginBottom: '5px' }}>Date</span>
                <strong style={{ color: 'var(--text-dark)' }}>October 2023</strong>
              </div>
              
              <div style={{ marginBottom: '30px' }}>
                <span style={{ display: 'block', fontSize: '13px', color: 'var(--text-muted)', marginBottom: '5px' }}>Technologies</span>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '10px' }}>
                  {['React', 'Node.js', 'MongoDB', 'AWS'].map((tech, i) => (
                    <span key={i} style={{ padding: '6px 14px', background: 'rgba(24, 104, 232, 0.1)', color: 'var(--primary)', borderRadius: '20px', fontSize: '12px', fontWeight: '700' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <a href="#" className="btn-primary-custom" style={{ width: '100%', justifyContent: 'center' }}>
                Live Preview <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
