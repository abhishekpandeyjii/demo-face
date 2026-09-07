import PageBanner from '../components/common/PageBanner/PageBanner';
import { useScrollReveal } from '../hooks/useScrollReveal';
import CTA from '../components/sections/CTA/CTA';
import { Link } from 'react-router-dom';

export default function DigitalMarketingPage() {
  const contentRef = useScrollReveal();
  const sidebarRef = useScrollReveal();

  return (
    <>
      <PageBanner
        title="Digital Marketing"
        breadcrumbs={[
          { label: 'Digital Marketing' }
        ]}
      />

      <section className="service-details-section">
        <div className="container">
          <div className="grid grid-7-5">
            <div className="service-main-card fade-in-left" ref={contentRef}>
              <img
                src="/images/service_digitalmarketing_1788780757912.png"
                alt="Digital Marketing Services"
                className="service-main-image"
              />
              <h2 className="service-title">Data-Driven Digital Marketing That Delivers ROI</h2>
              <p className="service-text">
                Stop guessing and start growing. Chore Virtual&apos;s digital marketing services combine cutting-edge analytics, creative storytelling, and multi-channel strategies to put your brand in front of the right audience at the right time. We help businesses of all sizes generate qualified leads, boost conversions, and build lasting brand authority online.
              </p>

              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Our Digital Marketing Services</h3>
              <p className="service-text">
                From SEO and paid advertising to social media management and content marketing, we offer a full suite of services designed to maximize your online visibility and revenue.
              </p>

              <div className="service-features-grid">
                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-magnifying-glass"></i>
                  </div>
                  <h4>SEO & Organic Growth</h4>
                  <p>Dominate search rankings with technical SEO, content optimization, and high-authority backlink strategies.</p>
                </div>

                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-bullhorn"></i>
                  </div>
                  <h4>PPC & Paid Advertising</h4>
                  <p>Google Ads, Facebook Ads, LinkedIn campaigns — laser-targeted ads that convert clicks into customers.</p>
                </div>

                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-share-nodes"></i>
                  </div>
                  <h4>Social Media Marketing</h4>
                  <p>Engaging content, community management, and influencer partnerships across all major platforms.</p>
                </div>

                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-pen-nib"></i>
                  </div>
                  <h4>Content Marketing</h4>
                  <p>Blog posts, whitepapers, infographics, and video content that educates, engages, and converts.</p>
                </div>
              </div>

              <h3 style={{ fontSize: '1.5rem', marginTop: '35px', marginBottom: '15px' }}>Why Choose Chore Virtual For Digital Marketing?</h3>
              <p className="service-text">
                We don&apos;t believe in vanity metrics. Every campaign we run is tied to real business outcomes — leads generated, revenue earned, and market share gained. Transparent reporting keeps you in the loop at all times.
              </p>

              <ul className="service-checklist">
                <li><i className="fas fa-circle-check"></i> 360° Multi-Channel Marketing Strategy</li>
                <li><i className="fas fa-circle-check"></i> Advanced Analytics & Attribution Tracking</li>
                <li><i className="fas fa-circle-check"></i> A/B Testing & Conversion Rate Optimization</li>
                <li><i className="fas fa-circle-check"></i> Monthly ROI Reports with Actionable Insights</li>
                <li><i className="fas fa-circle-check"></i> Dedicated Account Manager</li>
                <li><i className="fas fa-circle-check"></i> Average 3x Return on Ad Spend (ROAS)</li>
              </ul>
            </div>

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
                  <span><i className="fas fa-file-pdf" style={{ color: '#e11d48', marginRight: '10px' }}></i> Marketing Strategy Guide.pdf</span>
                  <i className="fas fa-download"></i>
                </a>
                <a href="#" className="sidebar-download-btn">
                  <span><i className="fas fa-file-word" style={{ color: '#2563eb', marginRight: '10px' }}></i> SEO Audit Checklist.doc</span>
                  <i className="fas fa-download"></i>
                </a>
              </div>

              <div className="sidebar-cta-widget">
                <i className="fas fa-chart-line main-icon"></i>
                <h3>Ready to Grow Online?</h3>
                <p>Get a free digital marketing audit and discover untapped growth opportunities for your brand.</p>
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
