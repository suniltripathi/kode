import React from 'react';
import { technologies } from '../data/technologies';
import { RegistrationButton } from '../components/RegistrationButton';
import { ContactCTA } from '../components/ContactCTA';
import {
  ArrowLeft,
  CheckCircle2,
  BookOpen,
  Code2,
  Calendar,
  Sparkles,
  Award
} from 'lucide-react';

interface TechnologyDetailsProps {
  techId: string;
  onBack: () => void;
  onNavigate: (path: string) => void;
}

export const TechnologyDetails: React.FC<TechnologyDetailsProps> = ({
  techId,
  onBack,
  onNavigate,
}) => {
  const tech = technologies.find((t) => t.id === techId) || technologies[0];

  return (
    <div className="technology-details-page" style={{ padding: '3rem 0' }}>
      <div className="container">
        {/* Back Button */}
        <button
          type="button"
          onClick={onBack}
          className="btn btn-secondary btn-sm"
          style={{ marginBottom: '2rem' }}
        >
          <ArrowLeft size={16} />
          <span>Back to All Technologies</span>
        </button>

        {/* Hero Banner for this Technology */}
        <div className="glass-panel tech-hero-panel">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span className="badge cyan">{tech.category}</span>
            <span className="badge amber">{tech.badge}</span>
          </div>

          <h1 className="tech-hero-title">
            {tech.name}
          </h1>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', maxWidth: '850px', lineHeight: '1.7', marginBottom: '2rem' }}>
            {tech.fullDesc}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <RegistrationButton
              label="Register for This Course"
              variant="primary"
              size="lg"
              courseName={tech.name}
            />
            <button
              type="button"
              onClick={() => onNavigate('/training')}
              className="btn btn-secondary btn-lg"
            >
              <Calendar size={18} />
              <span>View Cohort Batch Dates</span>
            </button>
          </div>
        </div>

        {/* 2-Column Detailed Layout */}
        <div className="tech-details-grid">
          {/* Left Column: Phased Roadmap & Concepts */}
          <div>
            {/* Phased Roadmap */}
            <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Sparkles size={20} color="var(--primary-light)" />
                <span>Structured Learning Pathway</span>
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {tech.roadmap.map((stage, idx) => (
                  <div
                    key={idx}
                    style={{
                      borderLeft: '3px solid var(--primary)',
                      paddingLeft: '1.25rem',
                      position: 'relative',
                    }}
                  >
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                      {stage.step}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                      {stage.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Concepts Mastered */}
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <BookOpen size={20} color="var(--accent-cyan)" />
                <span>Core Concepts & Mechanics</span>
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem' }}>
                {tech.concepts.map((concept, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      border: '1px solid var(--border-subtle)',
                      fontSize: '0.9rem',
                    }}
                  >
                    <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0 }} />
                    <span style={{ color: 'var(--text-main)', fontWeight: 500 }}>{concept}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Projects & Prerequisites */}
          <div>
            {/* Real Capstone Projects */}
            <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Code2 size={20} color="var(--accent-cyan)" />
                <span>Capstone Projects Included</span>
              </h3>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {tech.projects.map((proj, idx) => (
                  <li
                    key={idx}
                    style={{
                      background: 'rgba(139, 92, 246, 0.06)',
                      border: '1px solid rgba(139, 92, 246, 0.2)',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                    }}
                  >
                    <Award size={16} color="var(--primary-light)" style={{ flexShrink: 0 }} />
                    <span>{proj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prerequisites */}
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1rem' }}>
                Prerequisites & Eligibility
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1rem' }}>
                To make the most out of this syllabus, we recommend:
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {tech.prerequisites.map((prereq, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={16} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{prereq}</span>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
                <RegistrationButton
                  label="Register for This Course"
                  variant="primary"
                  size="md"
                  courseName={tech.name}
                />
              </div>
            </div>
          </div>
        </div>

        <ContactCTA />
      </div>
    </div>
  );
};
