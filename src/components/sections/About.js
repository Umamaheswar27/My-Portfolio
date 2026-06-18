import React from 'react';
import { C } from '../../constants/tokens';
import Section from '../ui/Section';
import { SectionTag, SectionTitle } from '../ui/Typography';

const facts = [
  { label: 'Experience',     value: '2.2 Years · Production Apps' },
  { label: 'Current Role',   value: 'Software Engineer @ SNAD Dev' },
  { label: 'Specialisation', value: 'Enterprise Apps · Real-Time · Integrations' },
  { label: 'Location',       value: 'Hyderabad, India · Remote-Ready' },
  { label: 'Education',      value: 'B.Tech · VVIT Guntur · 2023' },
  { label: 'Status',         value: 'Immediate Joiner · Open to Opportunities' },
];

const About = () => (
  <Section id="about">
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
      <SectionTag>About Me</SectionTag>
      <SectionTitle>Engineer who builds for scale,<br />not just for today</SectionTitle>

      <div className="about-grid">
        <div>
          <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.85, marginBottom: 18 }}>
            Full Stack Engineer with 2.2 years of experience developing enterprise-grade applications using Java, Spring Boot, Angular, and modern web technologies.
          </p>
          <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.85, marginBottom: 18 }}>
            Experienced in building real-time platforms, workflow automation systems, Oracle Fusion integrations, and scalable REST APIs — all shipped to production at SNAD Developers.
          </p>
          <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.85 }}>
            Passionate about creating maintainable software, solving real business problems, and designing systems that scale — writing code that teams can extend and trust long after delivery.
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
    <style>{`
      .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }
      @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr; gap: 28px; } }
    `}</style>
  </Section>
);

export default About;
