import React from 'react';
import { C } from '../../constants/tokens';
import Section from '../ui/Section';
import { SectionTag, SectionTitle } from '../ui/Typography';

const items = [
  { title: 'Microservices Architecture', desc: 'Designed and shipped modular Spring Boot microservices in real production environments.' },
  { title: 'Real-Time Systems',          desc: 'Implemented WebSocket-based bidirectional communication reducing API polling by 40%.' },
  { title: 'Event-Driven Design',        desc: 'Built RabbitMQ async workflows improving throughput and scalability by 40–50%.' },
  { title: 'Enterprise Development',     desc: 'Delivered end-to-end features across ride-booking and Oracle data migration platforms.' },
  { title: 'Secure Application Design',  desc: 'Implemented OAuth 2.0, JWT, and RBAC across multi-role production applications.' },
  { title: 'Performance Optimisation',   desc: 'Improved API response times 25–30% through PostgreSQL query tuning and indexing.' },
  { title: 'Full Stack Delivery',        desc: 'Java backend + Angular frontend — own the whole feature from DB schema to UI.' },
  { title: 'Production-Grade Quality',   desc: 'Write clean, maintainable code that teammates can extend with confidence.' },
  { title: 'Agile Collaboration',        desc: 'Experienced in cross-functional Agile/Scrum teams with strong communication skills.' },
];

const WhyHireMe = () => (
  <Section id="why">
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
      <SectionTag>Why Hire Me</SectionTag>
      <SectionTitle>What I bring to your team</SectionTitle>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
        {items.map((it, i) => (
          <div key={i} style={{
            background: C.bg2, border: `0.5px solid ${C.border}`,
            borderRadius: 12, padding: '16px 18px',
            display: 'flex', gap: 12, alignItems: 'flex-start',
            transition: 'border-color 0.2s, transform 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = C.cyanBdr; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = ''; }}>
            <span style={{ color: C.cyan, fontSize: 16, flexShrink: 0, marginTop: 2 }}>✓</span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: C.text, marginBottom: 5 }}>{it.title}</div>
              <div style={{ fontSize: 12, color: C.muted, lineHeight: 1.6 }}>{it.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default WhyHireMe;
