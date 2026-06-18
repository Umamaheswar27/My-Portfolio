import React, { useState, useEffect } from 'react';
import { C } from '../../constants/tokens';

const links = ['About', 'Expertise', 'Experience', 'Projects', 'Skills'];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    links.forEach(l => {
      const el = document.getElementById(l.toLowerCase());
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: 62,
      background: scrolled ? 'rgba(8,9,14,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(18px)' : 'none',
      borderBottom: `0.5px solid ${scrolled ? C.border : 'transparent'}`,
      transition: 'background 0.35s ease, backdrop-filter 0.35s ease, border-color 0.35s ease',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
        <a href="#hero" style={{ textDecoration: 'none' }}>
          <span style={{ fontSize: 15, fontWeight: 700, color: C.text, letterSpacing: '0.02em' }}>
            UMS<span style={{ color: C.blue }}>.</span>
          </span>
        </a>

        {/* desktop */}
        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }} className="nav-desktop">
          {links.map(l => {
            const isActive = active === l.toLowerCase();
            return (
              <a key={l} href={`#${l.toLowerCase()}`}
                style={{
                  fontSize: 13, textDecoration: 'none', transition: 'color 0.2s',
                  color: isActive ? C.text : C.muted,
                  fontWeight: isActive ? 600 : 400,
                  position: 'relative',
                }}
                onMouseEnter={e => e.currentTarget.style.color = C.text}
                onMouseLeave={e => e.currentTarget.style.color = isActive ? C.text : C.muted}>
                {l}
                {isActive && (
                  <span style={{
                    position: 'absolute', bottom: -4, left: 0, right: 0,
                    height: 2, borderRadius: 2,
                    background: C.blue,
                  }} />
                )}
              </a>
            );
          })}
          <a href="#contact" style={{
            fontSize: 12, color: C.blue, border: `0.5px solid ${C.blueBdr}`,
            padding: '7px 18px', borderRadius: 6, textDecoration: 'none',
            background: C.blueDim, transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = C.blue; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = C.blueDim; e.currentTarget.style.color = C.blue; }}>
            Let's Connect
          </a>
        </div>

        {/* hamburger */}
        <button onClick={() => setOpen(!open)}
          style={{ display: 'none', background: 'none', border: 'none', color: C.muted, fontSize: 22, cursor: 'pointer' }}
          className="nav-burger">
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div style={{ background: C.bg2, borderTop: `0.5px solid ${C.border}`, padding: '16px 24px 20px' }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              style={{
                display: 'block', fontSize: 14, textDecoration: 'none',
                padding: '10px 0', borderBottom: `0.5px solid ${C.border}`,
                color: active === l.toLowerCase() ? C.blue : C.muted,
                fontWeight: active === l.toLowerCase() ? 600 : 400,
              }}>
              {l}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .nav-burger  { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
