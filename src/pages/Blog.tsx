import React, { useState } from 'react';
import type { BlogPost } from '../data/blogs';
import { blogs } from '../data/blogs';
import { siteConfig } from '../config/siteConfig';
import { ContactCTA } from '../components/ContactCTA';
import {
  Calendar,
  Clock,
  Search,
  ArrowRight,
  ChevronLeft,
} from 'lucide-react';

export const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Java & Spring', 'System Design', 'Frontend', 'DevOps & Cloud'];

  const filteredBlogs = blogs.filter((b) => {
    const matchesCategory = selectedCategory === 'All' || b.category === selectedCategory;
    const matchesSearch =
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  // If viewing a single post in detail
  if (selectedPost) {
    return (
      <div className="blog-detail-page" style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <button
            type="button"
            onClick={() => setSelectedPost(null)}
            className="btn btn-secondary btn-sm"
            style={{ marginBottom: '2rem' }}
          >
            <ChevronLeft size={16} />
            <span>Back to All Articles</span>
          </button>

          <div className="glass-panel" style={{ padding: '3rem', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span className="badge cyan">{selectedPost.category}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                <Clock size={14} />
                {selectedPost.readTime}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                <Calendar size={14} />
                {selectedPost.publishedDate}
              </span>
            </div>

            <h1 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '1.25rem', lineHeight: '1.25' }}>
              {selectedPost.title}
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingBottom: '1.5rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-subtle)' }}>
              <img
                src={siteConfig.trainer.profileImage}
                alt={siteConfig.trainer.name}
                style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <strong style={{ fontSize: '0.95rem' }}>{siteConfig.trainer.name}</strong>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{siteConfig.trainer.title}</p>
              </div>
            </div>

            {/* Article Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.08rem', lineHeight: '1.8' }}>
              {selectedPost.content.map((paragraph, idx) => (
                <p key={idx} style={{ color: paragraph.startsWith('1.') || paragraph.startsWith('2.') || paragraph.startsWith('3.') ? 'var(--text-main)' : undefined, fontWeight: paragraph.startsWith('Key takeaways') ? 700 : undefined }}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
              {selectedPost.tags.map((tag, idx) => (
                <span key={idx} className="concept-pill">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <ContactCTA
            title="Want to Master These Architectural Patterns?"
            subtitle="Join our live cohorts to build and stress-test high-throughput distributed systems from scratch."
          />
        </div>
      </div>
    );
  }

  // Article Listing View
  return (
    <div className="blog-listing-page" style={{ padding: '3rem 0' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Engineering Insights</span>
          <h1 className="section-title">
            Architectural <span className="gradient-text">Articles & Guides</span>
          </h1>
          <p className="section-subtitle">
            Deep technical breakdowns on Java 21, concurrency, system design, and production cloud operations.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ position: 'relative', flex: '1', minWidth: '260px' }}>
              <Search
                size={18}
                color="var(--text-muted)"
                style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }}
              />
              <input
                type="text"
                placeholder="Search articles by title, topic, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-input"
                style={{ paddingLeft: '2.4rem' }}
                id="search-blog-input"
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

        {/* Articles Grid */}
        <div className="grid-2" style={{ marginBottom: '4rem' }}>
          {filteredBlogs.map((post) => (
            <div key={post.id} className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                  <span className="badge cyan">{post.category}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{post.readTime}</span>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem', lineHeight: '1.35' }}>
                  {post.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                  {post.summary}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {post.tags.map((t, idx) => (
                    <span key={idx} className="concept-pill" style={{ fontSize: '0.72rem' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {post.publishedDate}
                </span>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedPost(post);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="btn btn-outline btn-sm"
                >
                  <span>Read Article</span>
                  <ArrowRight size={15} />
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
