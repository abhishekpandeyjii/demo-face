import PageBanner from '../components/common/PageBanner/PageBanner';
import CTA from '../components/sections/CTA/CTA';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ServiceDetailsPage() {
  const contentRef = useScrollReveal();
  const sidebarRef = useScrollReveal();

  const servicesList = [
    'Cloud Solutions & Migration',
    'Cybersecurity & Compliance',
    'Custom Software Development',
    'AI & Data Analytics',
    'IT Infrastructure Management',
    'Digital Transformation'
  ];

  return (
    <>
      <PageBanner
        title="Cloud Solutions & Migration"
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: 'Cloud Solutions' }
        ]}
      />
      
      <section className="service-details-section">
        <div className="container">
          <div className="grid grid-7-5">
            {/* Main Content */}
            <div className="service-main-card fade-in-left" ref={contentRef}>
              <img 
                src="/images/service-cloud.jpg" 
                alt="Cloud Solutions & Migration" 
                className="service-main-image"
              />
              <h2 className="service-title">Enterprise Cloud Solutions & Seamless Migration</h2>
              <p className="service-text">
                In today's fast-paced digital ecosystem, migrating to the cloud is no longer optional—it's essential for operational resilience and agility. Our end-to-end cloud services empower enterprises to modernize their infrastructure, optimize operational costs, and accelerate business innovation.
              </p>

              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Key Capabilities & Value Proposition</h3>
              <p className="service-text">
                Whether you're adopting multi-cloud architectures, refactoring legacy applications, or looking for managed cloud support, our certified architects deliver tailored strategies aligned with your governance and security protocols.
              </p>
              
              <div className="service-features-grid">
                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-rocket"></i>
                  </div>
                  <h4>Rapid Deployment</h4>
                  <p>Accelerate time-to-market with automated CI/CD pipelines and infrastructure as code.</p>
                </div>

                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-shield-halved"></i>
                  </div>
                  <h4>Zero-Trust Security</h4>
                  <p>Protect workloads with real-time threat monitoring, data encryption, and strict IAM policies.</p>
                </div>

                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-coins"></i>
                  </div>
                  <h4>FinOps & Cost Control</h4>
                  <p>Optimize cloud consumption and eliminate wasteful spending with automated resource scaling.</p>
                </div>

                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-network-wired"></i>
                  </div>
                  <h4>Hybrid Integration</h4>
                  <p>Seamlessly connect on-premises data centers with AWS, Azure, or Google Cloud environments.</p>
                </div>
              </div>

              <h3 style={{ fontSize: '1.5rem', marginTop: '35px', marginBottom: '15px' }}>Why Choose TechCore For Cloud Transformation?</h3>
              <p className="service-text">
                We bring proven frameworks, automation accelerators, and round-the-clock expert monitoring to ensure zero disruption during your migration journey.
              </p>
              
              <ul className="service-checklist">
                <li><i className="fas fa-circle-check"></i> 99.99% Guaranteed SLA Uptime</li>
                <li><i className="fas fa-circle-check"></i> SOC-2 & ISO 27001 Certified Protocols</li>
                <li><i className="fas fa-circle-check"></i> Automated Disaster Recovery Strategy</li>
                <li><i className="fas fa-circle-check"></i> Dedicated 24/7 Cloud Support Team</li>
                <li><i className="fas fa-circle-check"></i> Multi-Cloud Multi-Tenant Management</li>
                <li><i className="fas fa-circle-check"></i> Automated Compliance Monitoring</li>
              </ul>
            </div>

            {/* Sidebar */}
            <div className="service-sidebar fade-in-right" ref={sidebarRef}>
              {/* Category Widget */}
              <div className="sidebar-widget">
                <h4 className="sidebar-widget-title">All Services</h4>
                <ul className="service-menu-list">
                  {servicesList.map((item, i) => (
                    <li key={i}>
                      <a href="#" className={`service-menu-link ${i === 0 ? 'active' : ''}`}>
                        <span>{item}</span>
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Download Brochure Widget */}
              <div className="sidebar-widget">
                <h4 className="sidebar-widget-title">Resources & Info</h4>
                <a href="#" className="sidebar-download-btn">
                  <span><i className="fas fa-file-pdf" style={{ color: '#e11d48', marginRight: '10px' }}></i> Service Overview.pdf</span>
                  <i className="fas fa-download"></i>
                </a>
                <a href="#" className="sidebar-download-btn">
                  <span><i className="fas fa-file-word" style={{ color: '#2563eb', marginRight: '10px' }}></i> Architecture Blueprint.doc</span>
                  <i className="fas fa-download"></i>
                </a>
              </div>

              {/* Support Callout Widget */}
              <div className="sidebar-cta-widget">
                <i className="fas fa-headset main-icon"></i>
                <h3>Need Technical Guidance?</h3>
                <p>Talk directly with our principal cloud architect to discuss your business requirements.</p>
                <a href="tel:+165489542345" className="sidebar-phone-btn">
                  <i className="fas fa-phone-volume"></i> +654 8954 2345
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
