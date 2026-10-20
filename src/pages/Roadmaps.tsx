import React from 'react';
import { Roadmap } from '../components/Roadmap';
import { ContactCTA } from '../components/ContactCTA';

export const Roadmaps: React.FC = () => {
  return (
    <div className="roadmaps-page" style={{ padding: '3rem 0' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Career Trajectory</span>
          <h1 className="section-title">
            Step-by-Step <span className="gradient-text">Engineering Roadmaps</span>
          </h1>
          <p className="section-subtitle">
            Clear, milestone-driven paths designed by senior architects to eliminate confusion and take you directly to your target engineering role.
          </p>
        </div>

        {/* Embedded Interactive Roadmap Component */}
        <Roadmap />

        {/* Contact CTA */}
        <ContactCTA
          title="Need a Customized Personal Career Guidance Session?"
          subtitle="Get advice on which roadmap aligns with your current experience, target companies, and timeline."
        />
      </div>
    </div>
  );
};
