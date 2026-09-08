import { siteData } from '../../../data/siteData';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

export default function ClientLogos({ isGrid = false }) {
  const ref = useScrollReveal();

  return (
    <section className={`clients-section ${isGrid ? 'section-padding' : ''}`} id="client-logos" style={{ background: 'var(--bg-light)', padding: '60px 0' }}>
      <div className="container">
        {isGrid && (
          <SectionTitle
            subtitle="Our Partners"
            title="Trusted"
            titleHighlight="Clients"
            description="We are proud to work with some of the best companies around the world."
          />
        )}

        {isGrid ? (
          <div className="grid client-logo-grid fade-in" ref={ref} style={{ gap: '30px' }}>
            {siteData.clientLogos.map((client, index) => (
              <div
                key={index}
                className="client-logo-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '30px',
                  background: '#fff',
                  border: '1px solid var(--border-glass)',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <img 
                  src={client.image} 
                  alt={client.name} 
                  style={{ maxHeight: '80px', maxWidth: '100%', objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="clients-slider fade-in" ref={ref} style={{ overflow: 'hidden' }}>
            <div className="clients-track" style={{ display: 'flex', gap: '60px', width: 'max-content', animation: 'scroll 40s linear infinite' }}>
              {[...siteData.clientLogos, ...siteData.clientLogos].map((client, index) => (
                <div
                  key={index}
                  className="client-logo"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0.6,
                    transition: 'var(--transition-base)',
                    filter: 'grayscale(100%)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.style.filter = 'grayscale(0%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0.6';
                    e.currentTarget.style.filter = 'grayscale(100%)';
                  }}
                >
                  <img 
                    src={client.image} 
                    alt={client.name} 
                    style={{ maxHeight: '60px', width: 'auto', objectFit: 'contain' }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
