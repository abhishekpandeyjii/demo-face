import { siteData } from '../../../data/siteData';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

export default function Clients() {
  const ref = useScrollReveal();

  return (
    <section className="clients-section" id="clients">
      <div className="container">
        <div className="clients-slider fade-in" ref={ref} style={{ justifyContent: 'center' }}>
          {siteData.clients.map((client, index) => (
            <div
              key={index}
              className="client-logo"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px 20px',
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--text-muted)',
                letterSpacing: '1px',
                opacity: 0.4,
                transition: 'var(--transition-base)',
                cursor: 'default',
                filter: 'none',
                maxHeight: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.8';
                e.currentTarget.style.color = 'var(--secondary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.4';
                e.currentTarget.style.color = 'var(--text-muted)';
              }}
            >
              {client.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
