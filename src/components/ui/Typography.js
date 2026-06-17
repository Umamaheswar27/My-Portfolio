import React from 'react';
import { C } from '../../constants/tokens';

export function SectionTag({ children }) {
  return (
    <p style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.blue, marginBottom: 10 }}>
      {children}
    </p>
  );
}

export function SectionTitle({ children, style }) {
  return (
    <h2 style={{ fontSize: 32, fontWeight: 600, color: C.text, lineHeight: 1.22, marginBottom: 12, ...style }}>
      {children}
    </h2>
  );
}

export function Chip({ children, accent }) {
  return (
    <span style={{
      fontSize: 11, padding: '3px 10px', borderRadius: 5,
      border: `0.5px solid ${accent ? C.blueBdr : C.border2}`,
      background: accent ? C.blueDim : C.bg3,
      color: accent ? C.blue : C.muted,
      display: 'inline-block', marginRight: 5, marginBottom: 5,
    }}>
      {children}
    </span>
  );
}
