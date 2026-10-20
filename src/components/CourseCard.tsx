import React from 'react';
import type { Course } from '../data/courses';
import { RegistrationButton } from './RegistrationButton';
import { Calendar, Clock, Star, CheckCircle2, ChevronRight } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  onViewDetails?: (courseId: string) => void;
  ctaLabel?: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  onViewDetails,
  ctaLabel = 'Register for This Course',
}) => {
  return (
    <div className="glass-panel course-card">
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
          <span className="badge cyan">{course.badge}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#fbbf24', fontSize: '0.85rem', fontWeight: 600 }}>
            <Star size={15} fill="#fbbf24" />
            <span>{course.rating}</span>
            <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>({course.reviewsCount})</span>
          </div>
        </div>

        <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.6rem' }}>
          {course.title}
        </h3>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
          {course.shortDesc}
        </p>

        <div className="course-meta-bar" style={{ flexWrap: 'wrap', gap: '0.85rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Clock size={14} color="var(--primary-light)" />
            {course.duration}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Calendar size={14} color="var(--accent-cyan)" />
            Batch: {course.nextBatchDate}
          </span>
        </div>

        <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.82rem' }}>
          <span style={{ color: 'var(--text-secondary)' }}>Status:</span>
          <span style={{ color: course.seatsLeft <= 5 ? 'var(--accent-rose)' : '#34d399', fontWeight: 600 }}>
            🔥 Only {course.seatsLeft} of {course.totalSeats} seats remaining
          </span>
        </div>

        <ul className="course-highlights">
          {course.highlights.slice(0, 3).map((item, idx) => (
            <li key={idx}>
              <CheckCircle2 size={16} />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
          {course.technologiesCovered.slice(0, 5).map((tech, idx) => (
            <span key={idx} className="concept-pill" style={{ fontSize: '0.72rem' }}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', flexWrap: 'wrap' }}>
        <RegistrationButton
          label={ctaLabel}
          variant="primary"
          size="md"
          courseName={course.title}
        />

        {onViewDetails && (
          <button
            type="button"
            onClick={() => onViewDetails(course.id)}
            className="btn btn-secondary btn-sm"
          >
            <span>Syllabus</span>
            <ChevronRight size={15} />
          </button>
        )}
      </div>
    </div>
  );
};
