import React from 'react';
import type { Technology } from '../data/technologies';
import {
  Coffee,
  Cpu,
  Layers,
  Cloud,
  Database,
  Server,
  ArrowRight,
} from 'lucide-react';

interface TechnologyCardProps {
  tech: Technology;
  onSelect?: (techId: string) => void;
}

export const TechnologyCard: React.FC<TechnologyCardProps> = ({ tech, onSelect }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coffee':
        return <Coffee size={24} />;
      case 'Cpu':
        return <Cpu size={24} />;
      case 'Layers':
        return <Layers size={24} />;
      case 'Cloud':
        return <Cloud size={24} />;
      case 'Database':
        return <Database size={24} />;
      case 'Server':
      default:
        return <Server size={24} />;
    }
  };

  return (
    <div className="glass-panel tech-card">
      <div>
        <div className="card-header-row">
          <div className="card-icon-box">{getIcon(tech.iconName)}</div>
          <span className="badge">{tech.badge}</span>
        </div>

        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 700 }}>
          {tech.name}
        </h3>
        
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: '1.5' }}>
          {tech.shortDesc}
        </p>

        <div className="tech-concepts-list">
          {tech.concepts.slice(0, 4).map((concept, idx) => (
            <span key={idx} className="concept-pill">
              {concept}
            </span>
          ))}
          {tech.concepts.length > 4 && (
            <span className="concept-pill" style={{ color: 'var(--primary-light)' }}>
              +{tech.concepts.length - 4} more
            </span>
          )}
        </div>
      </div>

      <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '0.78rem', color: 'var(--accent-cyan)', fontWeight: 600, textTransform: 'uppercase' }}>
          {tech.category}
        </span>
        
        {onSelect && (
          <button
            type="button"
            onClick={() => onSelect(tech.id)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--primary-light)', fontSize: '0.88rem', fontWeight: 600 }}
          >
            <span>Deep Dive</span>
            <ArrowRight size={15} />
          </button>
        )}
      </div>
    </div>
  );
};
