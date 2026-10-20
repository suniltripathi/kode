import React from 'react';
import type { Project } from '../data/projects';
import { GitHubIcon } from './BrandIcons';
import { ExternalLink, Zap, CheckCircle2 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="glass-panel project-card">
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
          <span className="badge cyan">{project.category}</span>
          {project.isStudentCapstone && (
            <span className="badge success">Student Capstone</span>
          )}
        </div>

        <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.5rem' }}>
          {project.title}
        </h3>

        <p style={{ color: 'var(--accent-cyan)', fontSize: '0.88rem', fontWeight: 500, marginBottom: '0.75rem' }}>
          {project.tagline}
        </p>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: '1.5' }}>
          {project.description}
        </p>

        {/* Metrics banner */}
        <div className="project-metrics">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="metric-line">
              <Zap size={14} />
              <span>{metric}</span>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', margin: '1rem 0' }}>
          {project.keyFeatures.slice(0, 3).map((feat, idx) => (
            <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
              <CheckCircle2 size={15} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1rem', marginBottom: '1.5rem' }}>
          {project.techStack.map((tech, idx) => (
            <span key={idx} className="concept-pill">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            <span>Live Demo</span>
            <ExternalLink size={14} />
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            <GitHubIcon size={15} />
            <span>Architecture Code</span>
          </a>
        )}
      </div>
    </div>
  );
};
