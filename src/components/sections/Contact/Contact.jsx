import { useState } from 'react';
import { siteData } from '../../../data/siteData';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import { useScrollRevealChildren } from '../../../hooks/useScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
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
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container">
        <SectionTitle
          subtitle="Get In Touch"
          title="Contact"
          titleHighlight="Us"
          description="Have a project in mind? Let's discuss how we can help your business grow."
        />

        {/* Contact Info Cards */}
        <div className="grid grid-3" ref={gridRef} style={{ marginBottom: '60px' }}>
          {contactInfo.map((info, index) => (
            <div className={`fade-in delay-${index + 1}`} key={index}>
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <i className={info.icon}></i>
                </div>
                <h4>{info.title}</h4>
                <p>{info.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="grid grid-2 align-center">
          <div className="contact-form-wrapper fade-in">
            <h3 style={{ marginBottom: '24px', fontSize: 'var(--fs-h3)' }}>Send Us a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="grid grid-2">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-2">
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-primary-custom"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  background: submitted
                    ? 'linear-gradient(135deg, #10B981, #059669)'
                    : undefined,
                }}
              >
                {submitted ? (
                  <><i className="fas fa-check"></i> Message Sent!</>
                ) : (
                  <>Send Message <i className="fas fa-paper-plane"></i></>
                )}
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="contact-map fade-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.639290621062!2d-122.08424968469225!3d37.42199997982367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1635786020000!5m2!1sen!2sus"
              title="Location Map"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
