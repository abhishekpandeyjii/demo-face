import PageBanner from '../components/common/PageBanner/PageBanner';

export default function PresentationPage() {
  return (
    <>
      <PageBanner
        title="PowerPoint Presentation"
        breadcrumbs={[{ label: 'Presentations' }]}
      />
      <section className="section-padding">
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto', background: '#fff', padding: '50px', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '60px', color: 'var(--primary)', marginBottom: '20px' }}>
              <i className="fas fa-file-powerpoint"></i>
            </div>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>ChoreDigital Corporate Presentation</h2>
            <p style={{ color: 'var(--text-light)', fontSize: '16px', lineHeight: '1.8', marginBottom: '40px' }}>
              Download our official corporate PowerPoint presentation to learn more about our company profile, core services, case studies, and how we can add value to your business. This detailed presentation is perfect for stakeholders and internal reviews.
            </p>
            
            <button 
              className="btn-primary-custom"
              onClick={() => alert("Downloading presentation...")}
            >
              Download Presentation (.pptx) <i className="fas fa-download" style={{ marginLeft: '8px' }}></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
