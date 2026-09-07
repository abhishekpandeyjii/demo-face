import PageBanner from '../components/common/PageBanner/PageBanner';
import { useScrollReveal } from '../hooks/useScrollReveal';
import CTA from '../components/sections/CTA/CTA';
import { Link } from 'react-router-dom';

export default function EmailManagementPage() {
  const contentRef = useScrollReveal();
  const sidebarRef = useScrollReveal();

  return (
    <>
      <PageBanner
        title="Email Management"
        breadcrumbs={[
          { label: 'Email Management' }
        ]}
      />

      <section className="service-details-section">
        <div className="container">
          <div className="grid grid-7-5">
            <div className="service-main-card fade-in-left" ref={contentRef}>
              <img
                src="/images/service_emailmgmt_1788781227810.png"
                alt="Email Management Services"
                className="service-main-image"
              />
              <h2 className="service-title">Professional Email Management & Automation</h2>
              <p className="service-text">
                A cluttered inbox costs you hours every day. Chore Virtual&apos;s email management services take the chaos out of your communications. Our trained virtual assistants organize, prioritize, respond to, and follow up on your emails — so you never miss an important message and always stay on top of your business correspondence.
              </p>

              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Our Email Management Solutions</h3>
              <p className="service-text">
                From inbox zero strategies to automated email campaigns, we handle the full spectrum of business email management with precision and confidentiality.
              </p>

              <div className="service-features-grid">
                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-inbox"></i>
                  </div>
                  <h4>Inbox Organization</h4>
                  <p>Smart categorization, filtering, labeling, and prioritization to achieve and maintain inbox zero daily.</p>
                </div>

                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-reply-all"></i>
                  </div>
                  <h4>Email Response Drafting</h4>
                  <p>Professional, on-brand responses drafted and sent on your behalf with approval workflows.</p>
                </div>

                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-envelope-circle-check"></i>
                  </div>
                  <h4>Email Campaign Management</h4>
                  <p>Newsletter creation, drip campaigns, and automated sequences using Mailchimp, SendGrid, or HubSpot.</p>
                </div>

                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-shield-halved"></i>
                  </div>
                  <h4>Spam & Security Filtering</h4>
                  <p>Advanced spam filtering, phishing detection, and email security monitoring to protect your accounts.</p>
                </div>
              </div>

              <h3 style={{ fontSize: '1.5rem', marginTop: '35px', marginBottom: '15px' }}>Why Choose Chore Virtual For Email Management?</h3>
              <p className="service-text">
                Our email management services save executives an average of 2-3 hours per day. With strict NDA compliance and secure access protocols, your confidential communications are always protected.
              </p>

              <ul className="service-checklist">
                <li><i className="fas fa-circle-check"></i> Save 2-3 Hours Daily on Email</li>
                <li><i className="fas fa-circle-check"></i> Inbox Zero Maintained Every Day</li>
                <li><i className="fas fa-circle-check"></i> Strict NDA & Confidentiality Protocols</li>
                <li><i className="fas fa-circle-check"></i> Follow-Up Tracking & Reminders</li>
                <li><i className="fas fa-circle-check"></i> Calendar & Meeting Coordination</li>
                <li><i className="fas fa-circle-check"></i> Compatible with Gmail, Outlook, & More</li>
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
                      <Link to={item.path} className={`service-menu-link ${i === 2 ? 'active' : ''}`}>
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
                  <span><i className="fas fa-file-pdf" style={{ color: '#e11d48', marginRight: '10px' }}></i> Email SOP Template.pdf</span>
                  <i className="fas fa-download"></i>
                </a>
                <a href="#" className="sidebar-download-btn">
                  <span><i className="fas fa-file-word" style={{ color: '#2563eb', marginRight: '10px' }}></i> Inbox Management Guide.doc</span>
                  <i className="fas fa-download"></i>
                </a>
              </div>

              <div className="sidebar-cta-widget">
                <i className="fas fa-envelope main-icon"></i>
                <h3>Drowning in Emails?</h3>
                <p>Let our experts organize your inbox and handle your communications professionally.</p>
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
