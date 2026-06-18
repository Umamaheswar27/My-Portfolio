import React, { useState, useEffect } from 'react';
import { C } from '../../constants/tokens';

const roles = [
  'Spring Boot Architect',
  'Microservices Engineer',
  'Real-Time Systems Dev',
  'Event-Driven Builder',
];

const stats = [
  { n: '2+',  l: 'Years Experience' },
  { n: '5+',  l: 'Projects Delivered' },
  { n: '40%', l: 'Avg. Efficiency Gain' },
  { n: '10+', l: 'Core Technologies' },
];

const Hero = () => {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick(t => (t + 1) % roles.length), 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* ambient glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 400, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(79,142,247,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', width: '100%', paddingTop: 100 }}>
        {/* availability badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          border: `0.5px solid ${C.blueBdr}`, background: C.blueDim,
          padding: '6px 14px', borderRadius: 20, marginBottom: 28,
        }}>
          <span style={{ width: 7, height: 7, background: '#22c55e', borderRadius: '50%', boxShadow: '0 0 6px #22c55e' }} />
          <span style={{ fontSize: 12, color: C.blue }}>Available for new opportunities</span>
        </div>

        <h1 style={{ fontSize: 'clamp(32px, 5.5vw, 58px)', fontWeight: 700, color: C.text, lineHeight: 1.12, marginBottom: 12, maxWidth: 780 }}>
          Building Scalable Backend<br />
          Systems &amp;{' '}
          <span style={{ color: C.blue }}>Real-Time Applications</span>
        </h1>

        {/* animated role */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
          <span style={{ fontSize: 14, color: C.dim }}>Currently:</span>
          <span key={tick} style={{ fontSize: 14, color: C.cyan, fontWeight: 500, animation: 'fadeSlideIn 0.5s ease' }}>
            {roles[tick]}
          </span>
        </div>

        <p style={{ fontSize: 16, color: C.muted, lineHeight: 1.75, maxWidth: 580, marginBottom: 36 }}>
          Full Stack Java Developer with expertise in Spring Boot, Angular, Microservices, Event-Driven Architecture, and Secure Enterprise Solutions.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 56 }}>
          <a href="#projects" style={{
            fontSize: 13, color: '#fff', background: C.blue,
            padding: '11px 24px', borderRadius: 7, textDecoration: 'none', fontWeight: 500,
            transition: 'transform 0.15s, box-shadow 0.15s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(79,142,247,0.35)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
            View Projects
          </a>
          <a href="https://drive.google.com/file/d/1rxCaohRti3uAkSc07NZZUAVoR6frivXX/view?usp=sharing" target="_blank" rel="noreferrer" style={{
            fontSize: 13, color: C.text, border: `0.5px solid ${C.border2}`,
            padding: '11px 24px', borderRadius: 7, textDecoration: 'none',
            background: C.bg2, transition: 'border-color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = C.blue}
            onMouseLeave={e => e.currentTarget.style.borderColor = C.border2}>
            View Resume
          </a>
          <a href="#contact" style={{
            fontSize: 13, color: C.muted, border: `0.5px solid ${C.border}`,
            padding: '11px 24px', borderRadius: 7, textDecoration: 'none', transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.color = C.text}
            onMouseLeave={e => e.currentTarget.style.color = C.muted}>
            Let's Connect →
          </a>
        </div>

        {/* stat bar */}
        <div className="hero-stats">
          {stats.map((s, i) => (
            <div key={i} className="hero-stat-item" style={{
              flex: 1, paddingRight: 24,
              borderRight: i < stats.length - 1 ? `0.5px solid ${C.border}` : 'none',
              marginRight: i < stats.length - 1 ? 24 : 0,
            }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: C.text, fontVariantNumeric: 'tabular-nums' }}>{s.n}</div>
              <div style={{ fontSize: 12, color: C.dim, marginTop: 3 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-stats { display: flex; gap: 0; border-top: 0.5px solid ${C.border}; padding-top: 28px; }
        @media (max-width: 480px) {
          .hero-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; border-top: 0.5px solid ${C.border}; padding-top: 20px; }
          .hero-stat-item { padding-right: 0 !important; margin-right: 0 !important; border-right: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
