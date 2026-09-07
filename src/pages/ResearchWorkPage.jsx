import PageBanner from '../components/common/PageBanner/PageBanner';
import { useScrollReveal } from '../hooks/useScrollReveal';
import CTA from '../components/sections/CTA/CTA';
import { Link } from 'react-router-dom';

export default function ResearchWorkPage() {
  const contentRef = useScrollReveal();
  const sidebarRef = useScrollReveal();

  return (
    <>
      <PageBanner
        title="Research Work"
        breadcrumbs={[
          { label: 'Research Work' }
        ]}
      />

      <section className="service-details-section">
        <div className="container">
          <div className="grid grid-7-5">
            <div className="service-main-card fade-in-left" ref={contentRef}>
              <img
                src="/images/service_research_1788781268784.png"
                alt="Research Work Services"
                className="service-main-image"
              />
              <h2 className="service-title">In-Depth Research & Business Intelligence Services</h2>
              <p className="service-text">
                Great decisions start with great data. Chore Virtual provides professional research services that deliver actionable insights for your business. From competitive intelligence and market analysis to lead generation research and industry trend reports — our researchers dig deep to find the information that gives you a strategic edge.
              </p>

              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Our Research Services</h3>
              <p className="service-text">
                We combine manual research expertise with powerful data tools to deliver comprehensive, well-structured research outputs. Every report is fact-checked, source-verified, and presented in an executive-ready format.
              </p>

              <div className="service-features-grid">
                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-chart-pie"></i>
                  </div>
                  <h4>Market Research</h4>
                  <p>Industry sizing, trend analysis, customer segmentation, and opportunity mapping for strategic planning.</p>
                </div>

                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-crosshairs"></i>
                  </div>
                  <h4>Competitive Intelligence</h4>
                  <p>Monitor competitor strategies, pricing, product launches, and market positioning in real-time.</p>
                </div>

                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-users-viewfinder"></i>
                  </div>
                  <h4>Lead Generation Research</h4>
                  <p>Build verified prospect lists with contact details, company info, and intent signals for your sales team.</p>
                </div>

                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-book-open-reader"></i>
                  </div>
                  <h4>Academic & Industry Reports</h4>
                  <p>White papers, case studies, and technical reports backed by credible sources and data analysis.</p>
                </div>
              </div>

              <h3 style={{ fontSize: '1.5rem', marginTop: '35px', marginBottom: '15px' }}>Why Choose Chore Virtual For Research?</h3>
              <p className="service-text">
                Our research team has delivered 500+ projects across 30+ industries. We provide structured, presentation-ready deliverables that save your team weeks of manual research effort.
              </p>

              <ul className="service-checklist">
                <li><i className="fas fa-circle-check"></i> 500+ Research Projects Delivered</li>
                <li><i className="fas fa-circle-check"></i> Source-Verified & Fact-Checked Data</li>
                <li><i className="fas fa-circle-check"></i> Executive-Ready Presentation Format</li>
                <li><i className="fas fa-circle-check"></i> NDA-Protected & Confidential</li>
                <li><i className="fas fa-circle-check"></i> Multi-Industry Expertise (30+ Sectors)</li>
                <li><i className="fas fa-circle-check"></i> Flexible Engagement — Per-Project or Retainer</li>
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
                      <Link to={item.path} className={`service-menu-link ${i === 4 ? 'active' : ''}`}>
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
                  <span><i className="fas fa-file-pdf" style={{ color: '#e11d48', marginRight: '10px' }}></i> Research Methodology.pdf</span>
                  <i className="fas fa-download"></i>
                </a>
                <a href="#" className="sidebar-download-btn">
                  <span><i className="fas fa-file-word" style={{ color: '#2563eb', marginRight: '10px' }}></i> Sample Report Template.doc</span>
                  <i className="fas fa-download"></i>
                </a>
              </div>

              <div className="sidebar-cta-widget">
                <i className="fas fa-magnifying-glass-chart main-icon"></i>
                <h3>Need Custom Research?</h3>
                <p>Tell us what you&apos;re looking for and we&apos;ll deliver a detailed, sourced report.</p>
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
