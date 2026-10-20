import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { RegistrationButton } from '../components/RegistrationButton';
import { EmailModal } from '../components/EmailModal';
import { LinkedInIcon, GitHubIcon, YouTubeIcon } from '../components/BrandIcons';
import {
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Globe,
  Send,
  CheckCircle2,
  Calendar,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'Batch Registration Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [emailModalOpen, setEmailModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page" style={{ padding: '3rem 0' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Direct Communication</span>
          <h1 className="section-title">
            Get in Touch with <span className="gradient-text">{siteConfig.trainer.name}</span>
          </h1>
          <p className="section-subtitle">
            Have questions about upcoming cohorts, syllabus prerequisites, corporate training, or career transitions? Reach out directly.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="contact-grid">
          {/* Left Column: Official Contact Channels */}
          <div>
            <div className="glass-panel contact-card-panel">
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.5rem' }}>
                Contact Channels
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Location */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div className="card-icon-box" style={{ width: '42px', height: '42px', borderRadius: '50%' }}>
                    <MapPin size={20} color="var(--primary-light)" />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Location & Timezone
                    </span>
                    <p style={{ color: 'var(--text-main)', fontWeight: 600, fontSize: '0.95rem' }}>
                      {siteConfig.trainer.location}
                    </p>
                  </div>
                </div>

                {/* Email (Config-Driven) */}
                {siteConfig.features.enableEmail && siteConfig.contact.email && (
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div className="card-icon-box" style={{ width: '42px', height: '42px', borderRadius: '50%' }}>
                      <Mail size={20} color="var(--accent-cyan)" />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Email Address
                      </span>
                      <div>
                        <button
                          type="button"
                          onClick={() => setEmailModalOpen(true)}
                          style={{
                            color: 'var(--text-main)',
                            fontWeight: 600,
                            fontSize: '0.95rem',
                            transition: 'color 0.2s',
                            textAlign: 'left',
                            padding: 0,
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                          }}
                          id="contact-email-link"
                          title={`Send email to ${siteConfig.contact.email}`}
                        >
                          {siteConfig.contact.email}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Phone (Config-Driven) */}
                {siteConfig.features.enablePhone && siteConfig.contact.phone && (
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div className="card-icon-box" style={{ width: '42px', height: '42px', borderRadius: '50%' }}>
                      <Phone size={20} color="#fbbf24" />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Phone / Direct Line
                      </span>
                      <div>
                        <a
                          href={`tel:${siteConfig.contact.phone}`}
                          style={{ color: 'var(--text-main)', fontWeight: 600, fontSize: '0.95rem' }}
                          id="contact-phone-link"
                        >
                          {siteConfig.contact.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* WhatsApp (Config-Driven) */}
                {siteConfig.features.enableWhatsapp && siteConfig.contact.whatsapp && (
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div className="card-icon-box" style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(37, 211, 102, 0.15)', borderColor: '#25D366' }}>
                      <MessageSquare size={20} color="#25D366" />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Instant WhatsApp Chat
                      </span>
                      <div>
                        <a
                          href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(siteConfig.trainer.name)},%20I'd%20like%20to%20know%20more%20about%20your%20training`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: '#25D366', fontWeight: 600, fontSize: '0.95rem' }}
                          id="contact-whatsapp-link"
                        >
                          {siteConfig.contact.whatsapp}
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Social Channels */}
              <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.85rem' }}>
                  Professional Profiles
                </span>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  {siteConfig.social.linkedin && (
                    <a
                      href={siteConfig.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-btn"
                      aria-label="LinkedIn"
                    >
                      <LinkedInIcon size={18} />
                    </a>
                  )}
                  {siteConfig.social.github && (
                    <a
                      href={siteConfig.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-btn"
                      aria-label="GitHub"
                    >
                      <GitHubIcon size={18} />
                    </a>
                  )}
                  {siteConfig.social.youtube && (
                    <a
                      href={siteConfig.social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-btn"
                      aria-label="YouTube"
                    >
                      <YouTubeIcon size={18} />
                    </a>
                  )}
                  {siteConfig.social.website && (
                    <a
                      href={siteConfig.social.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-btn"
                      aria-label="Website"
                    >
                      <Globe size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Registration Banner Card */}
            {siteConfig.features.enableRegistration && (
              <div className="glass-panel" style={{ padding: '2rem', background: 'radial-gradient(circle at 100% 0%, rgba(139, 92, 246, 0.15) 0%, transparent 70%), var(--bg-card)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <Calendar size={18} color="var(--primary-light)" />
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-cyan)' }}>
                    Immediate Batch Enrollment
                  </span>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                  Ready to enroll?
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '1.25rem' }}>
                  Skip the inquiry form and register directly for the upcoming cohort via our official registration form.
                </p>
                <RegistrationButton
                  label="Join Upcoming Batch"
                  variant="primary"
                  size="md"
                />
              </div>
            )}
          </div>

          {/* Right Column: Interactive Message / Inquiry Form */}
          <div className="glass-panel form-panel">
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              Send an Inquiry
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '2rem' }}>
              Fill in your details below and {siteConfig.trainer.name} will respond within 24 hours.
            </p>

            {submitted ? (
              <div style={{ background: 'rgba(16, 185, 129, 0.12)', border: '1px solid #10b981', padding: '2.5rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                <CheckCircle2 size={42} color="#34d399" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  Message Received!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                  Thank you, <strong>{formData.name}</strong>. Your inquiry regarding "{formData.topic}" has been logged. {siteConfig.trainer.name} will reply to <strong>{formData.email}</strong> shortly.
                </p>

                {siteConfig.features.enableWhatsapp && siteConfig.contact.whatsapp && (
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(siteConfig.trainer.name)},%20I%20just%20sent%20an%20inquiry%20regarding%20${encodeURIComponent(formData.topic)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                  >
                    <MessageSquare size={16} />
                    <span>Follow up on WhatsApp</span>
                  </a>
                )}
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">Phone / WhatsApp Number</label>
                    <input
                      type="tel"
                      placeholder="+91-XXXXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Inquiry Topic</label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="form-select"
                    >
                      <option value="Batch Registration Inquiry">Batch Registration Inquiry</option>
                      <option value="Java 21 & Spring Boot Cohort">Java 21 & Spring Boot Cohort</option>
                      <option value="Full Stack React & Node Track">Full Stack React & Node Track</option>
                      <option value="DevOps & Kubernetes Bootcamp">DevOps & Kubernetes Bootcamp</option>
                      <option value="System Design Masterclass">System Design Masterclass</option>
                      <option value="Corporate Team Training">Corporate Team Training</option>
                      <option value="1-on-1 Mentorship / Mock Interview">1-on-1 Mentorship / Mock Interview</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Your Message or Technical Background *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your current role, years of experience, and what you're aiming to achieve..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea"
                  />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem' }}>
                  <button type="submit" className="btn btn-primary btn-lg" id="submit-inquiry-btn">
                    <Send size={18} />
                    <span>Send Message to {siteConfig.trainer.name}</span>
                  </button>

                  {siteConfig.features.enableWhatsapp && siteConfig.contact.whatsapp && (
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(siteConfig.trainer.name)},%20I'd%20like%20to%20ask%20a%20question%20about%20upcoming%20batches`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp btn-md"
                    >
                      <MessageSquare size={16} />
                      <span>Chat on WhatsApp</span>
                    </a>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <EmailModal
        isOpen={emailModalOpen}
        onClose={() => setEmailModalOpen(false)}
      />
    </div>
  );
};
