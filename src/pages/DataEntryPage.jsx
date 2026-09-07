import PageBanner from '../components/common/PageBanner/PageBanner';
import { useScrollReveal } from '../hooks/useScrollReveal';
import CTA from '../components/sections/CTA/CTA';
import { Link } from 'react-router-dom';

export default function DataEntryPage() {
  const contentRef = useScrollReveal();
  const sidebarRef = useScrollReveal();

  return (
    <>
      <PageBanner
        title="Data Entry Services"
        breadcrumbs={[
          { label: 'Data Entry Services' }
        ]}
      />

      <section className="service-details-section">
        <div className="container">
          <div className="grid grid-7-5">
            <div className="service-main-card fade-in-left" ref={contentRef}>
              <img
                src="/images/service_dataentry_1788781196824.png"
                alt="Data Entry Services"
                className="service-main-image"
              />
              <h2 className="service-title">Accurate & Efficient Data Entry Services</h2>
              <p className="service-text">
                Data is the backbone of every business decision, and accuracy matters. Chore Virtual offers professional data entry services that save you time, reduce errors, and let your team focus on high-value tasks. Our trained operators handle high-volume data processing with 99.9% accuracy — whether it&apos;s structured databases, spreadsheets, or digitizing paper records.
              </p>

              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Our Data Entry Solutions</h3>
              <p className="service-text">
                We handle all types of data entry projects — from simple form filling to complex multi-source data aggregation. Every project is quality-checked through a rigorous 3-tier verification process.
              </p>

              <div className="service-features-grid">
                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-keyboard"></i>
                  </div>
                  <h4>Online/Offline Data Entry</h4>
                  <p>Manual and automated data entry for CRM systems, ERP platforms, databases, and spreadsheets.</p>
                </div>

                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-file-invoice"></i>
                  </div>
                  <h4>Document Digitization</h4>
                  <p>Convert paper records, invoices, and forms into organized digital formats with OCR technology.</p>
                </div>

                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-database"></i>
                  </div>
                  <h4>Database Management</h4>
                  <p>Data cleansing, deduplication, enrichment, and migration across platforms and formats.</p>
                </div>

                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-clipboard-check"></i>
                  </div>
                  <h4>Quality Assurance</h4>
                  <p>3-tier verification process ensures 99.9% accuracy on every deliverable, every time.</p>
                </div>
              </div>

              <h3 style={{ fontSize: '1.5rem', marginTop: '35px', marginBottom: '15px' }}>Why Choose Chore Virtual For Data Entry?</h3>
              <p className="service-text">
                Outsourcing data entry to us saves you up to 60% in operational costs while maintaining accuracy levels that exceed industry standards. Our flexible engagement models adapt to your volume and timelines.
              </p>

              <ul className="service-checklist">
                <li><i className="fas fa-circle-check"></i> 99.9% Data Accuracy Guarantee</li>
                <li><i className="fas fa-circle-check"></i> 24/7 Operations for Global Clients</li>
                <li><i className="fas fa-circle-check"></i> Strict Data Security & NDA Compliance</li>
                <li><i className="fas fa-circle-check"></i> Scalable Team — 5 to 500+ Operators</li>
                <li><i className="fas fa-circle-check"></i> Quick Turnaround Times</li>
                <li><i className="fas fa-circle-check"></i> Up to 60% Cost Savings</li>
              </ul>
            </div>

            <div className="service-sidebar fade-in-right" ref={sidebarRef}>
              <div className="sidebar-widget">
                <h4 className="sidebar-widget-title">VA Services</h4>
                <ul className="service-menu-list">
                  {[
                    { name: 'Data Entry Services', path: '/data-entry' },
                    { name: 'Customer Support', path: '/customer-support' },
                    { name: 'Email Management', path: '/email-management' },
                    { name: 'Document Management', path: '/document-management' },
                    { name: 'Research Work', path: '/research-work' }
                  ].map((item, i) => (
                    <li key={i}>
                      <Link to={item.path} className={`service-menu-link ${i === 0 ? 'active' : ''}`}>
                        <span>{item.name}</span>
                        <i className="fas fa-arrow-right"></i>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-widget">
                <h4 className="sidebar-widget-title">Resources & Info</h4>
                <a href="#" className="sidebar-download-btn">
                  <span><i className="fas fa-file-pdf" style={{ color: '#e11d48', marginRight: '10px' }}></i> Data Entry Pricing.pdf</span>
                  <i className="fas fa-download"></i>
                </a>
                <a href="#" className="sidebar-download-btn">
                  <span><i className="fas fa-file-word" style={{ color: '#2563eb', marginRight: '10px' }}></i> Quality Process Guide.doc</span>
                  <i className="fas fa-download"></i>
                </a>
              </div>

              <div className="sidebar-cta-widget">
                <i className="fas fa-database main-icon"></i>
                <h3>Need Data Processing?</h3>
                <p>Send us a sample and get a free trial with guaranteed accuracy benchmarks.</p>
                <a href="tel:+919860867066" className="sidebar-phone-btn">
                  <i className="fas fa-phone-volume"></i> +91 9860867066
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
