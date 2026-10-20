import React, { useState } from 'react';
import { courses } from '../data/courses';
import { RegistrationButton } from '../components/RegistrationButton';
import { ContactCTA } from '../components/ContactCTA';
import {
  Star,
  Users,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Award,
  Video,
  FileText,
  Sparkles,
} from 'lucide-react';

interface TrainingProps {
  initialCourseId?: string;
}

export const Training: React.FC<TrainingProps> = ({ initialCourseId }) => {
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(
    initialCourseId || courses[0].id
  );
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleCourseExpand = (courseId: string) => {
    setExpandedCourseId(expandedCourseId === courseId ? null : courseId);
  };

  const faqs = [
    {
      q: "Are the training sessions live or pre-recorded?",
      a: "100% Live Instructor-Led on Zoom. You can ask questions in real-time, share your screen for live debugging, and participate in interactive design discussions. High-definition recordings of every class are uploaded within 4 hours for lifetime review."
    },
    {
      q: "What if I miss a live class due to work emergencies?",
      a: "All sessions are recorded in 1080p and accompanied by complete Git commits, class notes, and architectural diagrams. You also have access to our private cohort Discord/Slack channel where you can ask doubts anytime."
    },
    {
      q: "How does batch registration and enrollment work?",
      a: "Click any 'Register Now' button to fill out the Google Form. We review your current tech background to ensure the cohort fits your goals, and then send you the batch onboarding pack and calendar invites."
    },
    {
      q: "Do you offer mock interviews and resume reviews?",
      a: "Yes! Every cohort includes a 1-on-1 resume review focused on highlighting architectural impact and real metrics, along with a 60-minute mock technical and system design interview with actionable feedback."
    }
  ];

  return (
    <div className="training-page" style={{ padding: '3rem 0' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Live Cohort Programs</span>
          <h1 className="section-title">Upcoming Live Training Batches</h1>
          <p className="section-subtitle">
            Immersive, project-first live training designed to take you from foundational understanding to senior engineering and architectural mastery.
          </p>
        </div>

        {/* Global Batch Features Ribbon */}
        <div className="glass-panel batch-features-ribbon">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Video size={22} color="var(--primary-light)" />
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>100% Live Interactive</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Weekend & Evening cohorts</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <FileText size={22} color="var(--accent-cyan)" />
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>Real Capstone Projects</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Enterprise microservices & cloud</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Award size={22} color="#34d399" />
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>Mock Technical Interviews</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>1-on-1 feedback & resume review</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Users size={22} color="#fbbf24" />
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>Small Focused Batches</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Max 25-30 engineers per cohort</p>
            </div>
          </div>
        </div>

        {/* Courses List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginBottom: '4rem' }}>
          {courses.map((course) => {
            const isExpanded = expandedCourseId === course.id;

            return (
              <div
                key={course.id}
                className="glass-panel training-course-card"
                style={{
                  border: isExpanded ? '1px solid var(--border-highlight)' : '1px solid var(--border-subtle)',
                  boxShadow: isExpanded ? 'var(--shadow-glow)' : 'var(--shadow-md)',
                }}
              >
                {/* Header row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                      <span className="badge cyan">{course.badge}</span>
                      <span className="badge amber">{course.mode}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#fbbf24', fontSize: '0.85rem', fontWeight: 600 }}>
                        <Star size={15} fill="#fbbf24" />
                        <span>{course.rating}</span>
                        <span style={{ color: 'var(--text-muted)' }}>({course.reviewsCount} reviews)</span>
                      </div>
                    </div>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: 800 }}>{course.title}</h2>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                      Upcoming Batch Start Date
                    </div>
                    <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--accent-cyan)' }}>
                      {course.nextBatchDate}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: course.seatsLeft <= 5 ? 'var(--accent-rose)' : '#34d399', fontWeight: 600, marginTop: '0.2rem' }}>
                      🔥 Only {course.seatsLeft} of {course.totalSeats} seats left
                    </div>
                  </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '1.5rem', maxWidth: '900px' }}>
                  {course.overview}
                </p>

                {/* Key Meta row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', background: 'rgba(255, 255, 255, 0.02)', padding: '0.85rem 1.25rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', border: '1px solid var(--border-subtle)' }}>
                  <div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block' }}>Duration</span>
                    <strong style={{ fontSize: '0.92rem' }}>{course.duration}</strong>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block' }}>Class Schedule</span>
                    <strong style={{ fontSize: '0.92rem' }}>{course.schedule}</strong>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block' }}>Target Roles</span>
                    <strong style={{ fontSize: '0.92rem' }}>{course.targetAudience.slice(0, 45)}...</strong>
                  </div>
                </div>

                {/* Action CTA Bar */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    {/* Section 8 requirement: Register Now for training pages */}
                    <RegistrationButton
                      label="Register Now"
                      variant="primary"
                      size="md"
                      courseName={course.title}
                    />

                    <button
                      type="button"
                      onClick={() => toggleCourseExpand(course.id)}
                      className="btn btn-secondary btn-md"
                    >
                      <span>{isExpanded ? 'Hide Syllabus Modules' : 'View Full Syllabus Modules'}</span>
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  </div>

                  {/* Tech stack badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {course.technologiesCovered.slice(0, 5).map((t, idx) => (
                      <span key={idx} className="concept-pill" style={{ fontSize: '0.76rem' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expandable Syllabus Modules */}
                {isExpanded && (
                  <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid var(--border-subtle)' }}>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Sparkles size={20} color="var(--primary-light)" />
                      <span>Detailed Cohort Modules & Weekly Breakdown</span>
                    </h3>

                    <div className="syllabus-grid">
                      {course.modules.map((mod, mIdx) => (
                        <div key={mIdx} style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                          <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                            {mod.moduleTitle}
                          </h4>
                          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {mod.topics.map((top, tIdx) => (
                              <li key={tIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                                <CheckCircle2 size={15} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                                <span>{top}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div style={{ background: 'rgba(139, 92, 246, 0.08)', padding: '1.25rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                      <div>
                        <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>Career Outcomes</h4>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                          {course.careerOutcomes.join(' • ')}
                        </p>
                      </div>

                      <RegistrationButton
                        label="Register Now"
                        variant="primary"
                        size="md"
                        courseName={course.title}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQs Accordion */}
        <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="section-tag">Got Questions?</span>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Frequently Asked Questions</h3>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: 'var(--text-main)',
                    }}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={18} color="var(--primary-light)" /> : <ChevronDown size={18} color="var(--text-muted)" />}
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 1.25rem 1.25rem', color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <ContactCTA />
      </div>
    </div>
  );
};
