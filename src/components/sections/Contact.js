import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { C } from '../../constants/tokens';
import Section from '../ui/Section';
import { SectionTag, SectionTitle } from '../ui/Typography';

const SERVICE_ID  = 'service_mdzvhgo';
const TEMPLATE_ID = 'template_tmbco5p';
const PUBLIC_KEY  = 'NlqqhoN3cbI1zbPsK';

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/uma-maheswara-sai-danda', icon: 'in', desc: 'linkedin.com/in/uma-maheswara-sai-danda' },
  { label: 'GitHub',   href: 'https://github.com/Umamaheswar27',                    icon: 'gh', desc: 'github.com/uma-maheswara-sai-danda' },
  { label: 'Email',    href: 'mailto:danda.ums09@gmail.com',                         icon: '✉',  desc: 'danda.ums09@gmail.com' },
  { label: 'Phone',    href: 'tel:+918639374798',                                    icon: '☎',  desc: '+91 8639374798' },
];

const inputStyle = (hasError) => ({
  width: '100%', background: C.bg3,
  border: `0.5px solid ${hasError ? '#f87171' : C.border2}`,
  borderRadius: 8, padding: '10px 13px', color: C.text, fontSize: 13,
  outline: 'none', fontFamily: 'inherit', transition: 'border-color 0.2s',
});

const validate = ({ name, email, message }) => {
  const errors = {};
  if (!name.trim())                              errors.name    = 'Name is required';
  if (!email.trim())                             errors.email   = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Enter a valid email';
  if (!message.trim())                           errors.message = 'Message is required';
  return errors;
};

const Contact = () => {
  const [form,   setForm]   = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handle = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }));
  };

  const submit = e => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus('sending');

    // Using emailjs.send() with explicit params guarantees
    // from_name and from_email are passed correctly regardless
    // of HTML input name attributes.
    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name:  form.name.trim(),
        from_email: form.email.trim(),
        message:    form.message.trim(),
      },
      PUBLIC_KEY
    )
      .then(() => {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
        setErrors({});
      })
      .catch(() => setStatus('error'));
  };

  return (
    <Section id="contact">
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <SectionTag>Contact</SectionTag>
        <SectionTitle>Let's build something great</SectionTitle>
        <p style={{ fontSize: 15, color: C.muted, marginBottom: 36 }}>
          Open to full-time roles, contract work, and interesting engineering problems worth solving.
        </p>

        <div className="contact-grid">
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
            {status === 'sent' ? (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <div style={{ fontSize: 32, marginBottom: 12, color: C.cyan }}>✓</div>
                <div style={{ fontSize: 16, fontWeight: 600, color: C.text, marginBottom: 8 }}>Message sent!</div>
                <div style={{ fontSize: 13, color: C.muted, marginBottom: 16 }}>I'll get back to you within 24 hours.</div>
                <button onClick={() => setStatus('idle')} style={{
                  fontSize: 12, color: C.blue, background: C.blueDim,
                  border: `0.5px solid ${C.blueBdr}`, borderRadius: 6,
                  padding: '7px 16px', cursor: 'pointer',
                }}>Send another message</button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <p style={{ fontSize: 13, fontWeight: 600, color: C.text, marginBottom: 18 }}>Send a message</p>

                <div className="contact-form-row">
                  <div>
                    <input
                      name="name" value={form.name} onChange={handle}
                      placeholder="Your name" style={inputStyle(!!errors.name)}
                      onFocus={e => e.target.style.borderColor = C.blue}
                      onBlur={e => e.target.style.borderColor = errors.name ? '#f87171' : C.border2} />
                    {errors.name && <p style={{ fontSize: 11, color: '#f87171', marginTop: 4 }}>{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      name="email" type="email" value={form.email} onChange={handle}
                      placeholder="Email address" style={inputStyle(!!errors.email)}
                      onFocus={e => e.target.style.borderColor = C.blue}
                      onBlur={e => e.target.style.borderColor = errors.email ? '#f87171' : C.border2} />
                    {errors.email && <p style={{ fontSize: 11, color: '#f87171', marginTop: 4 }}>{errors.email}</p>}
                  </div>
                </div>

                <div style={{ marginBottom: 10 }}>
                  <textarea
                    name="message" value={form.message} onChange={handle}
                    placeholder="Your message..." rows={5}
                    style={{ ...inputStyle(!!errors.message), resize: 'vertical', marginBottom: 0 }}
                    onFocus={e => e.target.style.borderColor = C.blue}
                    onBlur={e => e.target.style.borderColor = errors.message ? '#f87171' : C.border2} />
                  {errors.message && <p style={{ fontSize: 11, color: '#f87171', marginTop: 4 }}>{errors.message}</p>}
                </div>

                {status === 'error' && (
                  <div style={{ fontSize: 12, color: '#f87171', background: 'rgba(248,113,113,0.08)', border: '0.5px solid rgba(248,113,113,0.3)', borderRadius: 6, padding: '8px 12px', marginBottom: 12 }}>
                    ⚠ Something went wrong. Please try again or email me directly.
                  </div>
                )}

                <button type="submit" disabled={status === 'sending'} style={{
                  width: '100%', background: C.blue, color: '#fff',
                  border: 'none', borderRadius: 8, padding: '11px 0', fontSize: 13, fontWeight: 600,
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  opacity: status === 'sending' ? 0.7 : 1,
                  transition: 'transform 0.15s, box-shadow 0.15s',
                }}
                  onMouseEnter={e => { if (status !== 'sending') { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(79,142,247,0.35)'; } }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                  {status === 'sending' ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
        .contact-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 10px; }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; gap: 24px; }
          .contact-form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </Section>
  );
};

export default Contact;
