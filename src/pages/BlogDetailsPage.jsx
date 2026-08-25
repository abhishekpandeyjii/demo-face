import PageBanner from '../components/common/PageBanner/PageBanner';
import CTA from '../components/sections/CTA/CTA';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function BlogDetailsPage() {
  const contentRef = useScrollReveal();
  const sidebarRef = useScrollReveal();

  return (
    <>
      <PageBanner
        title="Blog Details"
        breadcrumbs={[
          { label: 'Blog', path: '/blog' },
          { label: 'Blog Details' }
        ]}
      />
      
      <section className="blog-details-section section-padding">
        <div className="container">
          <div className="grid grid-7-5">
            {/* Main Content */}
            <div className="blog-details-content fade-in-up" ref={contentRef}>
              <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '30px' }}>
                <img 
                  src="/images/hero-tech.jpg" 
                  alt="Blog Post" 
                  style={{ width: '100%', display: 'block' }} 
                />
                <div className="blog-date-badge" style={{ position: 'absolute', top: '20px', left: '20px', background: 'var(--gradient-primary)', padding: '10px 15px', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                  <span style={{ display: 'block', fontSize: '24px', fontWeight: '800', color: 'white', lineHeight: '1' }}>15</span>
                  <span style={{ fontSize: '12px', fontWeight: '600', color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase' }}>Aug</span>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', borderBottom: '1px solid var(--border-glass)', paddingBottom: '20px' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
                  <i className="fas fa-user" style={{ color: 'var(--primary)', marginRight: '8px' }}></i> James Anderson
                </span>
                <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
                  <i className="fas fa-folder" style={{ color: 'var(--primary)', marginRight: '8px' }}></i> Technology
                </span>
                <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
                  <i className="fas fa-comments" style={{ color: 'var(--primary)', marginRight: '8px' }}></i> 3 Comments
                </span>
              </div>

              <h2 style={{ marginBottom: '20px' }}>The Future of Cloud Computing in 2025</h2>
              
              <p style={{ marginBottom: '20px' }}>
                As we approach 2025, the landscape of cloud computing continues to evolve at a breakneck pace. Businesses are no longer just migrating to the cloud; they are leveraging advanced cloud-native technologies to drive innovation, improve agility, and reduce costs.
              </p>
              
              <p style={{ marginBottom: '30px' }}>
                One of the most significant shifts we are seeing is the rise of multi-cloud and hybrid cloud strategies. Organizations are realizing that a one-size-fits-all approach no longer works, and are instead cherry-picking the best services from different providers to create a tailored infrastructure that meets their specific needs.
              </p>

              <blockquote style={{ padding: '30px', background: 'rgba(74,58,255,0.05)', borderLeft: '4px solid var(--primary)', borderRadius: '0 var(--radius-md) var(--radius-md) 0', fontStyle: 'italic', fontSize: '1.2rem', margin: '40px 0' }}>
                "The cloud is no longer just a place to store data; it is the engine that drives digital transformation and innovation across all industries."
              </blockquote>

              <h3 style={{ marginBottom: '15px' }}>Edge Computing Takes Center Stage</h3>
              <p style={{ marginBottom: '20px' }}>
                With the proliferation of IoT devices and the need for real-time data processing, edge computing is becoming increasingly important. By processing data closer to the source, organizations can reduce latency, save bandwidth, and improve overall performance.
              </p>

              <div style={{ display: 'flex', gap: '10px', marginTop: '40px', flexWrap: 'wrap' }}>
                <span style={{ fontWeight: '600', marginRight: '10px', color: 'var(--text-dark)' }}>Tags:</span>
                {['Cloud', 'Technology', 'Future', 'Innovation'].map((tag, i) => (
                  <a href="#" key={i} style={{ padding: '6px 14px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '20px', fontSize: '13px', color: 'var(--text-dark)' }}>
                    {tag}
                  </a>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="blog-sidebar fade-in-left" ref={sidebarRef}>
              <div style={{ background: '#ffffff', padding: '30px', borderRadius: 'var(--radius-lg)', border: '1px solid #e2e8f0', marginBottom: '30px' }}>
                <h4 style={{ marginBottom: '20px', paddingBottom: '15px', borderBottom: '1px solid #e2e8f0', color: 'var(--text-dark)' }}>Search</h4>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <input type="text" placeholder="Search keywords..." style={{ flex: '1', padding: '12px 15px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-sm)', color: 'var(--text-dark)', outline: 'none' }} />
                  <button style={{ width: '45px', background: 'var(--primary)', border: 'none', borderRadius: 'var(--radius-sm)', color: 'white', cursor: 'pointer' }}>
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>

              <div style={{ background: '#ffffff', padding: '30px', borderRadius: 'var(--radius-lg)', border: '1px solid #e2e8f0', marginBottom: '30px' }}>
                <h4 style={{ marginBottom: '20px', paddingBottom: '15px', borderBottom: '1px solid #e2e8f0', color: 'var(--text-dark)' }}>Categories</h4>
                <ul style={{ listStyle: 'none' }}>
                  {[
                    { name: 'Technology', count: 12 },
                    { name: 'Security', count: 8 },
                    { name: 'Development', count: 15 },
                    { name: 'Cloud Computing', count: 7 },
                    { name: 'Artificial Intelligence', count: 9 }
                  ].map((cat, i) => (
                    <li key={i} style={{ marginBottom: '12px' }}>
                      <a href="#" style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-dark)', transition: '0.3s' }}>
                        <span>{cat.name}</span>
                        <span style={{ background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '10px', fontSize: '12px' }}>{cat.count}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
