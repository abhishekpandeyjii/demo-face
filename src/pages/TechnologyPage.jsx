import PageBanner from '../components/common/PageBanner/PageBanner';
import CTA from '../components/sections/CTA/CTA';
import { siteData } from '../data/siteData';

export default function TechnologyPage() {
  return (
    <>
      <PageBanner
        title="Tools & Technologies"
        breadcrumbs={[
          { label: 'Technology' }
        ]}
      />

      <section className="section-padding" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-title" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div className="sub-title">Modern Tech Stack</div>
            <h2>Cutting-Edge Frameworks & Tools</h2>
            <p>We leverage modern frontend, backend, mobile, and database technologies for robust, future-ready solutions.</p>
          </div>

          <div className="grid grid-4">
            {siteData.technologies.map((tech, index) => (
              <div key={index} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '30px 20px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                <i className={tech.icon} style={{ fontSize: '40px', color: 'var(--primary)', marginBottom: '15px' }}></i>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--text-dark)', marginBottom: '5px' }}>{tech.name}</h4>
                <span style={{ fontSize: '12px', background: 'rgba(24,104,232,0.1)', color: 'var(--primary)', padding: '4px 12px', borderRadius: '15px', fontWeight: '600' }}>{tech.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
