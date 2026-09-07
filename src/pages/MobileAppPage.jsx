import PageBanner from '../components/common/PageBanner/PageBanner';
import { useScrollReveal } from '../hooks/useScrollReveal';
import CTA from '../components/sections/CTA/CTA';
import { Link } from 'react-router-dom';

export default function MobileAppPage() {
  const contentRef = useScrollReveal();
  const sidebarRef = useScrollReveal();

  return (
    <>
      <PageBanner
        title="Mobile App Development"
        breadcrumbs={[
          { label: 'Mobile App Development' }
        ]}
      />

      <section className="service-details-section">
        <div className="container">
          <div className="grid grid-7-5">
            <div className="service-main-card fade-in-left" ref={contentRef}>
              <img
                src="/images/service_mobileapp_1788780742695.png"
                alt="Mobile App Development"
                className="service-main-image"
              />
              <h2 className="service-title">Enterprise-Grade Mobile App Development</h2>
              <p className="service-text">
                In a mobile-first world, your app is your most powerful business tool. Chore Virtual designs and develops high-performance native and cross-platform mobile applications for iOS and Android that engage users, streamline operations, and drive measurable revenue growth. From concept to App Store launch, we handle every step.
              </p>

              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Our Mobile Development Expertise</h3>
              <p className="service-text">
                We build apps that people love to use. Our development process blends stunning UI/UX with robust backend architecture, ensuring your app scales as your business grows.
              </p>

              <div className="service-features-grid">
                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fab fa-apple"></i>
                  </div>
                  <h4>iOS Development</h4>
                  <p>Native Swift apps optimized for iPhone and iPad with seamless Apple ecosystem integration.</p>
                </div>

                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fab fa-android"></i>
                  </div>
                  <h4>Android Development</h4>
                  <p>Kotlin-powered Android apps designed for the full range of devices and screen sizes.</p>
                </div>

                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-mobile-screen-button"></i>
                  </div>
                  <h4>Cross-Platform (React Native)</h4>
                  <p>Single codebase apps for both platforms — faster delivery, lower cost, native feel.</p>
                </div>

                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-cloud-arrow-up"></i>
                  </div>
                  <h4>Backend & API Integration</h4>
                  <p>Robust cloud backends with RESTful APIs, real-time sync, push notifications, and analytics.</p>
                </div>
              </div>

              <h3 style={{ fontSize: '1.5rem', marginTop: '35px', marginBottom: '15px' }}>Why Choose Chore Virtual For Mobile Apps?</h3>
              <p className="service-text">
                Our apps don&apos;t just look beautiful — they perform flawlessly. We follow agile methodology with continuous testing, ensuring bug-free releases and rapid iteration based on real user feedback.
              </p>

              <ul className="service-checklist">
                <li><i className="fas fa-circle-check"></i> Native & Cross-Platform Development</li>
                <li><i className="fas fa-circle-check"></i> Agile Sprints with Weekly Demos</li>
                <li><i className="fas fa-circle-check"></i> App Store Optimization (ASO)</li>
                <li><i className="fas fa-circle-check"></i> Post-Launch Support & Maintenance</li>
                <li><i className="fas fa-circle-check"></i> CI/CD Pipeline for Rapid Releases</li>
                <li><i className="fas fa-circle-check"></i> 4.8+ Average App Store Rating</li>
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
                  <span><i className="fas fa-file-pdf" style={{ color: '#e11d48', marginRight: '10px' }}></i> Mobile App Portfolio.pdf</span>
                  <i className="fas fa-download"></i>
                </a>
                <a href="#" className="sidebar-download-btn">
                  <span><i className="fas fa-file-word" style={{ color: '#2563eb', marginRight: '10px' }}></i> App Dev Process Guide.doc</span>
                  <i className="fas fa-download"></i>
                </a>
              </div>

              <div className="sidebar-cta-widget">
                <i className="fas fa-mobile-screen main-icon"></i>
                <h3>Have an App Idea?</h3>
                <p>Share your vision with us and get a detailed project estimate within 24 hours.</p>
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
