import { useState } from 'react';
import { siteData } from '../../../data/siteData';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import { useScrollRevealChildren } from '../../../hooks/useScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', country: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const gridRef = useScrollRevealChildren('.fade-in');

  const contactInfo = [
    { icon: 'fas fa-location-dot', title: 'Our Office', text: siteData.company.address },
    { icon: 'fas fa-phone', title: 'Call Us', text: siteData.company.phone },
    { icon: 'fas fa-envelope', title: 'Email Us', text: siteData.company.email },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`New Website Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello ChoreVirtual Team,\n\nYou have received a new message from the website contact form:\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Country: ${formData.country || 'N/A'}\n` +
      `Phone: ${formData.phone || 'N/A'}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `Please reply to ${formData.email}.`
    );
    
    window.location.href = `mailto:${siteData.company.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', country: '', message: '' });
    }, 3000);
  };

  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container" ref={gridRef}>
        <div style={{ textAlign: 'center', marginBottom: '60px', marginTop: '20px' }}>
          <p style={{ fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '10px', fontWeight: 600 }}>HOW CAN WE HELP YOU?</p>
          <h2 style={{ fontSize: '42px', color: '#1e293b', fontWeight: '400', fontFamily: 'serif' }}>
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
                </div>
                {info.title === 'Call Us' && (
                  <a href={`tel:${info.text.replace(/[^0-9+]/g, '')}`} className="contact-action-btn">
                    Call Now <i className="fas fa-arrow-right"></i>
                  </a>
                )}
                {info.title === 'Email Us' && (
                  <a href={`mailto:${info.text}`} className="contact-action-btn">
                    Send Email <i className="fas fa-arrow-right"></i>
                  </a>
                )}
                {info.title === 'Our Office' && (
                  <a href="#contact" className="contact-action-btn">
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.31388656627!2d72.83350101538354!3d19.181467455018693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6ecd2b7b51b%3A0xe10432c69ea1b2bb!2sIjmima%20Complex!5e0!3m2!1sen!2sin!4v1635786020000!5m2!1sen!2sin"
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
              <button
                type="submit"
                style={{
                  width: '100%',
                  background: '#031b4e',
                  color: 'white',
                  padding: '15px',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: '0.3s'
                }}
              >
                {submitted ? 'SENT SUCCESSFULLY' : 'SEND'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
