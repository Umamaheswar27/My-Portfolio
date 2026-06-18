import React, { useState } from 'react';
import { C } from '../../constants/tokens';
import Section from '../ui/Section';
import { SectionTag, SectionTitle, Chip } from '../ui/Typography';

const green    = '#34d399';
const greenDim = 'rgba(52,211,153,0.09)';
const greenBdr = 'rgba(52,211,153,0.28)';

const projects = [
  {
    tag: 'Real-Time Mobility Platform',
    name: 'VALAM',
    subtitle: 'Ride Booking & Real-Time Driver Tracking System',
    role: 'Full Stack Engineer',
    techFocus: 'Java + Angular',
    color: C.blue, colorDim: C.blueDim, colorBdr: C.blueBdr,
    problem: 'Ride-booking applications require instant driver assignment, live location tracking, and real-time ride status synchronization. Traditional API polling introduces latency, increased server load, and poor UX when thousands of users are connected simultaneously.',
    solution: 'Built a scalable ride-booking platform using Angular and Spring Boot. Implemented WebSocket-based bidirectional communication for real-time driver and rider updates, integrated Google Maps APIs for geolocation tracking, and secured all APIs with OAuth 2.0 and role-based access control.',
    stack: ['Java', 'Spring Boot', 'Angular', 'WebSocket', 'PostgreSQL', 'Google Maps API', 'OAuth 2.0', 'RBAC', 'REST APIs'],
    arch: [
      { label: 'Angular UI',        color: C.blue,   bdr: C.blueBdr,   dim: C.blueDim },
      { label: 'WebSocket Gateway', color: C.cyan,   bdr: C.cyanBdr,   dim: C.cyanDim },
      { label: 'Spring Boot APIs',  color: C.violet, bdr: C.violetBdr, dim: C.violetDim },
      { label: 'PostgreSQL',        color: C.blue,   bdr: C.blueBdr,   dim: C.blueDim },
    ],
    impact: [
      { n: '40%',    l: 'Reduction in API polling traffic' },
      { n: '<1s',    l: 'Ride status update latency' },
      { n: 'Live',   l: 'Real-time driver tracking' },
      { n: 'OAuth',  l: 'Secure multi-role access' },
    ],
    bullets: [
      'Designed and implemented real-time driver and rider tracking using WebSocket communication',
      'Built ride lifecycle workflows — booking, assignment, status updates, and trip completion',
      'Integrated Google Maps APIs for live geolocation tracking and route visualisation',
      'Developed secure REST APIs with OAuth 2.0 authentication and RBAC authorisation',
      'Replaced polling architecture with event-driven updates, reducing server load by 40%',
    ],
  },
  {
    tag: 'Enterprise Migration Platform',
    name: 'AECCAR',
    subtitle: 'Oracle Fusion Cloud Migration Accelerator',
    role: 'Full Stack Engineer',
    techFocus: 'Java + Angular + Oracle',
    color: C.violet, colorDim: C.violetDim, colorBdr: C.violetBdr,
    problem: 'Enterprise Oracle Fusion Cloud migrations involved complex data mapping, validation, transformation, and error correction processes. Heavy manual intervention increased migration timelines and operational overhead significantly.',
    solution: 'Developed an enterprise migration platform using Angular and Spring Boot that automated Oracle Fusion Cloud migration workflows — including validation pipelines, scheduler-based processing, audit tracking, entitlement management, and retry-based failure recovery.',
    stack: ['Java', 'Spring Boot', 'Angular', 'Oracle', 'PL/SQL', 'RabbitMQ', 'PostgreSQL', 'RBAC'],
    arch: [
      { label: 'Angular UI',      color: C.violet, bdr: C.violetBdr, dim: C.violetDim },
      { label: 'Spring Boot APIs',color: C.blue,   bdr: C.blueBdr,   dim: C.blueDim },
      { label: 'RabbitMQ',        color: C.cyan,   bdr: C.cyanBdr,   dim: C.cyanDim },
      { label: 'Oracle Fusion',   color: C.violet, bdr: C.violetBdr, dim: C.violetDim },
    ],
    impact: [
      { n: '50%',   l: 'Reduction in manual migration effort' },
      { n: 'Auto',  l: 'End-to-end migration workflows' },
      { n: 'Retry', l: 'Failure recovery mechanisms' },
      { n: 'Audit', l: 'Full execution traceability' },
    ],
    bullets: [
      'Developed Spring Boot APIs invoking Oracle stored procedures for Fusion Cloud migration execution',
      'Implemented scheduler audit logging for execution monitoring and troubleshooting',
      'Designed retry and failure recovery mechanisms for failed migration batches',
      'Built entitlement management and role-based access controls across migration modules',
      'Automated file upload → mapping → validation → migration pipeline end-to-end',
    ],
  },
  {
    tag: 'Enterprise HR Platform',
    name: 'RightlyHR',
    subtitle: 'Human Resource Management System',
    role: 'Full Stack Developer',
    techFocus: 'Angular + ASP.NET',
    color: green, colorDim: greenDim, colorBdr: greenBdr,
    problem: 'Organisations required a centralised system to manage employee records, leave approvals, onboarding, offboarding, project allocation, and reporting. Existing manual processes lacked visibility, consistency, and auditability across HR operations.',
    solution: 'Contributed to a comprehensive HRMS platform that streamlined employee lifecycle management, approval workflows, reporting, project allocation, and secure role-based access control through a centralised Angular + ASP.NET web application.',
    stack: ['Angular', 'ASP.NET', 'SQL Server', 'REST APIs', 'RBAC', 'JavaScript', 'HTML', 'CSS'],
    arch: [
      { label: 'Angular UI',      color: green,    bdr: greenBdr,    dim: greenDim },
      { label: 'REST APIs',       color: C.blue,   bdr: C.blueBdr,   dim: C.blueDim },
      { label: 'ASP.NET Backend', color: C.cyan,   bdr: C.cyanBdr,   dim: C.cyanDim },
      { label: 'SQL Server',      color: green,    bdr: greenBdr,    dim: greenDim },
    ],
    impact: [
      { n: 'Central', l: 'Unified HR operations hub' },
      { n: 'Auto',    l: 'Approval workflow automation' },
      { n: 'RBAC',    l: 'Secure role-based access' },
      { n: 'E2E',     l: 'Employee lifecycle coverage' },
    ],
    bullets: [
      'Developed onboarding and offboarding workflows with multi-stage approval processes',
      'Implemented leave management, approval routing, and employee information modules',
      'Built role-based authorisation and secure access control across all HR modules',
      'Created reporting and dashboard functionality for HR operations visibility',
      'Enhanced workflow automation across leave, allocation, and lifecycle management processes',
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
        <div style={{ display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
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
            <p style={{ fontSize: 13, color: C.muted, marginBottom: 10 }}>{p.subtitle}</p>
            <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: 10, color: C.dim, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Role</span>
                <span style={{ fontSize: 11, color: C.text, fontWeight: 500, background: C.bg3, border: `0.5px solid ${C.border2}`, padding: '2px 8px', borderRadius: 4 }}>{p.role}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: 10, color: C.dim, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Stack</span>
                <span style={{ fontSize: 11, color: p.color, fontWeight: 500, background: p.colorDim, border: `0.5px solid ${p.colorBdr}`, padding: '2px 8px', borderRadius: 4 }}>{p.techFocus}</span>
              </div>
            </div>

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
