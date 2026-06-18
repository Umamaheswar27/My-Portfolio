import React, { useState } from 'react';
import { C } from '../../constants/tokens';
import Section from '../ui/Section';
import { SectionTag, SectionTitle, Chip } from '../ui/Typography';

const projects = [
  {
    tag: 'Real-Time Platform',
    name: 'VALAM',
    subtitle: 'Real-Time Ride Booking Platform',
    color: C.blue, colorDim: C.blueDim, colorBdr: C.blueBdr,
    problem: 'Needed live driver tracking, ride status synchronisation, and scalable user workflows for a ride-booking platform — all in real time.',
    solution: 'Built full-stack with Angular + Spring Boot, using WebSocket for bidirectional real-time communication and Google Maps API for geolocation tracking.',
    stack: ['Angular', 'Spring Boot', 'WebSocket', 'Google Maps API', 'PostgreSQL', 'OAuth 2.0', 'RBAC', 'Java'],
    arch: [
      { label: 'Angular UI',        color: C.blue,   bdr: C.blueBdr,   dim: C.blueDim },
      { label: 'WebSocket Gateway', color: C.cyan,   bdr: C.cyanBdr,   dim: C.cyanDim },
      { label: 'Spring Boot',       color: C.violet, bdr: C.violetBdr, dim: C.violetDim },
      { label: 'PostgreSQL',        color: C.blue,   bdr: C.blueBdr,   dim: C.blueDim },
    ],
    impact: [
      { n: '40%',       l: 'API polling reduced' },
      { n: 'Live',      l: 'Driver tracking' },
      { n: 'Real-time', l: 'Status updates' },
      { n: 'Secure',    l: 'OAuth 2.0 + RBAC' },
    ],
    bullets: [
      'Engineered scalable full-stack features with live ride tracking',
      'WebSocket for driver tracking, ride updates & status sync',
      'Google Maps API for route visualisation & geolocation',
      'Secure RESTful APIs with OAuth-based authentication',
      'RBAC authorisation for multi-role user access management',
    ],
  },
  {
    tag: 'Enterprise Platform',
    name: 'AECCAR',
    subtitle: 'Oracle Data Migration Tool',
    color: C.violet, colorDim: C.violetDim, colorBdr: C.violetBdr,
    problem: 'Complex enterprise-scale Oracle data migration requiring multi-stage validation, file mapping, and error correction — all done manually.',
    solution: 'Built Angular + Spring Boot platform invoking Oracle stored procedures, with automated pipelines for upload → map → validate → migrate workflows.',
    stack: ['Angular', 'Spring Boot', 'Oracle', 'PL/SQL Procedures', 'RBAC', 'Java', 'PostgreSQL'],
    arch: [
      { label: 'Angular UI',     color: C.violet, bdr: C.violetBdr, dim: C.violetDim },
      { label: 'Spring Boot API',color: C.blue,   bdr: C.blueBdr,   dim: C.blueDim },
      { label: 'RabbitMQ',       color: C.cyan,   bdr: C.cyanBdr,   dim: C.cyanDim },
      { label: 'Oracle DB',      color: C.violet, bdr: C.violetBdr, dim: C.violetDim },
    ],
    impact: [
      { n: 'Auto',        l: 'Migration workflows' },
      { n: '↓',           l: 'Manual intervention' },
      { n: 'Multi-stage', l: 'Validation pipeline' },
      { n: 'Secure',      l: 'RBAC access control' },
    ],
    bullets: [
      'Spring Boot APIs invoking Oracle stored procedures for enterprise migration',
      'Handled data validation across multi-stage migration pipelines',
      'File upload → mapping → validation → error correction workflow',
      'Environment-based controls and RBAC secure access',
      'Reduced manual effort by 40–50% via async event-driven processing',
    ],
  },
];

const Projects = () => {
  const [active, setActive] = useState(0);
  const p = projects[active];

  return (
    <Section id="projects">
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <SectionTag>Projects</SectionTag>
        <SectionTitle>Case studies in scalable engineering</SectionTitle>

        {/* tabs */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 28 }}>
          {projects.map((pr, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              fontSize: 13, fontWeight: 500, padding: '9px 20px', borderRadius: 7, cursor: 'pointer',
              border: active === i ? `0.5px solid ${pr.color}` : `0.5px solid ${C.border}`,
              background: active === i ? pr.colorDim : C.bg2,
              color: active === i ? pr.color : C.muted,
              transition: 'all 0.2s',
            }}>
              {pr.name}
              <span style={{ fontSize: 11, marginLeft: 7, opacity: 0.6 }}>{pr.tag}</span>
            </button>
          ))}
        </div>

        <div className="proj-grid">
          {/* left: overview */}
          <div style={{ background: C.bg2, border: `0.5px solid ${C.border}`, borderRadius: 14, padding: 28, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: p.color }} />
            <div style={{ fontSize: 11, color: p.color, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>{p.tag}</div>
            <h3 style={{ fontSize: 22, fontWeight: 700, color: C.text, marginBottom: 4 }}>{p.name}</h3>
            <p style={{ fontSize: 13, color: C.muted, marginBottom: 20 }}>{p.subtitle}</p>

            <div style={{ marginBottom: 18 }}>
              <p style={{ fontSize: 11, color: C.dim, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 7 }}>Problem</p>
              <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.7 }}>{p.problem}</p>
            </div>
            <div style={{ marginBottom: 20 }}>
              <p style={{ fontSize: 11, color: C.dim, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 7 }}>Solution</p>
              <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.7 }}>{p.solution}</p>
            </div>
            <div>{p.stack.map((s, i) => <Chip key={i}>{s}</Chip>)}</div>
          </div>

          {/* right: arch + impact + bullets */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* architecture flow */}
            <div style={{ background: C.bg2, border: `0.5px solid ${C.border}`, borderRadius: 14, padding: 22 }}>
              <p style={{ fontSize: 11, color: C.dim, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 14 }}>Architecture flow</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                {p.arch.map((node, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ fontSize: 11, padding: '6px 12px', borderRadius: 6, color: node.color, background: node.dim, border: `0.5px solid ${node.bdr}`, fontWeight: 500 }}>
                      {node.label}
                    </div>
                    {i < p.arch.length - 1 && <span style={{ color: C.border2, fontSize: 14 }}>→</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* impact grid */}
            <div style={{ background: C.bg2, border: `0.5px solid ${C.border}`, borderRadius: 14, padding: 22 }}>
              <p style={{ fontSize: 11, color: C.dim, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 14 }}>Impact</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {p.impact.map((imp, i) => (
                  <div key={i} style={{ background: C.bg3, border: `0.5px solid ${C.border}`, borderRadius: 8, padding: '10px 12px', textAlign: 'center' }}>
                    <div style={{ fontSize: 20, fontWeight: 700, color: p.color, marginBottom: 3 }}>{imp.n}</div>
                    <div style={{ fontSize: 11, color: C.dim }}>{imp.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* bullets */}
            <div style={{ background: C.bg2, border: `0.5px solid ${C.border}`, borderRadius: 14, padding: 22 }}>
              <p style={{ fontSize: 11, color: C.dim, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>What I built</p>
              {p.bullets.map((b, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
                  <span style={{ color: p.color, fontSize: 14, flexShrink: 0, marginTop: 1 }}>›</span>
                  <span style={{ fontSize: 13, color: C.muted, lineHeight: 1.5 }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .proj-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        @media (max-width: 768px) { .proj-grid { grid-template-columns: 1fr; gap: 16px; } }
      `}</style>
    </Section>
  );
};

export default Projects;
