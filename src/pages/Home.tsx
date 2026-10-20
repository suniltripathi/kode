import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { technologies } from '../data/technologies';
import { courses } from '../data/courses';
import { projects } from '../data/projects';
import { RegistrationButton } from '../components/RegistrationButton';
import { TechnologyCard } from '../components/TechnologyCard';
import { CourseCard } from '../components/CourseCard';
import { ProjectCard } from '../components/ProjectCard';
import { ContactCTA } from '../components/ContactCTA';
import {
  Server,
  Star,
  Users,
  ArrowRight,
  BookOpen,
} from 'lucide-react';

interface HomeProps {
  onNavigate: (path: string) => void;
  onSelectTech?: (techId: string) => void;
  onSelectCourse?: (courseId: string) => void;
}

export const Home: React.FC<HomeProps> = ({
  onNavigate,
  onSelectTech,
  onSelectCourse,
}) => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            {/* Left Column: Value Proposition */}
            <div>
              <div className="hero-badge">
                <span className="pulse-dot"></span>
                <span>Next Live Batch Starting Soon • Admissions Open</span>
              </div>

              <h1 className="hero-title">
                Learn Enterprise Tech From{' '}
                <span className="gradient-text">{siteConfig.trainer.name}</span>
              </h1>

              <p className="hero-desc">
                {siteConfig.trainer.title}. Level up from basic syntax to designing, scaling, and deploying distributed microservices, cloud infrastructure, and modern web applications.
              </p>

              <div className="hero-actions">
                <RegistrationButton
                  label="Join Upcoming Batch"
                  variant="primary"
                  size="lg"
                />

                <button
                  type="button"
                  onClick={() => onNavigate('/training')}
                  className="btn btn-secondary btn-lg"
                  id="hero-explore-batches-btn"
                >
                  <BookOpen size={18} />
                  <span>View Live Batches</span>
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('/roadmaps')}
                  className="btn btn-outline btn-lg"
                  id="hero-roadmaps-btn"
                >
                  <span>Career Roadmaps</span>
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* Quick Trust Stats */}
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number gradient-text">10+ Years</span>
                  <span className="stat-label">Industry & Training Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number gradient-text">15,000+</span>
                  <span className="stat-label">Engineers & Leads Mentored</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number gradient-text">4.9 / 5.0</span>
                  <span className="stat-label">Alumni Rating Across Cohorts</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Showcase */}
            <div className="hero-visual">
              <div className="trainer-card-showcase">
                <div className="floating-badge badge-top-left">
                  <Server size={18} color="var(--primary-light)" />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Specialization</div>
                    <div>Spring Boot & Cloud</div>
                  </div>
                </div>

                <img
                  src={siteConfig.trainer.profileImage}
                  alt={siteConfig.trainer.name}
                  className="trainer-card-image"
                />

                <div className="floating-badge badge-bottom-right">
                  <Users size={18} color="#10b981" />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Cohorts</div>
                    <div>100% Live Interactive</div>
                  </div>
                </div>

                <div className="trainer-card-overlay">
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>{siteConfig.trainer.name}</h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--accent-cyan)' }}>{siteConfig.trainer.location}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onNavigate('/about')}
                    className="btn btn-secondary btn-sm"
                  >
                    <span>Trainer Bio</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Technologies Section */}
      <section className="section" style={{ background: 'rgba(255, 255, 255, 0.01)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Core Curriculum</span>
            <h2 className="section-title">Production-Tested Technologies</h2>
            <p className="section-subtitle">
              We focus on enterprise software foundations that tier-1 product companies and tech giants build upon.
            </p>
          </div>

          <div className="grid-3">
            {technologies.slice(0, 3).map((tech) => (
              <TechnologyCard
                key={tech.id}
                tech={tech}
                onSelect={(id) => onSelectTech ? onSelectTech(id) : onNavigate('/technologies')}
              />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button
              type="button"
              onClick={() => onNavigate('/technologies')}
              className="btn btn-secondary"
            >
              <span>Explore All Technologies & Deep Dives</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Upcoming Live Training Batches */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Cohort Programs</span>
            <h2 className="section-title">Upcoming Live Training Batches</h2>
            <p className="section-subtitle">
              Interactive live Zoom sessions with real-time screen sharing, hands-on labs, code reviews, and mock interviews.
            </p>
          </div>

          <div className="grid-2">
            {courses.slice(0, 2).map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                ctaLabel="Register for This Course"
                onViewDetails={(id) => onSelectCourse ? onSelectCourse(id) : onNavigate('/training')}
              />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button
              type="button"
              onClick={() => onNavigate('/training')}
              className="btn btn-secondary"
            >
              <span>View All Training Programs & Schedules</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials / Alumni Success Section (Guarded by Feature Flag) */}
      {siteConfig.features.enableTestimonials && (
        <section className="section" style={{ background: 'rgba(139, 92, 246, 0.03)' }}>
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Student Success</span>
              <h2 className="section-title">Where Our Alumni Work</h2>
              <p className="section-subtitle">
                Over 15,000+ engineers trained who now lead engineering teams at top tech firms.
              </p>
            </div>

            <div className="grid-3">
              <div className="glass-panel" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', gap: '0.25rem', color: '#fbbf24', marginBottom: '1rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#fbbf24" />
                  ))}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                  "The Java 21 & Spring Boot Microservices cohort transformed my engineering approach. The Saga pattern, Kafka event sourcing, and hands-on AWS deployments gave me the exact skills to crack my Lead Engineer interview at a top fintech firm."
                </p>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>Vikram S.</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>Staff Backend Engineer at FinTech Unicorn</p>
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', gap: '0.25rem', color: '#fbbf24', marginBottom: '1rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#fbbf24" />
                  ))}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                  "What separates this training from generic Udemy tutorials is the architectural rigor. We didn't just write code; we benchmarked garbage collection, configured circuit breakers, and debugged race conditions. Unbelievably high return on investment."
                </p>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>Priya Nair</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>Senior Full Stack Developer at Cloud Enterprise</p>
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', gap: '0.25rem', color: '#fbbf24', marginBottom: '1rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#fbbf24" />
                  ))}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                  "The System Design masterclass is phenomenal. Learning how to estimate throughput, shard databases, and handle cross-region replication gave me total confidence during FAANG architecture rounds."
                </p>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>Arjun Mehra</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>Lead Architect at Global Logistics Tech</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Real Capstone Projects Showcase */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Portfolio Work</span>
            <h2 className="section-title">Built in Live Cohorts</h2>
            <p className="section-subtitle">
              Students build production-ready distributed applications, not toy counter apps.
            </p>
          </div>

          <div className="grid-2">
            {projects.slice(0, 2).map((proj) => (
              <ProjectCard key={proj.id} project={proj} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button
              type="button"
              onClick={() => onNavigate('/projects')}
              className="btn btn-secondary"
            >
              <span>Explore All Capstone Projects & Architecture</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Universal Dynamic Contact CTA */}
      <div className="container">
        <ContactCTA />
      </div>
    </div>
  );
};
