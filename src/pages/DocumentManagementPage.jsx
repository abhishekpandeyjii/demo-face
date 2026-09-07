import PageBanner from '../components/common/PageBanner/PageBanner';
import { useScrollReveal } from '../hooks/useScrollReveal';
import CTA from '../components/sections/CTA/CTA';
import { Link } from 'react-router-dom';

export default function DocumentManagementPage() {
  const contentRef = useScrollReveal();
  const sidebarRef = useScrollReveal();

  return (
    <>
      <PageBanner
        title="Document Management"
        breadcrumbs={[
          { label: 'Document Management' }
        ]}
      />

      <section className="service-details-section">
        <div className="container">
          <div className="grid grid-7-5">
            <div className="service-main-card fade-in-left" ref={contentRef}>
              <img
                src="/images/service_docmgmt_1788781255539.png"
                alt="Document Management Services"
                className="service-main-image"
              />
              <h2 className="service-title">Streamlined Document Management & Processing</h2>
              <p className="service-text">
                Managing mountains of documents manually is inefficient and error-prone. Chore Virtual provides comprehensive document management services that digitize, organize, index, and securely store your business documents. From contracts and invoices to HR records and compliance files — we bring order to your document chaos.
              </p>

              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Our Document Management Services</h3>
              <p className="service-text">
                We handle the entire document lifecycle — from creation and formatting to archiving and retrieval. Our systematic approach ensures you can find any document in seconds, not hours.
              </p>

              <div className="service-features-grid">
                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-folder-open"></i>
                  </div>
                  <h4>Document Organization</h4>
                  <p>Systematic filing, categorization, and indexing of all business documents for instant retrieval.</p>
                </div>

                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-file-lines"></i>
                  </div>
                  <h4>Document Formatting</h4>
                  <p>Professional formatting of reports, proposals, presentations, and contracts to brand standards.</p>
                </div>

                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-scanner"></i>
                  </div>
                  <h4>Scanning & Digitization</h4>
                  <p>Convert physical documents to searchable digital files with OCR and metadata tagging.</p>
                </div>

                <div className="service-feature-card">
                  <div className="icon-box">
                    <i className="fas fa-lock"></i>
                  </div>
                  <h4>Secure Archival</h4>
                  <p>Cloud-based document storage with encryption, access controls, and compliance audit trails.</p>
                </div>
              </div>

              <h3 style={{ fontSize: '1.5rem', marginTop: '35px', marginBottom: '15px' }}>Why Choose Chore Virtual For Document Management?</h3>
              <p className="service-text">
                A well-organized document system reduces retrieval time by 80% and eliminates the risk of lost or misplaced critical files. We integrate with Google Drive, SharePoint, Dropbox, and custom DMS platforms.
              </p>

              <ul className="service-checklist">
                <li><i className="fas fa-circle-check"></i> 80% Faster Document Retrieval</li>
                <li><i className="fas fa-circle-check"></i> Cloud Integration (Drive, SharePoint, Dropbox)</li>
                <li><i className="fas fa-circle-check"></i> GDPR & HIPAA Compliant Processes</li>
                <li><i className="fas fa-circle-check"></i> Version Control & Change Tracking</li>
                <li><i className="fas fa-circle-check"></i> Automated Backup & Disaster Recovery</li>
                <li><i className="fas fa-circle-check"></i> Custom Taxonomy & Tagging Systems</li>
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
                  <span><i className="fas fa-file-pdf" style={{ color: '#e11d48', marginRight: '10px' }}></i> DMS Setup Guide.pdf</span>
                  <i className="fas fa-download"></i>
                </a>
                <a href="#" className="sidebar-download-btn">
                  <span><i className="fas fa-file-word" style={{ color: '#2563eb', marginRight: '10px' }}></i> Document Taxonomy.doc</span>
                  <i className="fas fa-download"></i>
                </a>
              </div>

              <div className="sidebar-cta-widget">
                <i className="fas fa-folder-tree main-icon"></i>
                <h3>Documents in Disarray?</h3>
                <p>We&apos;ll organize your entire document system and set up efficient workflows.</p>
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
