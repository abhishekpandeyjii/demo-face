import PageBanner from '../components/common/PageBanner/PageBanner';
import { useScrollReveal } from '../hooks/useScrollReveal';
import CTA from '../components/sections/CTA/CTA';
import { Link } from 'react-router-dom';

export default function WebDesignPage() {
  const contentRef = useScrollReveal();
  const sidebarRef = useScrollReveal();

  return (
    <>
      <PageBanner
        title="Website Design & Development"
        breadcrumbs={[
          { label: 'Website Design & Development' }
        ]}
        theme="purple"
      />

      <section className="service-details-section">
        <div className="container">
          <div className="grid grid-7-5">
            {/* Main Content */}
            <div className="service-main-card fade-in-left" ref={contentRef}>
              <img
                src="/images/service_webdesign_1788780728634.png"
                alt="Website Design & Development"
                className="service-main-image"
              />
              <h2 className="service-title">Custom Website Design & Development Solutions</h2>
              <p className="service-text">
                Your website is the digital face of your brand — and first impressions matter. At Chore Virtual, we craft visually stunning, lightning-fast, and conversion-optimized websites that captivate visitors and turn them into loyal customers. From responsive landing pages to full-scale enterprise portals, our expert designers and developers build digital experiences that set you apart.
              </p>

              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Our Web Design & Development Services</h3>
              <p className="service-text">
                Whether you need a brand-new website from scratch, a redesign of your existing platform, or an e-commerce storefront that drives sales, our team delivers pixel-perfect results aligned with your business goals.
              </p>

              <div className="service-features-grid">
                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-palette"></i>
                  </div>
                  <h4>UI/UX Design</h4>
                  <p>Beautiful, intuitive interfaces designed with user psychology and modern aesthetics in mind.</p>
                </div>

                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-code"></i>
                  </div>
                  <h4>Frontend Development</h4>
                  <p>Responsive, fast-loading websites built with React, Next.js, and cutting-edge web technologies.</p>
                </div>

                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-cart-shopping"></i>
                  </div>
                  <h4>E-Commerce Solutions</h4>
                  <p>Scalable online stores with Shopify, WooCommerce, or custom-built platforms to maximize revenue.</p>
                </div>

                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-magnifying-glass-chart"></i>
                  </div>
                  <h4>SEO-Optimized Build</h4>
                  <p>Every website is built with search engine visibility in mind — fast load times, clean code, structured data.</p>
                </div>
              </div>

              <h3 style={{ fontSize: '1.5rem', marginTop: '35px', marginBottom: '15px' }}>Why Choose Chore Virtual For Web Design?</h3>
              <p className="service-text">
                We don&apos;t just build websites — we build digital growth engines. Our design-first approach ensures every pixel serves a purpose, every interaction delights the user, and every page is optimized for conversions.
              </p>

              <ul className="service-checklist">
                <li><i className="fas fa-circle-check"></i> 100% Custom Designs — No Templates</li>
                <li><i className="fas fa-circle-check"></i> Mobile-First Responsive Architecture</li>
                <li><i className="fas fa-circle-check"></i> Built-In SEO & Performance Optimization</li>
                <li><i className="fas fa-circle-check"></i> CMS Integration (WordPress, Headless CMS)</li>
                <li><i className="fas fa-circle-check"></i> Ongoing Maintenance & Support Plans</li>
                <li><i className="fas fa-circle-check"></i> Average 40% Increase in Conversion Rates</li>
              </ul>
            </div>

            {/* Sidebar */}
            <div className="service-sidebar fade-in-right" ref={sidebarRef}>
              <div className="sidebar-widget">
                <h4 className="sidebar-widget-title">All Services</h4>
                <ul className="service-menu-list">
                  {[
                    { name: 'Website Design & Development', path: '/website-design' },
                    { name: 'Mobile App Development', path: '/mobile-app-development' },
                    { name: 'Digital Marketing', path: '/digital-marketing' },
                    { name: 'Product Development', path: '/product-development' },
                    { name: 'VA Services', path: '/va-services' }
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
                  <span><i className="fas fa-file-pdf" style={{ color: '#e11d48', marginRight: '10px' }}></i> Web Design Brochure.pdf</span>
                  <i className="fas fa-download"></i>
                </a>
                <a href="#" className="sidebar-download-btn">
                  <span><i className="fas fa-file-word" style={{ color: '#2563eb', marginRight: '10px' }}></i> Project Checklist.doc</span>
                  <i className="fas fa-download"></i>
                </a>
              </div>

              <div className="sidebar-cta-widget">
                <i className="fas fa-headset main-icon"></i>
                <h3>Start Your Web Project</h3>
                <p>Talk to our design experts to discuss your website vision and get a free quote.</p>
                <a href="tel:+917276831928" className="sidebar-phone-btn">
                  <i className="fas fa-phone-volume"></i> +91 7276831928
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Need a New Website?"
        description="Our expert designers and developers are ready to build a stunning, high-converting digital presence for your brand."
        buttonText="Discuss Your Project"
        theme="purple"
      />
    </>
  );
}
