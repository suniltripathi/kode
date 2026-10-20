import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { RegistrationButton } from './RegistrationButton';
import { LinkedInIcon, GitHubIcon, YouTubeIcon } from './BrandIcons';
import {
  Globe,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
} from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Trainer Branding */}
          <div className="footer-col">
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              <span className="gradient-text">{siteConfig.trainer.name}</span>
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.25rem', maxWidth: '320px' }}>
              {siteConfig.trainer.title}. Empowering software engineers and teams to master enterprise architecture, cloud platforms, and modern stacks.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              <MapPin size={16} color="var(--accent-cyan)" />
              <span>{siteConfig.trainer.location}</span>
            </div>

            {/* Social Icons */}
            <div className="footer-social-links">
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
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
                  aria-label="GitHub Profile"
                  title="GitHub"
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
                  aria-label="YouTube Channel"
                  title="YouTube"
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
                  aria-label="Personal Website"
                  title="Website"
                >
                  <Globe size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Training Tracks</h4>
            <ul className="footer-links">
              <li>
                <a href="#/training" onClick={(e) => handleNav('/training', e)}>
                  Live Batches
                </a>
              </li>
              <li>
                <a href="#/technologies" onClick={(e) => handleNav('/technologies', e)}>
                  Technologies & Syllabus
                </a>
              </li>
              <li>
                <a href="#/roadmaps" onClick={(e) => handleNav('/roadmaps', e)}>
                  Career Roadmaps
                </a>
              </li>
              <li>
                <a href="#/projects" onClick={(e) => handleNav('/projects', e)}>
                  Capstone Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Resources & Info */}
          <div className="footer-col">
            <h4>Knowledge Hub</h4>
            <ul className="footer-links">
              <li>
                <a href="#/resources" onClick={(e) => handleNav('/resources', e)}>
                  Free Cheat Sheets
                </a>
              </li>
              <li>
                <a href="#/about" onClick={(e) => handleNav('/about', e)}>
                  Trainer Biography
                </a>
              </li>
              <li>
                <a href="#/contact" onClick={(e) => handleNav('/contact', e)}>
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact & CTA */}
          <div className="footer-col">
            <h4>Direct Connect</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
              {siteConfig.features.enableEmail && siteConfig.contact.email && (
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.88rem' }}
                >
                  <Mail size={16} color="var(--primary-light)" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              )}

              {siteConfig.features.enablePhone && siteConfig.contact.phone && (
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.88rem' }}
                >
                  <Phone size={16} color="var(--accent-cyan)" />
                  <span>{siteConfig.contact.phone}</span>
                </a>
              )}

              {siteConfig.features.enableWhatsapp && siteConfig.contact.whatsapp && (
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.88rem' }}
                >
                  <MessageSquare size={16} color="#25D366" />
                  <span>WhatsApp: {siteConfig.contact.whatsapp}</span>
                </a>
              )}
            </div>

            {/* Dynamic CTA */}
            {siteConfig.features.enableRegistration && (
              <RegistrationButton
                label="Join Upcoming Batch"
                variant="primary"
                size="md"
              />
            )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {currentYear} {siteConfig.trainer.name}. All rights reserved.</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>Config-driven static architecture</span>
            <span>•</span>
            <span style={{ color: 'var(--primary-light)' }}>Vite + React + TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
