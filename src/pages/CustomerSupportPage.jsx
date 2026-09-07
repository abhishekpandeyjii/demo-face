import PageBanner from '../components/common/PageBanner/PageBanner';
import { useScrollReveal } from '../hooks/useScrollReveal';
import CTA from '../components/sections/CTA/CTA';
import { Link } from 'react-router-dom';

export default function CustomerSupportPage() {
  const contentRef = useScrollReveal();
  const sidebarRef = useScrollReveal();

  return (
    <>
      <PageBanner
        title="Customer Support"
        breadcrumbs={[
          { label: 'Customer Support' }
        ]}
      />

      <section className="service-details-section">
        <div className="container">
          <div className="grid grid-7-5">
            <div className="service-main-card fade-in-left" ref={contentRef}>
              <img
                src="/images/service_customersupport_1788781209707.png"
                alt="Customer Support Services"
                className="service-main-image"
              />
              <h2 className="service-title">24/7 Omnichannel Customer Support Solutions</h2>
              <p className="service-text">
                Exceptional customer support is the secret weapon of thriving businesses. Chore Virtual provides dedicated, multilingual customer support teams that represent your brand with professionalism and empathy. Whether it&apos;s live chat, email, phone, or social media — we ensure every customer interaction builds loyalty and trust.
              </p>

              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Our Customer Support Services</h3>
              <p className="service-text">
                We don&apos;t just answer questions — we create delightful customer experiences. Our agents are trained on your brand voice, products, and processes to provide seamless, on-brand support.
              </p>

              <div className="service-features-grid">
                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-comments"></i>
                  </div>
                  <h4>Live Chat Support</h4>
                  <p>Instant, real-time assistance on your website and apps to reduce bounce rates and boost conversions.</p>
                </div>

                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-phone"></i>
                  </div>
                  <h4>Inbound/Outbound Calls</h4>
                  <p>Professional voice support for customer queries, order tracking, upselling, and complaint resolution.</p>
                </div>

                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-envelope-open-text"></i>
                  </div>
                  <h4>Email & Ticket Support</h4>
                  <p>Organized email handling with SLA-driven response times and escalation workflows via Zendesk, Freshdesk.</p>
                </div>

                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-hashtag"></i>
                  </div>
                  <h4>Social Media Support</h4>
                  <p>Monitor and respond to customer queries on Facebook, Instagram, Twitter, and LinkedIn in real-time.</p>
                </div>
              </div>

              <h3 style={{ fontSize: '1.5rem', marginTop: '35px', marginBottom: '15px' }}>Why Choose Chore Virtual For Customer Support?</h3>
              <p className="service-text">
                Our customer satisfaction rates consistently exceed 95%. We reduce your support costs by up to 50% while improving response times and first-contact resolution rates.
              </p>

              <ul className="service-checklist">
                <li><i className="fas fa-circle-check"></i> 24/7/365 Availability Across Time Zones</li>
                <li><i className="fas fa-circle-check"></i> Multilingual Support (English, Hindi, and more)</li>
                <li><i className="fas fa-circle-check"></i> 95%+ Customer Satisfaction Score (CSAT)</li>
                <li><i className="fas fa-circle-check"></i> Custom-Trained Agents on Your Brand</li>
                <li><i className="fas fa-circle-check"></i> CRM Integration (Zendesk, Salesforce, HubSpot)</li>
                <li><i className="fas fa-circle-check"></i> Up to 50% Cost Reduction vs. In-House</li>
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
                      <Link to={item.path} className={`service-menu-link ${i === 1 ? 'active' : ''}`}>
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
                  <span><i className="fas fa-file-pdf" style={{ color: '#e11d48', marginRight: '10px' }}></i> Support SLA Overview.pdf</span>
                  <i className="fas fa-download"></i>
                </a>
                <a href="#" className="sidebar-download-btn">
                  <span><i className="fas fa-file-word" style={{ color: '#2563eb', marginRight: '10px' }}></i> Agent Training Process.doc</span>
                  <i className="fas fa-download"></i>
                </a>
              </div>

              <div className="sidebar-cta-widget">
                <i className="fas fa-headset main-icon"></i>
                <h3>Upgrade Your Support?</h3>
                <p>Let us handle your customer queries while you focus on growing your business.</p>
                <a href="tel:+917276831928" className="sidebar-phone-btn">
                  <i className="fas fa-phone-volume"></i> +91 7276831928
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
