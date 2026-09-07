import { Link } from 'react-router-dom';
import PageBanner from '../components/common/PageBanner/PageBanner';
import CTA from '../components/sections/CTA/CTA';
import { siteData } from '../data/siteData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function VaServicesPage() {
  const contentRef = useScrollReveal();

  return (
    <>
      <PageBanner
        title="Virtual Assistant (VA) Services"
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: 'VA Services' }
        ]}
      />

      <section className="va-services-section section-padding" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-title fade-in" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div className="sub-title">Virtual Assistant Solutions</div>
            <h2>Streamline Operations & Boost Productivity</h2>
            <p>Accurate, efficient, and confidential virtual assistant services tailored for your business workflow.</p>
          </div>

          <div className="grid grid-3" ref={contentRef}>
            {siteData.vaServices.map((va, index) => (
              <div key={index} className="service-card" style={{ background: '#ffffff', padding: '35px 25px', borderRadius: 'var(--radius-lg)', border: '1px solid #e2e8f0' }}>
                <div className="service-icon" style={{ width: '60px', height: '60px', background: 'rgba(24,104,232,0.1)', color: 'var(--primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '20px' }}>
                  <i className={va.icon}></i>
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--text-dark)' }}>{va.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.7' }}>{va.description}</p>
                {va.link && (
                  <Link to={va.link} className="service-link" style={{ marginTop: '15px', display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: 600, fontSize: '14px' }}>
                    Learn More <i className="fas fa-arrow-right"></i>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

