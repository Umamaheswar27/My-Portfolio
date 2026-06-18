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
    <span style={{ fontSize: 12, color: C.dim }}>© 2026 Uma Maheswara Sai Danda. All rights reserved.</span>
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
