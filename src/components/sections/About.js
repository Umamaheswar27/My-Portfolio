import React from 'react';
import { C } from '../../constants/tokens';
import Section from '../ui/Section';
import { SectionTag, SectionTitle } from '../ui/Typography';

const facts = [
  { label: 'Degree',         value: 'B.Tech · VVIT Guntur' },
  { label: 'Current Role',   value: 'Software Engineer @ SNAD Dev' },
  { label: 'Specialisation', value: 'Microservices · Real-Time · Security' },
  { label: 'Location',       value: 'Hyderabad, India · Remote-Ready' },
  { label: 'Education',      value: 'Aug 2019 – Jun 2023' },
  { label: 'Status',         value: 'Open to Full-Time & Remote Roles' },
];

const About = () => (
  <Section id="about">
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
      <SectionTag>About Me</SectionTag>
      <SectionTitle>Engineer who builds for scale,<br />not just for today</SectionTitle>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
        <div>
          <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.85, marginBottom: 18 }}>
            I'm a B.Tech graduate turned full-stack engineer who specialises in production-grade Java systems that survive traffic spikes, distributed failures, and enterprise complexity.
          </p>
          <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.85, marginBottom: 18 }}>
            At SNAD Developers, I've shipped microservice architectures, real-time WebSocket ride-booking platforms, and event-driven RabbitMQ pipelines — all in production, not just in demos.
          </p>
          <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.85 }}>
            I care deeply about maintainability, measurable performance, and secure design — writing code that teammates can read, extend, and trust six months after delivery.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {facts.map((f, i) => (
            <div key={i} style={{ background: C.bg2, border: `0.5px solid ${C.border}`, borderRadius: 10, padding: '14px 16px' }}>
              <div style={{ fontSize: 11, color: C.dim, marginBottom: 5, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{f.label}</div>
              <div style={{ fontSize: 13, color: C.text, fontWeight: 500 }}>{f.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

export default About;
