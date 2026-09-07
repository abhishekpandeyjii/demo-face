import React from 'react';
import './WhatsAppButton.css';
import { siteData } from '../../../data/siteData';

export default function WhatsAppButton() {
  const openWhatsApp = () => {
    // Extract phone number without any non-numeric characters (except maybe +)
    const phone = siteData.company.phone.replace(/[^0-9+]/g, '');
    const message = encodeURIComponent("Hello ChoreDigital, I would like to know more about your services!");
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <button 
      className="whatsapp-float-btn"
      onClick={openWhatsApp}
      aria-label="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </button>
  );
}
