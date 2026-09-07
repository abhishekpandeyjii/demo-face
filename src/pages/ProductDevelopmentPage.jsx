import PageBanner from '../components/common/PageBanner/PageBanner';
import { useScrollReveal } from '../hooks/useScrollReveal';
import CTA from '../components/sections/CTA/CTA';
import { Link } from 'react-router-dom';

export default function ProductDevelopmentPage() {
  const contentRef = useScrollReveal();
  const sidebarRef = useScrollReveal();

  return (
    <>
      <PageBanner
        title="Product Development"
        breadcrumbs={[
          { label: 'Product Development' }
        ]}
      />

      <section className="service-details-section">
        <div className="container">
          <div className="grid grid-7-5">
            <div className="service-main-card fade-in-left" ref={contentRef}>
              <img
                src="/images/service_productdev_1788781181171.png"
                alt="Product Development"
                className="service-main-image"
              />
              <h2 className="service-title">End-to-End Product Development & Innovation</h2>
              <p className="service-text">
                Transforming ideas into market-ready products is what we do best. Chore Virtual provides full-cycle product development services — from ideation and prototyping to MVP launch and scaling. We partner with startups, SMEs, and enterprises to build digital products that solve real problems and capture market opportunities.
              </p>

              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Our Product Development Process</h3>
              <p className="service-text">
                We follow a lean, iterative approach that validates ideas early, reduces risk, and delivers products that users actually want. Our cross-functional teams combine strategy, design, and engineering expertise.
              </p>

              <div className="service-features-grid">
                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  <h4>Ideation & Strategy</h4>
                  <p>Market research, competitive analysis, and product roadmapping to validate your concept before building.</p>
                </div>

                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-pencil-ruler"></i>
                  </div>
                  <h4>Prototyping & Design</h4>
                  <p>Interactive wireframes and high-fidelity prototypes tested with real users before a single line of code.</p>
                </div>

                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-rocket"></i>
                  </div>
                  <h4>MVP Development</h4>
                  <p>Launch a minimum viable product fast, gather feedback, and iterate based on real-world usage data.</p>
                </div>

                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-arrows-up-down-left-right"></i>
                  </div>
                  <h4>Scale & Optimize</h4>
                  <p>Performance tuning, feature expansion, and infrastructure scaling as your user base grows.</p>
                </div>
              </div>

              <h3 style={{ fontSize: '1.5rem', marginTop: '35px', marginBottom: '15px' }}>Why Choose Chore Virtual For Product Development?</h3>
              <p className="service-text">
                We&apos;ve helped launch 50+ digital products across industries including fintech, healthtech, edtech, and e-commerce. Our track record speaks for itself — products that users love and investors fund.
              </p>

              <ul className="service-checklist">
                <li><i className="fas fa-circle-check"></i> Lean Startup Methodology</li>
                <li><i className="fas fa-circle-check"></i> User-Centered Design Thinking</li>
                <li><i className="fas fa-circle-check"></i> Agile Development with 2-Week Sprints</li>
                <li><i className="fas fa-circle-check"></i> Dedicated Product Manager Assigned</li>
                <li><i className="fas fa-circle-check"></i> Scalable Cloud-Native Architecture</li>
                <li><i className="fas fa-circle-check"></i> Post-Launch Analytics & Growth Support</li>
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
                      <Link to={item.path} className={`service-menu-link ${i === 3 ? 'active' : ''}`}>
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
                  <span><i className="fas fa-file-pdf" style={{ color: '#e11d48', marginRight: '10px' }}></i> Product Roadmap Template.pdf</span>
                  <i className="fas fa-download"></i>
                </a>
                <a href="#" className="sidebar-download-btn">
                  <span><i className="fas fa-file-word" style={{ color: '#2563eb', marginRight: '10px' }}></i> MVP Planning Guide.doc</span>
                  <i className="fas fa-download"></i>
                </a>
              </div>

              <div className="sidebar-cta-widget">
                <i className="fas fa-lightbulb main-icon"></i>
                <h3>Got a Product Idea?</h3>
                <p>Let&apos;s validate your concept and build a roadmap to launch. Free consultation available.</p>
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
