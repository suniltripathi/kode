import React, { useState } from 'react';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { ContactCTA } from '../components/ContactCTA';
import { Search } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Microservices', 'Cloud & DevOps', 'Full Stack', 'Distributed Systems'];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="projects-page" style={{ padding: '3rem 0' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Production Work</span>
          <h1 className="section-title">
            Industry-Grade <span className="gradient-text">Capstone Projects</span>
          </h1>
          <p className="section-subtitle">
            Explore distributed microservices, real-time WebSockets, GitOps platforms, and high-throughput engines built during our training.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ position: 'relative', flex: '1', minWidth: '200px', width: '100%' }}>
              <Search
                size={18}
                color="var(--text-muted)"
                style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }}
              />
              <input
                type="text"
                placeholder="Search projects by tech (e.g. Kafka, React, Docker, Saga)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-input"
                style={{ paddingLeft: '2.4rem' }}
                id="search-projects-input"
              />
            </div>

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

        <div style={{ marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
          Showing {filteredProjects.length} enterprise projects
        </div>

        {/* Project Grid */}
        <div className="grid-2" style={{ marginBottom: '4rem' }}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
              No projects found matching your search.
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
