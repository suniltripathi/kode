import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { ContactCTA } from '../components/ContactCTA';
import {
  Building2,
  CheckCircle2,
  Send,
  Award,
  Zap,
} from 'lucide-react';

export const CorporateTraining: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [teamSize, setTeamSize] = useState('10-25');
  const [trainingNeed, setTrainingNeed] = useState('Java 21 & Spring Boot Microservices');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="corporate-training-page" style={{ padding: '3rem 0' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Enterprise Upskilling</span>
          <h1 className="section-title">
            Corporate Technology <span className="gradient-text">Training & Enablement</span>
          </h1>
          <p className="section-subtitle">
            Tailored engineering workshops and bootcamps designed to upgrade developer teams in modern Java, Cloud-Native Kubernetes, and High-Scale Architecture.
          </p>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid-3" style={{ marginBottom: '4rem' }}>
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <Building2 size={28} color="var(--primary-light)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Customized Curriculum
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Tailored specifically to your company's tech stack, internal codebase conventions, and architectural transition goals.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '2rem' }}>
            <Zap size={28} color="var(--accent-cyan)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Monolith to Microservices
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Upskill legacy teams into domain-driven design, event streaming with Kafka, and containerized deployments on Kubernetes.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '2rem' }}>
            <Award size={28} color="#34d399" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Hands-On Internal Hackathons
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Cap off training with a real problem-solving sprint addressing your organization's real architectural challenges.
            </p>
          </div>
        </div>

        {/* Corporate Tracks Table / Feature List */}
        <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1.5rem', textAlign: 'center' }}>
            Enterprise Delivery Tracks
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
              <span className="badge cyan" style={{ marginBottom: '0.75rem' }}>Track A</span>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                Spring Boot 3 Microservices Modernization
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '1rem' }}>
                For enterprise Java teams modernizing legacy Java 8/11 codebases to Java 21, Spring Boot 3, and Cloud Native standards.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <li>✓ Virtual Threads & Loom memory gains</li>
                <li>✓ Spring Security 6 migration</li>
                <li>✓ Apache Kafka event-driven decoupling</li>
              </ul>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
              <span className="badge amber" style={{ marginBottom: '0.75rem' }}>Track B</span>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                Kubernetes & Cloud Platform Enablement
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '1rem' }}>
                Enables developers to own their deployment lifecycles with Docker, Helm, GitOps (ArgoCD), and AWS EKS.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <li>✓ Multi-tier Kubernetes manifests & Helm</li>
                <li>✓ Zero-downtime rolling & canary updates</li>
                <li>✓ Observability with Prometheus & Grafana</li>
              </ul>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
              <span className="badge success" style={{ marginBottom: '0.75rem' }}>Track C</span>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                High Scalability & System Architecture
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '1rem' }}>
                Advanced masterclass for Tech Leads and Senior Engineers covering database sharding, consistency trade-offs, and rate limiting.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <li>✓ CAP theorem & distributed data replication</li>
                <li>✓ Resilient multi-region architecture</li>
                <li>✓ Low-latency caching patterns with Redis</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Corporate RFP / Demo Request Box */}
        <div className="glass-panel form-panel" style={{ maxWidth: '800px', margin: '0 auto 4rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.5rem', textAlign: 'center' }}>
            Request an Enterprise Upskilling Proposal
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.95rem' }}>
            Discuss your engineering team's training goals directly with {siteConfig.trainer.name}.
          </p>

          {submitted ? (
            <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '2rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <CheckCircle2 size={36} color="#34d399" style={{ margin: '0 auto 0.75rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                Thank you for your inquiry!
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                {siteConfig.trainer.name} will review your request and reach out directly at {siteConfig.contact.email} with syllabus options and availability.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div className="form-group">
                <label className="form-label">Company Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Acme Cloud Corp"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">Engineers to Train</label>
                  <select
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    className="form-select"
                  >
                    <option value="5-10">5 - 10 Engineers</option>
                    <option value="10-25">10 - 25 Engineers</option>
                    <option value="25-50">25 - 50 Engineers</option>
                    <option value="50+">50+ Enterprise Cohort</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Focus Area</label>
                  <select
                    value={trainingNeed}
                    onChange={(e) => setTrainingNeed(e.target.value)}
                    className="form-select"
                  >
                    <option value="Java 21 & Spring Boot Microservices">Java 21 & Spring Boot</option>
                    <option value="Full Stack React 19 & TypeScript">React 19 & TypeScript</option>
                    <option value="Kubernetes, DevOps & AWS Cloud">Kubernetes & DevOps</option>
                    <option value="System Design & Scalability Masterclass">System Design & Scalability</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Target Start Date & Specific Requirements</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your team's background, current tech stack, and goals..."
                  className="form-textarea"
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
                <button type="submit" className="btn btn-primary btn-lg" style={{ flex: '1', minWidth: '220px' }}>
                  <Send size={18} />
                  <span>Send Corporate Inquiry</span>
                </button>

                {siteConfig.features.enableEmail && siteConfig.contact.email && (
                  <a
                    href={`mailto:${siteConfig.contact.email}?subject=Corporate%20Training%20Proposal`}
                    className="btn btn-secondary btn-lg"
                  >
                    <span>Email Direct: {siteConfig.contact.email}</span>
                  </a>
                )}
              </div>
            </form>
          )}
        </div>

        <ContactCTA />
      </div>
    </div>
  );
};
