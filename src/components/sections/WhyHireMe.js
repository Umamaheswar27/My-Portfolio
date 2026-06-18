import React from 'react';
import { C } from '../../constants/tokens';
import Section from '../ui/Section';
import { SectionTag, SectionTitle } from '../ui/Typography';

const items = [
  { title: 'Real-Time Driver Tracking',        desc: 'Built WebSocket-based bidirectional communication for live ride tracking with sub-second latency.' },
  { title: 'Oracle Fusion Cloud Integration',  desc: 'Integrated Oracle stored procedures for enterprise-scale Fusion Cloud migration workflows.' },
  { title: 'Scheduler Audit & Retry Logic',    desc: 'Implemented scheduler audit logging and retry-based failure recovery for migration pipelines.' },
  { title: 'Workflow Automation Platforms',    desc: 'Automated end-to-end migration and HR workflows reducing manual effort by up to 50%.' },
  { title: 'Role-Based Access Control',        desc: 'Implemented OAuth 2.0, JWT, and RBAC across multi-role production enterprise applications.' },
  { title: 'Enterprise REST API Development',  desc: 'Designed and delivered scalable REST APIs with security, validation, and performance optimisation.' },
  { title: 'Approval Workflow Systems',        desc: 'Built multi-level approval workflows for HR lifecycle and enterprise process management.' },
  { title: 'Event-Driven Architecture',        desc: 'Designed RabbitMQ async workflows improving system throughput and scalability by 40–50%.' },
  { title: 'Full Stack Delivery',              desc: 'Java Spring Boot backend + Angular frontend — end-to-end feature ownership from DB to UI.' },
];

const WhyHireMe = () => (
  <Section id="why">
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
      <SectionTag>Engineering Highlights</SectionTag>
      <SectionTitle>What I bring to your team</SectionTitle>

      <div className="why-grid">
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
    <style>{`
      .why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
      @media (max-width: 900px) { .why-grid { grid-template-columns: repeat(2, 1fr); } }
      @media (max-width: 560px) { .why-grid { grid-template-columns: 1fr; } }
    `}</style>
  </Section>
);

export default WhyHireMe;
