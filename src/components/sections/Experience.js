import React from 'react';
import { C } from '../../constants/tokens';
import Section from '../ui/Section';
import { SectionTag, SectionTitle, Chip } from '../ui/Typography';

const achievements = [
  { metric: '40–50%',     desc: 'Scalability gain via RabbitMQ event-driven async workflows' },
  { metric: '40%',        desc: 'Reduction in API polling through WebSocket real-time communication' },
  { metric: '25–30%',     desc: 'API response time improvement via PostgreSQL query & index optimisation' },
  { metric: 'End-to-End', desc: 'Ownership across ride-booking and enterprise data migration domains' },
  { metric: 'Multi-role', desc: 'OAuth 2.0 + RBAC secure authentication & authorisation systems' },
  { metric: 'Modular',    desc: 'Spring Boot microservices following clean, maintainable architecture principles' },
];

const stack = ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'RabbitMQ', 'WebSocket', 'PostgreSQL', 'OAuth 2.0', 'RBAC', 'JWT', 'Hibernate/JPA', 'REST APIs', 'Git', 'Maven', 'Docker', 'AWS', 'CI/CD', 'Agile/Scrum'];

const responsibilities = [
  'Delivered production-grade full-stack applications with end-to-end feature ownership',
  'Designed modular Spring Boot microservices architecture',
  'Built event-driven async workflows using RabbitMQ',
  'Implemented real-time WebSocket communication layer',
  'Optimised PostgreSQL queries and indexing strategies',
  'Built OAuth 2.0 + RBAC multi-role security systems',
  'Collaborated in Agile/Scrum cross-functional teams',
];

const Experience = () => (
  <Section id="experience">
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
      <SectionTag>Experience</SectionTag>
      <SectionTitle>Where I've shipped real things</SectionTitle>

      <div className="exp-grid">
        {/* timeline card */}
        <div style={{ background: C.bg2, border: `0.5px solid ${C.border}`, borderRadius: 14, padding: 28, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${C.blue}, ${C.cyan})` }} />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
            <div>
              <h3 style={{ fontSize: 17, fontWeight: 600, color: C.text, marginBottom: 3 }}>Software Engineer</h3>
              <div style={{ fontSize: 13, color: C.blue, fontWeight: 500, marginBottom: 5 }}>SNAD Developers</div>
              <div style={{ fontSize: 11, color: C.dim }}>Hyderabad, Telangana</div>
            </div>
            <div style={{ fontSize: 11, color: C.cyan, background: C.cyanDim, border: `0.5px solid ${C.cyanBdr}`, padding: '4px 10px', borderRadius: 20, whiteSpace: 'nowrap' }}>
              Apr 2024 – May 2026
            </div>
          </div>

          <div style={{ margin: '18px 0', borderTop: `0.5px solid ${C.border}` }} />

          <div className="exp-achievements-grid">
            {achievements.map((a, i) => (
              <div key={i} style={{ background: C.bg3, border: `0.5px solid ${C.border}`, borderRadius: 8, padding: '10px 12px' }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: C.blue, marginBottom: 4 }}>{a.metric}</div>
                <div style={{ fontSize: 11, color: C.muted, lineHeight: 1.5 }}>{a.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* right column */}
        <div>
          <p style={{ fontSize: 13, color: C.dim, marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Technologies used</p>
          <div style={{ marginBottom: 28 }}>
            {stack.map((s, i) => <Chip key={i}>{s}</Chip>)}
          </div>

          <div style={{ background: C.bg2, border: `0.5px solid ${C.border}`, borderRadius: 10, padding: '16px 18px' }}>
            <p style={{ fontSize: 12, color: C.dim, marginBottom: 10 }}>KEY RESPONSIBILITIES</p>
            {responsibilities.map((r, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 9 }}>
                <span style={{ color: C.blue, fontSize: 14, flexShrink: 0, marginTop: 1 }}>›</span>
                <span style={{ fontSize: 13, color: C.muted, lineHeight: 1.5 }}>{r}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <style>{`
      .exp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
      .exp-achievements-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
      @media (max-width: 768px) {
        .exp-grid { grid-template-columns: 1fr; gap: 24px; }
        .exp-achievements-grid { grid-template-columns: 1fr; }
      }
    `}</style>
  </Section>
);

export default Experience;
