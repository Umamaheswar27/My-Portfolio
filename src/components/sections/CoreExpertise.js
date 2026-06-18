import React from 'react';
import { C } from '../../constants/tokens';
import Section from '../ui/Section';
import { SectionTag, SectionTitle } from '../ui/Typography';

const expertise = [
  { label: 'Java',          color: C.blue,   dim: C.blueDim,   bdr: C.blueBdr },
  { label: 'Spring Boot',   color: C.blue,   dim: C.blueDim,   bdr: C.blueBdr },
  { label: 'Angular',       color: C.cyan,   dim: C.cyanDim,   bdr: C.cyanBdr },
  { label: 'REST APIs',     color: C.blue,   dim: C.blueDim,   bdr: C.blueBdr },
  { label: 'WebSocket',     color: C.cyan,   dim: C.cyanDim,   bdr: C.cyanBdr },
  { label: 'Kafka',        color: C.violet, dim: C.violetDim, bdr: C.violetBdr },
  { label: 'RabbitMQ',      color: C.violet, dim: C.violetDim, bdr: C.violetBdr },
  { label: 'PostgreSQL',    color: C.blue,   dim: C.blueDim,   bdr: C.blueBdr },
  { label: 'Oracle',        color: C.violet, dim: C.violetDim, bdr: C.violetBdr },
  { label: 'OAuth 2.0',     color: C.cyan,   dim: C.cyanDim,   bdr: C.cyanBdr },
  { label: 'RBAC',          color: C.cyan,   dim: C.cyanDim,   bdr: C.cyanBdr },
  { label: 'Microservices', color: C.blue,   dim: C.blueDim,   bdr: C.blueBdr },
  { label: 'SQL',           color: C.blue,   dim: C.blueDim,   bdr: C.blueBdr },
  { label: 'Git',           color: C.violet, dim: C.violetDim, bdr: C.violetBdr },
  { label: 'Docker',        color: C.cyan,   dim: C.cyanDim,   bdr: C.cyanBdr },
  { label: 'AWS',           color: C.violet, dim: C.violetDim, bdr: C.violetBdr },
  { label: 'System Design', color: C.blue,   dim: C.blueDim,   bdr: C.blueBdr },
];

const CoreExpertise = () => (
  <Section id="expertise">
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
      <SectionTag>Core Expertise</SectionTag>
      <SectionTitle>Technologies I work with</SectionTitle>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {expertise.map((e, i) => (
          <div key={i} style={{
            fontSize: 13, fontWeight: 500,
            color: e.color, background: e.dim, border: `0.5px solid ${e.bdr}`,
            padding: '9px 18px', borderRadius: 8,
            transition: 'transform 0.15s, box-shadow 0.15s',
            cursor: 'default',
          }}
            onMouseEnter={el => { el.currentTarget.style.transform = 'translateY(-2px)'; el.currentTarget.style.boxShadow = `0 4px 16px ${e.bdr}`; }}
            onMouseLeave={el => { el.currentTarget.style.transform = ''; el.currentTarget.style.boxShadow = ''; }}>
            {e.label}
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default CoreExpertise;
