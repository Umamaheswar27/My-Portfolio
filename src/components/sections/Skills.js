import React from 'react';
import { C } from '../../constants/tokens';
import Section from '../ui/Section';
import { SectionTag, SectionTitle, Chip } from '../ui/Typography';

const groups = [
  { title: 'Backend Engineering',    items: ['Java', 'Spring Boot', 'Hibernate/JPA', 'REST APIs', 'Microservices', 'Spring Security'] },
  { title: 'Frontend',               items: ['Angular', 'TypeScript', 'PrimeNG', 'HTML', 'CSS'] },
  { title: 'Databases',              items: ['PostgreSQL', 'MySQL', 'Oracle', 'Query Optimisation', 'Indexing'] },
  { title: 'Messaging & Real-Time',  items: ['RabbitMQ', 'Kafka', 'WebSocket', 'Event-Driven Architecture', 'Async Workflows'] },
  { title: 'Security',               items: ['OAuth 2.0', 'JWT Authentication', 'RBAC', 'Spring Security'] },
  { title: 'Cloud & DevOps',         items: ['AWS', 'Docker (Basics)', 'CI/CD', 'Azure Fundamentals', 'Git', 'Maven', 'Postman'] },
];

const tools = ['Git', 'Maven', 'Postman', 'Agile/Scrum', 'Code Review', 'Docker'];

const Skills = () => (
  <Section id="skills">
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
      <SectionTag>Skills</SectionTag>
      <SectionTitle>Technology stack</SectionTitle>

      <div className="skills-grid">
        {groups.map((g, i) => (
          <div key={i} style={{
            background: C.bg2, border: `0.5px solid ${C.border}`,
            borderRadius: 12, padding: '18px 20px', transition: 'border-color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = C.blueBdr}
            onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
            <div style={{ fontSize: 11, color: C.blue, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10, fontWeight: 600 }}>
              {g.title}
            </div>
            <div>{g.items.map((s, j) => <Chip key={j}>{s}</Chip>)}</div>
          </div>
        ))}
      </div>

      {/* tools row */}
      <div style={{ marginTop: 14, background: C.bg2, border: `0.5px solid ${C.border}`, borderRadius: 12, padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 11, color: C.dim, textTransform: 'uppercase', letterSpacing: '0.08em', flexShrink: 0 }}>Tools & Practices</span>
        {tools.map((t, i) => <Chip key={i}>{t}</Chip>)}
      </div>
    </div>
    <style>{`
      .skills-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
      @media (max-width: 900px) { .skills-grid { grid-template-columns: repeat(2, 1fr); } }
      @media (max-width: 560px) { .skills-grid { grid-template-columns: 1fr; } }
    `}</style>
  </Section>
);

export default Skills;
