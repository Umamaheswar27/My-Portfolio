import React, { useState } from 'react';
import { C } from '../../constants/tokens';
import Section from '../ui/Section';
import { SectionTag, SectionTitle } from '../ui/Typography';

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/uma-maheswara-sai-danda', icon: 'in', desc: 'linkedin.com/in/uma-maheswara-sai-danda' },
  { label: 'GitHub',   href: 'https://github.com/uma-sai-danda',                    icon: 'gh', desc: 'github.com/uma-sai-danda' },
  { label: 'Email',    href: 'mailto:danda.ums09@gmail.com',                         icon: '✉',  desc: 'danda.ums09@gmail.com' },
  { label: 'Phone',    href: 'tel:+918639374798',                                    icon: '☎',  desc: '+91 8639374798' },
];

const inputStyle = {
  width: '100%', background: C.bg3, border: `0.5px solid ${C.border2}`,
  borderRadius: 8, padding: '10px 13px', color: C.text, fontSize: 13,
  outline: 'none', fontFamily: 'inherit', transition: 'border-color 0.2s',
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = e => { e.preventDefault(); setSent(true); };

  return (
    <Section id="contact">
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <SectionTag>Contact</SectionTag>
        <SectionTitle>Let's build something great</SectionTitle>
        <p style={{ fontSize: 15, color: C.muted, marginBottom: 36 }}>
          Open to full-time roles, contract work, and interesting engineering problems worth solving.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          {/* links */}
          <div>
            <p style={{ fontSize: 11, color: C.dim, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 14 }}>Find me at</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {links.map((l, i) => (
                <a key={i} href={l.href} target="_blank" rel="noreferrer" style={{
                  display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none',
                  background: C.bg2, border: `0.5px solid ${C.border}`, borderRadius: 10, padding: '12px 16px',
                  transition: 'border-color 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = C.blueBdr}
                  onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: C.blueDim, border: `0.5px solid ${C.blueBdr}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, color: C.blue, fontWeight: 700, flexShrink: 0 }}>
                    {l.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: C.text, marginBottom: 2 }}>{l.label}</div>
                    <div style={{ fontSize: 12, color: C.muted }}>{l.desc}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* form */}
          <div style={{ background: C.bg2, border: `0.5px solid ${C.border}`, borderRadius: 14, padding: 28 }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <div style={{ fontSize: 32, marginBottom: 12, color: C.cyan }}>✓</div>
                <div style={{ fontSize: 16, fontWeight: 600, color: C.text, marginBottom: 8 }}>Message sent!</div>
                <div style={{ fontSize: 13, color: C.muted }}>I'll get back to you within 24 hours.</div>
              </div>
            ) : (
              <form onSubmit={submit}>
                <p style={{ fontSize: 13, fontWeight: 600, color: C.text, marginBottom: 18 }}>Send a message</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 10 }}>
                  <input name="name" value={form.name} onChange={handle} placeholder="Your name" required style={inputStyle}
                    onFocus={e => e.target.style.borderColor = C.blue} onBlur={e => e.target.style.borderColor = C.border2} />
                  <input name="email" type="email" value={form.email} onChange={handle} placeholder="Email address" required style={inputStyle}
                    onFocus={e => e.target.style.borderColor = C.blue} onBlur={e => e.target.style.borderColor = C.border2} />
                </div>
                <input name="subject" value={form.subject} onChange={handle} placeholder="Subject" style={{ ...inputStyle, marginBottom: 10 }}
                  onFocus={e => e.target.style.borderColor = C.blue} onBlur={e => e.target.style.borderColor = C.border2} />
                <textarea name="message" value={form.message} onChange={handle} placeholder="Your message..." required rows={4}
                  style={{ ...inputStyle, resize: 'vertical', marginBottom: 14 }}
                  onFocus={e => e.target.style.borderColor = C.blue} onBlur={e => e.target.style.borderColor = C.border2} />
                <button type="submit" style={{
                  width: '100%', background: C.blue, color: '#fff',
                  border: 'none', borderRadius: 8, padding: '11px 0', fontSize: 13, fontWeight: 600,
                  cursor: 'pointer', transition: 'transform 0.15s, box-shadow 0.15s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(79,142,247,0.35)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
