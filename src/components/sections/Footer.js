import React from 'react';
import { C } from '../../constants/tokens';

const footerLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/uma-maheswara-sai-danda' },
  { label: 'GitHub',   href: 'https://github.com/Umamaheswar27' },
  { label: 'Email',    href: 'mailto:danda.ums09@gmail.com' },
];

const Footer = () => (
  <footer style={{
    borderTop: `0.5px solid ${C.border}`, padding: '24px 24px',
    maxWidth: 1100, margin: '0 auto',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12,
  }}>
    <div>
      <div style={{ fontSize: 13, fontWeight: 600, color: C.text, marginBottom: 3 }}>Uma Maheswara Sai Danda</div>
      <div style={{ fontSize: 11, color: C.dim }}>© {new Date().getFullYear()} · Java Full Stack Engineer · Hyderabad, India</div>
    </div>
    <div style={{ display: 'flex', gap: 20 }}>
      {footerLinks.map((l, i) => (
        <a key={i} href={l.href} target="_blank" rel="noreferrer"
          style={{ fontSize: 12, color: C.dim, textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => e.target.style.color = C.text}
          onMouseLeave={e => e.target.style.color = C.dim}>
          {l.label}
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;
