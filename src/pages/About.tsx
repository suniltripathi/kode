import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { ContactCTA } from '../components/ContactCTA';
import { RegistrationButton } from '../components/RegistrationButton';
import { LinkedInIcon } from '../components/BrandIcons';
import {
  Award,
  Code2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Terminal,
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="about-page" style={{ padding: '3rem 0' }}>
      <div className="container">
        {/* Header / Intro */}
        <div className="section-header" style={{ marginBottom: '3.5rem' }}>
          <span className="section-tag">Instructor Profile</span>
          <h1 className="section-title">
            About <span className="gradient-text">{siteConfig.trainer.name}</span>
          </h1>
          <p className="section-subtitle">
            {siteConfig.trainer.title} • Cloud Architect • Tech Mentor
          </p>
        </div>

        {/* Bio Grid */}
        <div className="about-grid">
          {/* Left card */}
          <div className="glass-panel about-profile-card" style={{ textAlign: 'center' }}>
            <img
              src={siteConfig.trainer.profileImage}
              alt={siteConfig.trainer.name}
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                objectFit: 'cover',
                margin: '0 auto 1.5rem',
                border: '3px solid var(--primary)',
                boxShadow: '0 0 25px rgba(139, 92, 246, 0.4)',
              }}
            />

            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.35rem' }}>
              {siteConfig.trainer.name}
            </h3>
            <p style={{ color: 'var(--accent-cyan)', fontSize: '0.88rem', fontWeight: 600, marginBottom: '1.25rem' }}>
              {siteConfig.trainer.title}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
              <MapPin size={16} color="var(--primary-light)" />
              <span>{siteConfig.trainer.location}</span>
            </div>

            {/* Quick Contact Box */}
            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', textAlign: 'left', fontSize: '0.88rem' }}>
              {siteConfig.features.enableEmail && siteConfig.contact.email && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Mail size={16} color="var(--primary-light)" />
                  <a href={`mailto:${siteConfig.contact.email}`} style={{ color: 'var(--text-secondary)' }}>
                    {siteConfig.contact.email}
                  </a>
                </div>
              )}
              {siteConfig.features.enablePhone && siteConfig.contact.phone && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Phone size={16} color="var(--accent-cyan)" />
                  <a href={`tel:${siteConfig.contact.phone}`} style={{ color: 'var(--text-secondary)' }}>
                    {siteConfig.contact.phone}
                  </a>
                </div>
              )}
              {siteConfig.social.linkedin && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <LinkedInIcon size={16} color="var(--primary-light)" />
                  <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
                    LinkedIn Profile
                  </a>
                </div>
              )}
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <RegistrationButton label="Join Upcoming Batch" variant="primary" size="md" />
            </div>
          </div>

          {/* Right Narrative */}
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.25rem' }}>
              Bridging the Gap Between Academic Syntax and Production Scale
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: '1.7' }}>
              <p>
                Hello! I am <strong>{siteConfig.trainer.name}</strong>, a seasoned software architect and passionate technology educator with over a decade of hands-on experience designing and operating planetary-scale distributed systems, low-latency microservices, and modern cloud applications.
              </p>
              <p>
                Having architected systems that handle millions of requests per second and having conducted technical interviews for Fortune 500 tech companies, I noticed a persistent problem in tech education: most online courses teach syntax and "todo list" apps, but fail to prepare engineers for the complexities of real production environments.
              </p>
              <p>
                My mission is to equip engineers with deep architectural intuition. In my cohorts, we don't just write Spring Boot or React code—we benchmark memory footprints, analyze JVM garbage collection, construct multi-region Kubernetes clusters, design event-driven sagas, and learn the defensive trade-offs required in Tier-1 engineering organizations.
              </p>
            </div>

            {/* Teaching Pillars */}
            <div className="pillars-grid">
              <div className="glass-panel" style={{ padding: '1.5rem' }}>
                <Code2 size={24} color="var(--primary-light)" style={{ marginBottom: '0.75rem' }} />
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem' }}>No Toy Code</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Every project mirrors real production architectures with security, migrations, and CI/CD.
                </p>
              </div>

              <div className="glass-panel" style={{ padding: '1.5rem' }}>
                <Terminal size={24} color="var(--accent-cyan)" style={{ marginBottom: '0.75rem' }} />
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem' }}>100% Hands-On</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Live screen-share coding sessions, step-by-step debug traces, and active cohort Q&A.
                </p>
              </div>

              <div className="glass-panel" style={{ padding: '1.5rem' }}>
                <ShieldCheck size={24} color="#34d399" style={{ marginBottom: '0.75rem' }} />
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem' }}>Interview Mastery</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Rigorous preparation for System Design (HLD/LLD), Concurrency, and Core Engineering rounds.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience & Certifications Bar */}
        <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '4rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', textAlign: 'center' }}>
            Certifications & Industry Credentials
          </h3>

          <div className="certifications-grid">
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
              <Award size={24} color="var(--accent-amber)" style={{ flexShrink: 0 }} />
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>AWS Certified Solutions Architect</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Professional Level Cloud Infrastructure</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
              <Award size={24} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>Certified Kubernetes Administrator (CKA)</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Cloud Native Computing Foundation (CNCF)</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
              <Award size={24} color="var(--primary-light)" style={{ flexShrink: 0 }} />
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>Oracle Certified Java Professional</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Java SE Enterprise Architecture</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <ContactCTA />
      </div>
    </div>
  );
};
