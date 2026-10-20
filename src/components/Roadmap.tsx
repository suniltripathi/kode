import React, { useState } from 'react';
import type { CareerRoadmap } from '../data/roadmaps';
import { roadmaps } from '../data/roadmaps';
import { RegistrationButton } from './RegistrationButton';
import { CheckSquare, Square, Clock, Award, Sparkles, BookOpen } from 'lucide-react';

interface RoadmapProps {
  initialRoadmapId?: string;
}

export const Roadmap: React.FC<RoadmapProps> = ({ initialRoadmapId }) => {
  const [selectedRoadmap, setSelectedRoadmap] = useState<CareerRoadmap>(
    roadmaps.find((r) => r.id === initialRoadmapId) || roadmaps[0]
  );
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  const toggleCheck = (itemKey: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [itemKey]: !prev[itemKey],
    }));
  };

  // Calculate progress percentage
  const allChecklistKeys = selectedRoadmap.stages.flatMap((stage) =>
    stage.checklist.map((_, cIdx) => `${stage.stageNumber}-${cIdx}`)
  );
  const completedCount = allChecklistKeys.filter((k) => checkedItems[k]).length;
  const progressPercent = allChecklistKeys.length > 0
    ? Math.round((completedCount / allChecklistKeys.length) * 100)
    : 0;

  return (
    <div style={{ marginTop: '2rem' }}>
      {/* Roadmap Selector Tabs */}
      <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', paddingBottom: '1rem', marginBottom: '2.5rem' }}>
        {roadmaps.map((r) => (
          <button
            key={r.id}
            type="button"
            onClick={() => setSelectedRoadmap(r)}
            className={`btn ${selectedRoadmap.id === r.id ? 'btn-primary' : 'btn-secondary'}`}
            style={{ borderRadius: 'var(--radius-pill)', fontSize: '0.9rem' }}
          >
            <Sparkles size={16} />
            <span>{r.title}</span>
          </button>
        ))}
      </div>

      {/* Roadmap Meta Card */}
      <div className="glass-panel" style={{ padding: '2rem', marginBottom: '3rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.25rem' }}>
          <div>
            <span className="badge cyan" style={{ marginBottom: '0.5rem' }}>
              Target Role: {selectedRoadmap.targetRole}
            </span>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800 }}>{selectedRoadmap.title}</h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: 'rgba(255, 255, 255, 0.04)', padding: '0.75rem 1.25rem', borderRadius: 'var(--radius-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.88rem' }}>
              <Clock size={16} color="var(--primary-light)" />
              <span>{selectedRoadmap.duration}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.88rem' }}>
              <Award size={16} color="var(--accent-cyan)" />
              <span>{selectedRoadmap.difficulty}</span>
            </div>
          </div>
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '800px', marginBottom: '1.5rem' }}>
          {selectedRoadmap.description}
        </p>

        {/* Progress Tracker */}
        <div style={{ background: 'rgba(0, 0, 0, 0.3)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
            <span style={{ color: 'var(--text-secondary)' }}>
              Interactive Milestone Tracker ({completedCount} of {allChecklistKeys.length} skills mastered)
            </span>
            <span style={{ color: 'var(--primary-light)', fontWeight: 700 }}>
              {progressPercent}% Complete
            </span>
          </div>
          <div style={{ height: '8px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '999px', overflow: 'hidden' }}>
            <div
              style={{
                width: `${progressPercent}%`,
                height: '100%',
                background: 'var(--gradient-primary)',
                transition: 'width 0.4s ease',
              }}
            />
          </div>
        </div>
      </div>

      {/* Timeline stages */}
      <div className="roadmap-timeline">
        {selectedRoadmap.stages.map((stage) => (
          <div key={stage.stageNumber} className="stage-card">
            <div className="stage-marker">{stage.stageNumber}</div>
            
            <div className="glass-panel stage-content">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.65rem' }}>
                <span className="badge amber">{stage.duration}</span>
                <span style={{ fontSize: '0.82rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                  Stage {stage.stageNumber}
                </span>
              </div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                {stage.title}
              </h3>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.25rem' }}>
                <strong>Goal:</strong> {stage.goal}
              </p>

              {/* Skills Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                {stage.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="concept-pill" style={{ background: 'rgba(139, 92, 246, 0.1)', color: 'var(--primary-light)', borderColor: 'rgba(139, 92, 246, 0.25)' }}>
                    {skill}
                  </span>
                ))}
              </div>

              {/* Recommended Projects */}
              <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.25rem', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '0.35rem' }}>
                  <BookOpen size={14} />
                  <span>Recommended Stage Projects:</span>
                </div>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                  {stage.recommendedProjects.map((proj, pIdx) => (
                    <li key={pIdx}>{proj}</li>
                  ))}
                </ul>
              </div>

              {/* Interactive Checklist */}
              <div>
                <h4 style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  Actionable Checkpoints:
                </h4>
                <ul className="checklist-items">
                  {stage.checklist.map((item, cIdx) => {
                    const itemKey = `${stage.stageNumber}-${cIdx}`;
                    const isChecked = !!checkedItems[itemKey];
                    return (
                      <li
                        key={cIdx}
                        onClick={() => toggleCheck(itemKey)}
                        style={{ cursor: 'pointer', userSelect: 'none' }}
                      >
                        {isChecked ? (
                          <CheckSquare size={17} color="#34d399" />
                        ) : (
                          <Square size={17} color="var(--text-muted)" />
                        )}
                        <span
                          style={{
                            textDecoration: isChecked ? 'line-through' : 'none',
                            color: isChecked ? 'var(--text-muted)' : 'var(--text-secondary)',
                            transition: 'all 0.2s ease',
                          }}
                        >
                          {item}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA for Roadmap */}
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '1rem' }}>
          Want to fast-track this roadmap with 1-on-1 mentorship and live weekend classes?
        </p>
        <RegistrationButton
          label="Join Upcoming Batch"
          variant="primary"
          size="lg"
        />
      </div>
    </div>
  );
};
