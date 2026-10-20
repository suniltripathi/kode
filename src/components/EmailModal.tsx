import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { Mail, Copy, Check, ExternalLink, X, Send } from 'lucide-react';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  subject?: string;
}

export const EmailModal: React.FC<EmailModalProps> = ({
  isOpen,
  onClose,
  subject = 'Training Inquiry',
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const email = siteConfig.contact.email;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email
  )}&su=${encodeURIComponent(subject)}`;
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="email-modal-title"
    >
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              className="card-icon-box"
              style={{ width: '40px', height: '40px', borderRadius: '50%' }}
            >
              <Mail size={20} color="var(--accent-cyan)" />
            </div>
            <div>
              <h3 id="email-modal-title" style={{ fontSize: '1.25rem', fontWeight: 800 }}>
                Get in Touch via Email
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                Direct communication with {siteConfig.trainer.name}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="modal-close-btn"
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        </div>

        {/* Email Address Display Box with 1-Click Copy */}
        <div className="email-display-box">
          <span className="email-address-text">{email}</span>
          <button
            type="button"
            onClick={handleCopy}
            className="btn btn-sm btn-secondary copy-btn"
            title="Copy email address"
          >
            {copied ? (
              <>
                <Check size={14} color="#34d399" />
                <span style={{ color: '#34d399', fontWeight: 600 }}>Copied!</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Email Action Options */}
        <div className="modal-actions-list">
          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary modal-action-btn"
            onClick={onClose}
          >
            <Send size={16} />
            <span>Open in Gmail (Web)</span>
            <ExternalLink size={14} style={{ marginLeft: 'auto', opacity: 0.8 }} />
          </a>

          <a
            href={mailtoUrl}
            className="btn btn-secondary modal-action-btn"
            onClick={onClose}
          >
            <Mail size={16} />
            <span>Open in Default Mail App</span>
            <ExternalLink size={14} style={{ marginLeft: 'auto', opacity: 0.8 }} />
          </a>
        </div>
      </div>
    </div>
  );
};
