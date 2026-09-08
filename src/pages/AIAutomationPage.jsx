import PageBanner from '../components/common/PageBanner/PageBanner';
import { useScrollReveal } from '../hooks/useScrollReveal';
import CTA from '../components/sections/CTA/CTA';
import { Link } from 'react-router-dom';

export default function AIAutomationPage() {
  const contentRef = useScrollReveal();
  const sidebarRef = useScrollReveal();

  return (
    <>
      <PageBanner
        title="AI Automation"
        breadcrumbs={[
          { label: 'Our Services', path: '/services' },
          { label: 'AI Automation' }
        ]}
      />

      <section className="service-details-section">
        <div className="container">
          <div className="grid grid-7-5">
            <div className="service-main-card fade-in-left" ref={contentRef}>

              <h2 className="service-title">Automate Smarter. Scale Faster with AI</h2>
              <p className="service-text">
                Chore Virtual's AI Automation solutions help businesses eliminate repetitive tasks, cut costs, and make smarter decisions — powered by cutting-edge AI and machine learning.
              </p>

              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Our AI Automation Services</h3>
              <p className="service-text">
                We integrate AI into your workflows to boost productivity and give your business a competitive edge.
              </p>

              <div className="service-features-grid">
                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-robot"></i>
                  </div>
                  <h4>AI Chatbots</h4>
                  <p>24/7 AI chatbots that handle customer queries, lead capture, and support — automatically.</p>
                </div>

                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-gears"></i>
                  </div>
                  <h4>Process Automation</h4>
                  <p>Automate data entry, invoicing, approvals, and reporting with zero manual effort.</p>
                </div>

                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-chart-bar"></i>
                  </div>
                  <h4>Predictive Analytics</h4>
                  <p>Forecast trends and customer behavior with AI-powered analytics for smarter decisions.</p>
                </div>

                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-plug"></i>
                  </div>
                  <h4>AI-Powered Integrations</h4>
                  <p>Integrate AI into your CRM, ERP, and existing tools for a smarter, connected ecosystem.</p>
                </div>
              </div>

              <h3 style={{ fontSize: '1.5rem', marginTop: '35px', marginBottom: '15px' }}>Why Choose Chore Virtual for AI Automation?</h3>
              <p className="service-text">
                Our AI specialists identify inefficiencies and deliver smart, measurable automation solutions for businesses of every size.
              </p>

              <ul className="service-checklist">
                <li><i className="fas fa-circle-check"></i> Custom AI Solutions Built for Your Business</li>
                <li><i className="fas fa-circle-check"></i> End-to-End Workflow Automation</li>
                <li><i className="fas fa-circle-check"></i> Reduce Operational Costs by up to 60%</li>
                <li><i className="fas fa-circle-check"></i> 24/7 AI-Driven Customer Engagement</li>
                <li><i className="fas fa-circle-check"></i> Seamless Integration with Existing Systems</li>
                <li><i className="fas fa-circle-check"></i> Real-Time AI Insights and Reporting Dashboard</li>
              </ul>
            </div>

            <div className="service-sidebar fade-in-right" ref={sidebarRef}>
              <div className="sidebar-widget">
                <h4 className="sidebar-widget-title">All Services</h4>
                <ul className="service-menu-list">
                  {[
                    { name: 'Website Design and Development', path: '/website-design' },
                    { name: 'Mobile App Development', path: '/mobile-app-development' },
                    { name: 'Digital Marketing', path: '/digital-marketing' },
                    { name: 'Product Development', path: '/product-development' },
                    { name: 'AI Automation', path: '/ai-automation' },
                    { name: 'VA Services', path: '/va-services' },
                  ].map((item, i) => (
                    <li key={i}>
                      <Link to={item.path} className={"service-menu-link" + (item.path === '/ai-automation' ? ' active' : '')}>
                        <span>{item.name}</span>
                        <i className="fas fa-arrow-right"></i>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-widget">
                <h4 className="sidebar-widget-title">Resources and Info</h4>
                <a href="#" className="sidebar-download-btn">
                  <span><i className="fas fa-file-pdf" style={{ color: '#e11d48', marginRight: '10px' }}></i> AI Automation Guide.pdf</span>
                  <i className="fas fa-download"></i>
                </a>
                <a href="#" className="sidebar-download-btn">
                  <span><i className="fas fa-file-word" style={{ color: '#2563eb', marginRight: '10px' }}></i> Automation ROI Calculator.doc</span>
                  <i className="fas fa-download"></i>
                </a>
              </div>

              <div className="sidebar-cta-widget">
                <i className="fas fa-robot main-icon"></i>
                <h3>Ready to Automate?</h3>
                <p>Talk to our AI experts and transform your business operations today.</p>
                <a href="tel:+919860867066" className="sidebar-phone-btn">
                  <i className="fas fa-phone-volume"></i> +91- 9860867066
                </a>
                <a href="tel:+919049540142" className="sidebar-phone-btn" style={{ marginTop: '10px' }}>
                  <i className="fas fa-phone-volume"></i> +91- 9049540142
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
