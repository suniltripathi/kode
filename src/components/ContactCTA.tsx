import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { RegistrationButton } from './RegistrationButton';
import { EmailModal } from './EmailModal';
import { MessageSquare, Mail, Phone } from 'lucide-react';

interface ContactCTAProps {
  title?: string;
  subtitle?: string;
  showRegistration?: boolean;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({
  title = "Ready to Supercharge Your Tech Career?",
  subtitle = "Whether you're looking to master Spring Boot microservices, crack high-level system design interviews, or train your engineering organization, let's talk.",
  showRegistration = true,
}) => {
  const [emailModalOpen, setEmailModalOpen] = useState(false);

  return (
    <section className="cta-banner">
      <div className="container" style={{ maxWidth: '900px' }}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        
        <div className="cta-buttons">
          {showRegistration && siteConfig.features.enableRegistration && (
            <RegistrationButton
              label="Join Upcoming Batch"
              variant="primary"
              size="lg"
            />
          )}

          {siteConfig.features.enableWhatsapp && siteConfig.contact.whatsapp && (
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(siteConfig.trainer.name)},%20I'm%20interested%20in%20your%20training%20programs`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
              id="cta-whatsapp-btn"
            >
              <MessageSquare size={18} />
              <span>WhatsApp Me</span>
            </a>
          )}

          {siteConfig.features.enableEmail && siteConfig.contact.email && (
            <button
              type="button"
              onClick={() => setEmailModalOpen(true)}
              className="btn btn-secondary btn-lg"
              id="cta-email-btn"
              title={`Send email to ${siteConfig.contact.email}`}
            >
              <Mail size={18} />
              <span>Email Me</span>
            </button>
          )}

          {siteConfig.features.enablePhone && siteConfig.contact.phone && (
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="btn btn-outline btn-lg"
              id="cta-phone-btn"
            >
              <Phone size={18} />
              <span>{siteConfig.contact.phone}</span>
            </a>
          )}
        </div>
      </div>

      <EmailModal
        isOpen={emailModalOpen}
        onClose={() => setEmailModalOpen(false)}
      />
    </section>
  );
};
