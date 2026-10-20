import React, { useState } from 'react';
import { technologies } from '../data/technologies';
import { TechnologyCard } from '../components/TechnologyCard';
import { ContactCTA } from '../components/ContactCTA';
import { Search } from 'lucide-react';

interface TechnologiesProps {
  onSelectTech: (techId: string) => void;
}

export const Technologies: React.FC<TechnologiesProps> = ({ onSelectTech }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Backend',
    'Frontend',
    'Cloud & DevOps',
    'Database & Messaging',
    'Architecture',
  ];

  const filteredTechnologies = technologies.filter((tech) => {
    const matchesCategory =
      selectedCategory === 'All' || tech.category === selectedCategory;
    const matchesSearch =
      tech.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tech.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tech.concepts.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="technologies-page" style={{ padding: '3rem 0' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Tech Stack & Curriculum</span>
          <h1 className="section-title">Master Enterprise Technologies</h1>
          <p className="section-subtitle">
            From Java 21 low-latency internals to Kubernetes cloud automation and distributed system design.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Search Input */}
            <div style={{ position: 'relative', flex: '1', minWidth: '200px', width: '100%' }}>
              <Search
                size={18}
                color="var(--text-muted)"
                style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }}
              />
              <input
                type="text"
                placeholder="Search technologies, concepts (e.g. Kafka, Concurrency, Docker)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-input"
                style={{ paddingLeft: '2.4rem' }}
                id="search-technologies-input"
              />
            </div>

            {/* Category Filter Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`btn btn-sm ${
                    selectedCategory === cat ? 'btn-primary' : 'btn-secondary'
                  }`}
                  style={{ borderRadius: 'var(--radius-pill)' }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div style={{ marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
          Showing {filteredTechnologies.length} technology curricula
        </div>

        {/* Technology Cards Grid */}
        <div className="grid-3" style={{ marginBottom: '4rem' }}>
          {filteredTechnologies.map((tech) => (
            <TechnologyCard
              key={tech.id}
              tech={tech}
              onSelect={onSelectTech}
            />
          ))}
        </div>

        {filteredTechnologies.length === 0 && (
          <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
              No technologies found matching "{searchQuery}".
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="btn btn-secondary"
              style={{ marginTop: '1rem' }}
            >
              Reset Filters
            </button>
          </div>
        )}

        <ContactCTA />
      </div>
    </div>
  );
};
