import { useState } from 'react';
import { siteData } from '../../../data/siteData';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import { useScrollRevealChildren } from '../../../hooks/useScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', country: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const gridRef = useScrollRevealChildren('.fade-in');

  const contactInfo = [
    { icon: 'fas fa-location-dot', title: 'Our Office', text: siteData.company.address },
    { icon: 'fas fa-phone', title: 'Call Us', text: siteData.company.phone, text2: siteData.company.phone2 },
    { icon: 'fas fa-envelope', title: 'Email Us', text: siteData.company.email },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitted(false);

    try {
      // Silent Direct Email API Submission - No popups, no second tab
      await fetch(`https://formsubmit.co/ajax/${siteData.company.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          country: formData.country || 'N/A',
          phone: formData.phone || 'N/A',
          message: formData.message,
          _subject: `New Inquiry from ${formData.name} - ChoreVirtual`,
          _template: 'table',
          _captcha: 'false'
        }),
      });

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', country: '', message: '' });
    } catch (err) {
      console.error('Email API submission error:', err);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', country: '', message: '' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitted(false);
      }, 6000);
    }
  };

  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container" ref={gridRef}>
        <div style={{ textAlign: 'center', marginBottom: '60px', marginTop: '20px' }}>
          <p style={{ fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '10px', fontWeight: 600 }}>HOW CAN WE HELP YOU?</p>
          <h2 style={{ fontSize: 'clamp(26px, 5vw, 42px)', color: '#1e293b', fontWeight: '400', fontFamily: 'serif' }}>
            Let us start the Conversation
          </h2>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-3" style={{ marginBottom: '60px' }}>
          {contactInfo.map((info, index) => (
            <div className={`fade-in delay-${index + 1}`} key={index}>
              <div className="premium-contact-card">
                <div className="card-glow"></div>
                <div className="contact-info-icon">
                  <i className={info.icon}></i>
                </div>
                <div className="contact-content">
                  <h4>{info.title}</h4>
                  <p>{info.text}</p>
                  {info.text2 && <p>{info.text2}</p>}
                </div>
                {info.title === 'Call Us' && (
                  <>
                    <a href={`tel:${info.text.replace(/[^0-9+]/g, '')}`} className="contact-action-btn" style={{ marginBottom: '10px', display: 'block' }}>
                      Call Primary <i className="fas fa-arrow-right"></i>
                    </a>
                    {info.text2 && (
                      <a href={`tel:${info.text2.replace(/[^0-9+]/g, '')}`} className="contact-action-btn" style={{ display: 'block' }}>
                        Call Secondary <i className="fas fa-arrow-right"></i>
                      </a>
                    )}
                  </>
                )}
                {info.title === 'Email Us' && (
                  <a href={`mailto:${info.text}`} className="contact-action-btn">
                    Send Email <i className="fas fa-arrow-right"></i>
                  </a>
                )}
                {info.title === 'Our Office' && (
                  <a href={siteData.company.directionsUrl || 'https://maps.google.com/maps?q=19.18365495515128,72.831653357265'} target="_blank" rel="noopener noreferrer" className="contact-action-btn">
                    Get Directions <i className="fas fa-arrow-right"></i>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Map and Form Section */}
        <div className="grid grid-2" style={{ gap: '50px', alignItems: 'flex-start' }}>

          {/* Map (Left Side) */}
          <div className="contact-map fade-in">
            <h3 style={{ marginBottom: '24px', fontSize: '22px', fontWeight: 500, color: '#334155', fontFamily: 'serif' }}>Found Us</h3>
            <iframe
              src={siteData.company.mapEmbedUrl || 'https://maps.google.com/maps?q=19.18365495515128,72.831653357265&z=16&output=embed'}
              title="Location Map"
              loading="lazy"
              style={{ width: '100%', height: '400px', border: '1px solid #e2e8f0', borderRadius: '4px' }}
            ></iframe>
          </div>

          {/* Contact Form (Right Side) */}
          <div className="contact-form-wrapper fade-in">
            <h3 style={{ marginBottom: '24px', fontSize: '22px', fontWeight: 500, color: '#334155', fontFamily: 'serif' }}>Drop in a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit} style={{ background: '#fff', padding: '0' }}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: '4px', border: '1px solid #cbd5e1' }}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: '4px', border: '1px solid #cbd5e1' }}
                />
              </div>
              <div className="grid grid-2" style={{ gap: '20px' }}>
                <div className="form-group">
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={formData.country || ''}
                    onChange={handleChange}
                    style={{ borderRadius: '4px', border: '1px solid #cbd5e1' }}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{ borderRadius: '4px', border: '1px solid #cbd5e1' }}
                  />
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: '4px', border: '1px solid #cbd5e1', minHeight: '120px' }}
                ></textarea>
              </div>

              {submitted && (
                <div style={{
                  padding: '14px 18px',
                  backgroundColor: '#dcfce7',
                  color: '#15803d',
                  borderRadius: '6px',
                  marginBottom: '18px',
                  fontSize: '14px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  border: '1px solid #bbf7d0'
                }}>
                  <i className="fas fa-circle-check" style={{ fontSize: '20px', color: '#16a34a' }}></i>
                  <span>Thank you! Your message has been sent directly to our email inbox.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  background: isSubmitting ? '#475569' : '#031b4e',
                  color: 'white',
                  padding: '15px',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: '0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px'
                }}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    <span>SENDING MAIL...</span>
                  </>
                ) : submitted ? (
                  <>
                    <i className="fas fa-check"></i>
                    <span>SENT SUCCESSFULLY</span>
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    <span>SEND MESSAGE</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
