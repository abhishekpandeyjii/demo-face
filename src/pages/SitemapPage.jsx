import PageBanner from '../components/common/PageBanner/PageBanner';
import { siteData } from '../data/siteData';
import { Link } from 'react-router-dom';

export default function SitemapPage() {
  return (
    <>
      <PageBanner
        title="Sitemap"
        breadcrumbs={[{ label: 'Sitemap' }]}
      />
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h3 style={{ marginBottom: '20px', fontSize: 'var(--fs-h3)' }}>Main Pages</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {siteData.navigation.map((link, idx) => (
                  <li key={idx} style={{ marginBottom: '10px' }}>
                    <Link to={link.path} style={{ color: 'var(--primary)', fontWeight: 500, fontSize: '18px' }}>
                      <i className="fas fa-angle-right" style={{ marginRight: '8px' }}></i> {link.label}
                    </Link>
                    {link.dropdown && (
                      <ul style={{ listStyle: 'none', paddingLeft: '20px', marginTop: '10px' }}>
                        {link.dropdown.map((sublink, subIdx) => (
                          <li key={subIdx} style={{ marginBottom: '8px' }}>
                            <Link to={sublink.path} style={{ color: 'var(--text-color)', fontSize: '15px' }}>
                              <i className="fas fa-arrow-right" style={{ marginRight: '5px', fontSize: '12px' }}></i> {sublink.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 style={{ marginBottom: '20px', fontSize: 'var(--fs-h3)' }}>Our Services</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {siteData.services.map((service, idx) => (
                  <li key={idx} style={{ marginBottom: '10px' }}>
                    <Link to={service.link} style={{ color: 'var(--text-color)', fontSize: '16px' }}>
                      <i className="fas fa-check text-primary" style={{ marginRight: '8px' }}></i> {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
