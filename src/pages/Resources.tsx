import React, { useState } from 'react';
import type { ResourceItem } from '../data/resources';
import { resources } from '../data/resources';
import { ContactCTA } from '../components/ContactCTA';
import {
  Download,
  Search,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';

export const Resources: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [downloadSuccessItem, setDownloadSuccessItem] = useState<string | null>(null);

  const categories = ['All', 'Cheat Sheet', 'Interview Guide', 'Architecture Blueprint', 'Code Starter'];

  const filteredResources = resources.filter((res) => {
    const matchesCategory = selectedCategory === 'All' || res.category === selectedCategory;
    const matchesSearch =
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const handleDownload = (res: ResourceItem) => {
    if (res.isExternal) {
      window.open(res.link, '_blank', 'noopener,noreferrer');
      return;
    }
    // Simulate instant download trigger
    setDownloadSuccessItem(res.title);
    setTimeout(() => {
      setDownloadSuccessItem(null);
    }, 4000);
  };

  return (
    <div className="resources-page" style={{ padding: '3rem 0' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Free Engineering Assets</span>
          <h1 className="section-title">
            Cheatsheets, Blueprints & <span className="gradient-text">Interview Packs</span>
          </h1>
          <p className="section-subtitle">
            Curated, high-value technical resources to help you debug production issues and ace architecture interviews.
          </p>
        </div>

        {/* Download notification banner if triggered */}
        {downloadSuccessItem && (
          <div
            style={{
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid #10b981',
              borderRadius: 'var(--radius-md)',
              padding: '1rem 1.5rem',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              color: '#34d399',
            }}
          >
            <CheckCircle2 size={20} />
            <span>
              <strong>Download initiated:</strong> "{downloadSuccessItem}" has been sent to your downloads.
            </span>
          </div>
        )}

        {/* Filter & Search Bar */}
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
                placeholder="Search cheatsheets by keyword (e.g. Spring, K8s, System Design)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-input"
                style={{ paddingLeft: '2.4rem' }}
                id="search-resources-input"
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

        {/* Resource Cards Grid */}
        <div className="grid-2" style={{ marginBottom: '4rem' }}>
          {filteredResources.map((res) => (
            <div key={res.id} className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                  <span className="badge cyan">{res.category}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    📥 {res.downloadCount} downloads
                  </span>
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.65rem' }}>
                  {res.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                  {res.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {res.tags.map((tag, idx) => (
                    <span key={idx} className="concept-pill" style={{ fontSize: '0.74rem' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
                <span className="badge amber" style={{ fontSize: '0.75rem' }}>
                  Format: {res.format}
                </span>

                <button
                  type="button"
                  onClick={() => handleDownload(res)}
                  className="btn btn-primary btn-sm"
                >
                  {res.isExternal ? (
                    <>
                      <span>Open Template</span>
                      <ExternalLink size={15} />
                    </>
                  ) : (
                    <>
                      <Download size={15} />
                      <span>Download Free Guide</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        <ContactCTA />
      </div>
    </div>
  );
};
