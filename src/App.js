import { useState, useEffect, useRef } from "react";

/* ─── DESIGN TOKENS ─────────────────────────────────────────── */
const C = {
  bg:       "#08090e",
  bg2:      "#0d0f1a",
  bg3:      "#111524",
  border:   "#1a1d2e",
  border2:  "#252840",
  text:     "#f0f4ff",
  muted:    "#8892b0",
  dim:      "#4a5270",
  blue:     "#4f8ef7",
  blueDim:  "rgba(79,142,247,0.12)",
  blueBdr:  "rgba(79,142,247,0.3)",
  cyan:     "#22d3ee",
  cyanDim:  "rgba(34,211,238,0.09)",
  cyanBdr:  "rgba(34,211,238,0.25)",
  violet:   "#a78bfa",
  violetDim:"rgba(167,139,250,0.09)",
};

/* ─── ANIMATION HOOK ─────────────────────────────────────────── */
function useFadeIn() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); ob.disconnect(); } }, { threshold: 0.12 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);
  return [ref, vis];
}

/* ─── SECTION WRAPPER ────────────────────────────────────────── */
function Section({ id, children, style }) {
  const [ref, vis] = useFadeIn();
  return (
    <section id={id} ref={ref} style={{
      padding: "88px 0",
      opacity: vis ? 1 : 0,
      transform: vis ? "translateY(0)" : "translateY(28px)",
      transition: "opacity 0.65s ease, transform 0.65s ease",
      ...style
    }}>
      {children}
    </section>
  );
}

/* ─── TAG HELPERS ────────────────────────────────────────────── */
function SectionTag({ children }) {
  return (
    <p style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: C.blue, marginBottom: 10 }}>
      {children}
    </p>
  );
}

function SectionTitle({ children, style }) {
  return (
    <h2 style={{ fontSize: 32, fontWeight: 600, color: C.text, lineHeight: 1.22, marginBottom: 12, ...style }}>
      {children}
    </h2>
  );
}

function Chip({ children, accent }) {
  return (
    <span style={{
      fontSize: 11, padding: "3px 10px", borderRadius: 5,
      border: `0.5px solid ${accent ? C.blueBdr : C.border2}`,
      background: accent ? C.blueDim : C.bg3,
      color: accent ? C.blue : C.muted,
      display: "inline-block", marginRight: 5, marginBottom: 5,
    }}>{children}</span>
  );
}

/* ─── NAV ────────────────────────────────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = ["About","Experience","Projects","Skills","Contact"];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(8,9,14,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(18px)" : "none",
      borderBottom: scrolled ? `0.5px solid ${C.border}` : "none",
      transition: "all 0.35s ease",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 62 }}>
        <a href="#hero" style={{ textDecoration: "none" }}>
          <span style={{ fontSize: 15, fontWeight: 700, color: C.text, letterSpacing: "0.02em" }}>
            UMS<span style={{ color: C.blue }}>.</span>
          </span>
        </a>

        {/* desktop links */}
        <div style={{ display: "flex", gap: 28, alignItems: "center" }} className="nav-desktop">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{ fontSize: 13, color: C.muted, textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = C.text}
              onMouseLeave={e => e.target.style.color = C.muted}>
              {l}
            </a>
          ))}
          <a href="mailto:danda.ums09@gmail.com" style={{
            fontSize: 12, color: C.blue, border: `0.5px solid ${C.blueBdr}`,
            padding: "7px 18px", borderRadius: 6, textDecoration: "none",
            background: C.blueDim, transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.target.style.background = C.blue; e.target.style.color = "#fff"; }}
            onMouseLeave={e => { e.target.style.background = C.blueDim; e.target.style.color = C.blue; }}>
            Let's Connect
          </a>
        </div>

        {/* hamburger */}
        <button onClick={() => setOpen(!open)} style={{ display: "none", background: "none", border: "none", color: C.muted, fontSize: 22, cursor: "pointer" }} className="nav-burger">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div style={{ background: C.bg2, borderTop: `0.5px solid ${C.border}`, padding: "16px 24px 20px" }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              style={{ display: "block", fontSize: 14, color: C.muted, textDecoration: "none", padding: "10px 0", borderBottom: `0.5px solid ${C.border}` }}>
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ─── HERO ───────────────────────────────────────────────────── */
function Hero() {
  const [tick, setTick] = useState(0);
  const roles = [
    "Spring Boot Architect",
    "Microservices Engineer",
    "Real-Time Systems Dev",
    "Event-Driven Builder",
  ];
  useEffect(() => {
    const id = setInterval(() => setTick(t => (t + 1) % roles.length), 2800);
    return () => clearInterval(id);
  }, []);

  const stats = [
    { n: "2+", l: "Years Experience" },
    { n: "5+", l: "Projects Delivered" },
    { n: "40%", l: "Avg. Efficiency Gain" },
    { n: "10+", l: "Core Technologies" },
  ];

  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
      {/* ambient glow */}
      <div style={{
        position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)",
        width: 600, height: 400, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(79,142,247,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", width: "100%", paddingTop: 100 }}>
        {/* availability badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          border: `0.5px solid ${C.blueBdr}`, background: C.blueDim,
          padding: "6px 14px", borderRadius: 20, marginBottom: 28,
        }}>
          <span style={{ width: 7, height: 7, background: "#22c55e", borderRadius: "50%", boxShadow: "0 0 6px #22c55e" }} />
          <span style={{ fontSize: 12, color: C.blue }}>Available for new opportunities</span>
        </div>

        <h1 style={{ fontSize: "clamp(32px, 5.5vw, 58px)", fontWeight: 700, color: C.text, lineHeight: 1.12, marginBottom: 12, maxWidth: 780 }}>
          Building Scalable Backend<br />
          Systems &{" "}
          <span style={{ color: C.blue, display: "inline-block" }}>
            Real-Time Applications
          </span>
        </h1>

        {/* animated sub role */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
          <span style={{ fontSize: 14, color: C.dim }}>Currently:</span>
          <span key={tick} style={{
            fontSize: 14, color: C.cyan, fontWeight: 500,
            animation: "fadeSlideIn 0.5s ease",
          }}>{roles[tick]}</span>
        </div>

        <p style={{ fontSize: 16, color: C.muted, lineHeight: 1.75, maxWidth: 580, marginBottom: 36 }}>
          Full Stack Java Developer with expertise in Spring Boot, Angular, Microservices, Event-Driven Architecture, and Secure Enterprise Solutions.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 56 }}>
          <a href="#projects" style={{
            fontSize: 13, color: "#fff", background: C.blue,
            padding: "11px 24px", borderRadius: 7, textDecoration: "none", fontWeight: 500,
            transition: "transform 0.15s, box-shadow 0.15s",
          }}
            onMouseEnter={e => { e.target.style.transform = "translateY(-1px)"; e.target.style.boxShadow = "0 8px 24px rgba(79,142,247,0.35)"; }}
            onMouseLeave={e => { e.target.style.transform = ""; e.target.style.boxShadow = ""; }}>
            View Projects
          </a>
          <a href="https://drive.google.com/file/d/1vh85SYVeiYq8Egg8Cnx2ZCCXvU0FAi1J/view?usp=sharing" target="_blank" rel="noreferrer" style={{
            fontSize: 13, color: C.text, border: `0.5px solid ${C.border2}`,
            padding: "11px 24px", borderRadius: 7, textDecoration: "none",
            background: C.bg2, transition: "border-color 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = C.blue}
            onMouseLeave={e => e.currentTarget.style.borderColor = C.border2}>
            Download Resume
          </a>
          <a href="#contact" style={{
            fontSize: 13, color: C.muted, border: `0.5px solid ${C.border}`,
            padding: "11px 24px", borderRadius: 7, textDecoration: "none",
            transition: "color 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.color = C.text}
            onMouseLeave={e => e.currentTarget.style.color = C.muted}>
            Let's Connect →
          </a>
        </div>

        {/* stat bar */}
        <div style={{ display: "flex", gap: 0, borderTop: `0.5px solid ${C.border}`, paddingTop: 28 }}>
          {stats.map((s, i) => (
            <div key={i} style={{ flex: 1, paddingRight: 24, borderRight: i < stats.length - 1 ? `0.5px solid ${C.border}` : "none", marginRight: i < stats.length - 1 ? 24 : 0 }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: C.text, fontVariantNumeric: "tabular-nums" }}>{s.n}</div>
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
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .nav-burger  { display: block !important; }
        }
      `}</style>
    </section>
  );
}

/* ─── ABOUT ──────────────────────────────────────────────────── */
function About() {
  const facts = [
    { label: "Degree", value: "B.Tech · VVIT Guntur" },
    { label: "Current Role", value: "Software Engineer @ SNAD Dev" },
    { label: "Specialisation", value: "Microservices · Real-Time · Security" },
    { label: "Location", value: "Hyderabad, India · Remote-Ready" },
    { label: "Education", value: "Aug 2019 – Jun 2023" },
    { label: "Status", value: "Open to Full-Time & Remote Roles" },
  ];

  return (
    <Section id="about">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <SectionTag>About Me</SectionTag>
        <SectionTitle>Engineer who builds for scale,<br />not just for today</SectionTitle>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
          <div>
            <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.85, marginBottom: 18 }}>
              I'm a B.Tech graduate turned full-stack engineer who specialises in production-grade Java systems that survive traffic spikes, distributed failures, and enterprise complexity.
            </p>
            <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.85, marginBottom: 18 }}>
              At SNAD Developers, I've shipped microservice architectures, real-time WebSocket ride-booking platforms, and event-driven RabbitMQ pipelines — all in production, not just in demos.
            </p>
            <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.85 }}>
              I care deeply about maintainability, measurable performance, and secure design — writing code that teammates can read, extend, and trust six months after delivery.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {facts.map((f, i) => (
              <div key={i} style={{
                background: C.bg2, border: `0.5px solid ${C.border}`,
                borderRadius: 10, padding: "14px 16px",
              }}>
                <div style={{ fontSize: 11, color: C.dim, marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.08em" }}>{f.label}</div>
                <div style={{ fontSize: 13, color: C.text, fontWeight: 500 }}>{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─── EXPERIENCE ─────────────────────────────────────────────── */
function Experience() {
  const achievements = [
    { metric: "40–50%", desc: "Scalability gain via RabbitMQ event-driven async workflows" },
    { metric: "40%", desc: "Reduction in API polling through WebSocket real-time communication" },
    { metric: "25–30%", desc: "API response time improvement via PostgreSQL query & index optimisation" },
    { metric: "End-to-End", desc: "Ownership across ride-booking and enterprise data migration domains" },
    { metric: "Multi-role", desc: "OAuth 2.0 + RBAC secure authentication & authorisation systems" },
    { metric: "Modular", desc: "Spring Boot microservices following clean, maintainable architecture principles" },
  ];

  const stack = ["Java", "Spring Boot", "Angular", "TypeScript", "RabbitMQ", "WebSocket", "PostgreSQL", "OAuth 2.0", "RBAC", "JWT", "Hibernate/JPA", "REST APIs", "Git", "Maven", "Docker", "AWS", "CI/CD", "Agile/Scrum"];

  return (
    <Section id="experience">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <SectionTag>Experience</SectionTag>
        <SectionTitle>Where I've shipped real things</SectionTitle>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          {/* timeline card */}
          <div style={{ background: C.bg2, border: `0.5px solid ${C.border}`, borderRadius: 14, padding: 28, position: "relative", overflow: "hidden" }}>
            {/* blue top accent */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${C.blue}, ${C.cyan})` }} />

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
              <div>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: C.text, marginBottom: 3 }}>Software Engineer</h3>
                <div style={{ fontSize: 13, color: C.blue, fontWeight: 500, marginBottom: 5 }}>SNAD Developers</div>
                <div style={{ fontSize: 11, color: C.dim }}>Hyderabad, Telangana</div>
              </div>
              <div style={{ fontSize: 11, color: C.cyan, background: C.cyanDim, border: `0.5px solid ${C.cyanBdr}`, padding: "4px 10px", borderRadius: 20 }}>
                Apr 2024 – May 2026
              </div>
            </div>

            <div style={{ margin: "18px 0", borderTop: `0.5px solid ${C.border}` }} />

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {achievements.map((a, i) => (
                <div key={i} style={{ background: C.bg3, border: `0.5px solid ${C.border}`, borderRadius: 8, padding: "10px 12px" }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: C.blue, marginBottom: 4 }}>{a.metric}</div>
                  <div style={{ fontSize: 11, color: C.muted, lineHeight: 1.5 }}>{a.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* skills used */}
          <div>
            <p style={{ fontSize: 13, color: C.dim, marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.08em" }}>Technologies used</p>
            <div style={{ marginBottom: 28 }}>
              {stack.map((s, i) => <Chip key={i}>{s}</Chip>)}
            </div>

            <div style={{ background: C.bg2, border: `0.5px solid ${C.border}`, borderRadius: 10, padding: "16px 18px" }}>
              <p style={{ fontSize: 12, color: C.dim, marginBottom: 10 }}>KEY RESPONSIBILITIES</p>
              {[
                "Delivered production-grade full-stack applications with end-to-end feature ownership",
                "Designed modular Spring Boot microservices architecture",
                "Built event-driven async workflows using RabbitMQ",
                "Implemented real-time WebSocket communication layer",
                "Optimised PostgreSQL queries and indexing strategies",
                "Built OAuth 2.0 + RBAC multi-role security systems",
                "Collaborated in Agile/Scrum cross-functional teams",
              ].map((r, i) => (
                <div key={i} style={{ display: "flex", gap: 10, marginBottom: 9 }}>
                  <span style={{ color: C.blue, fontSize: 14, flexShrink: 0, marginTop: 1 }}>›</span>
                  <span style={{ fontSize: 13, color: C.muted, lineHeight: 1.5 }}>{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─── PROJECTS ───────────────────────────────────────────────── */
function Projects() {
  const [active, setActive] = useState(0);

  const projects = [
    {
      tag: "Real-Time Platform",
      name: "VALAM",
      subtitle: "Real-Time Ride Booking Platform",
      color: C.blue,
      colorDim: C.blueDim,
      colorBdr: C.blueBdr,
      problem: "Needed live driver tracking, ride status synchronisation, and scalable user workflows for a ride-booking platform — all in real time.",
      solution: "Built full-stack with Angular + Spring Boot, using WebSocket for bidirectional real-time communication and Google Maps API for geolocation tracking.",
      stack: ["Angular", "Spring Boot", "WebSocket", "Google Maps API", "PostgreSQL", "OAuth 2.0", "RBAC", "Java"],
      arch: [
        { label: "Angular UI", color: C.blue, bdr: C.blueBdr, dim: C.blueDim },
        { label: "WebSocket Gateway", color: C.cyan, bdr: C.cyanBdr, dim: C.cyanDim },
        { label: "Spring Boot", color: C.violet, bdr: "rgba(167,139,250,0.3)", dim: C.violetDim },
        { label: "PostgreSQL", color: C.blue, bdr: C.blueBdr, dim: C.blueDim },
      ],
      impact: [
        { n: "40%", l: "API polling reduced" },
        { n: "Live", l: "Driver tracking" },
        { n: "Real-time", l: "Status updates" },
        { n: "Secure", l: "OAuth 2.0 + RBAC" },
      ],
      bullets: [
        "Engineered scalable full-stack features with live ride tracking",
        "WebSocket for driver tracking, ride updates & status sync",
        "Google Maps API for route visualisation & geolocation",
        "Secure RESTful APIs with OAuth-based authentication",
        "RBAC authorisation for multi-role user access management",
      ],
    },
    {
      tag: "Enterprise Platform",
      name: "AECCAR",
      subtitle: "Oracle Data Migration Tool",
      color: C.violet,
      colorDim: C.violetDim,
      colorBdr: "rgba(167,139,250,0.3)",
      problem: "Complex enterprise-scale Oracle data migration requiring multi-stage validation, file mapping, and error correction — all done manually.",
      solution: "Built Angular + Spring Boot platform invoking Oracle stored procedures, with automated pipelines for upload → map → validate → migrate workflows.",
      stack: ["Angular", "Spring Boot", "Oracle", "PL/SQL Procedures", "RBAC", "Java", "PostgreSQL"],
      arch: [
        { label: "Angular UI", color: C.violet, bdr: "rgba(167,139,250,0.3)", dim: C.violetDim },
        { label: "Spring Boot API", color: C.blue, bdr: C.blueBdr, dim: C.blueDim },
        { label: "RabbitMQ", color: C.cyan, bdr: C.cyanBdr, dim: C.cyanDim },
        { label: "Oracle DB", color: C.violet, bdr: "rgba(167,139,250,0.3)", dim: C.violetDim },
      ],
      impact: [
        { n: "Auto", l: "Migration workflows" },
        { n: "↓", l: "Manual intervention" },
        { n: "Multi-stage", l: "Validation pipeline" },
        { n: "Secure", l: "RBAC access control" },
      ],
      bullets: [
        "Spring Boot APIs invoking Oracle stored procedures for enterprise migration",
        "Handled data validation across multi-stage migration pipelines",
        "File upload → mapping → validation → error correction workflow",
        "Environment-based controls and RBAC secure access",
        "Reduced manual effort by 40–50% via async event-driven processing",
      ],
    },
  ];

  const p = projects[active];

  return (
    <Section id="projects">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <SectionTag>Projects</SectionTag>
        <SectionTitle>Case studies in scalable engineering</SectionTitle>

        {/* tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 28 }}>
          {projects.map((pr, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              fontSize: 13, fontWeight: 500,
              padding: "9px 20px", borderRadius: 7, cursor: "pointer",
              border: active === i ? `0.5px solid ${pr.color}` : `0.5px solid ${C.border}`,
              background: active === i ? (i === 0 ? C.blueDim : C.violetDim) : C.bg2,
              color: active === i ? pr.color : C.muted,
              transition: "all 0.2s",
            }}>
              {pr.name}
              <span style={{ fontSize: 11, marginLeft: 7, opacity: 0.6 }}>{pr.tag}</span>
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {/* left: overview */}
          <div style={{ background: C.bg2, border: `0.5px solid ${C.border}`, borderRadius: 14, padding: 28, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: p.color }} />
            <div style={{ fontSize: 11, color: p.color, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>{p.tag}</div>
            <h3 style={{ fontSize: 22, fontWeight: 700, color: C.text, marginBottom: 4 }}>{p.name}</h3>
            <p style={{ fontSize: 13, color: C.muted, marginBottom: 20 }}>{p.subtitle}</p>

            <div style={{ marginBottom: 18 }}>
              <p style={{ fontSize: 11, color: C.dim, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 7 }}>Problem</p>
              <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.7 }}>{p.problem}</p>
            </div>
            <div style={{ marginBottom: 20 }}>
              <p style={{ fontSize: 11, color: C.dim, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 7 }}>Solution</p>
              <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.7 }}>{p.solution}</p>
            </div>

            {/* stack */}
            <div>
              {p.stack.map((s, i) => <Chip key={i}>{s}</Chip>)}
            </div>
          </div>

          {/* right: arch + impact */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* architecture flow */}
            <div style={{ background: C.bg2, border: `0.5px solid ${C.border}`, borderRadius: 14, padding: 22 }}>
              <p style={{ fontSize: 11, color: C.dim, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14 }}>Architecture flow</p>
              <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                {p.arch.map((node, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <div style={{
                      fontSize: 11, padding: "6px 12px", borderRadius: 6,
                      color: node.color, background: node.dim, border: `0.5px solid ${node.bdr}`,
                      fontWeight: 500,
                    }}>{node.label}</div>
                    {i < p.arch.length - 1 && <span style={{ color: C.border2, fontSize: 14 }}>→</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* impact grid */}
            <div style={{ background: C.bg2, border: `0.5px solid ${C.border}`, borderRadius: 14, padding: 22 }}>
              <p style={{ fontSize: 11, color: C.dim, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14 }}>Impact</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {p.impact.map((imp, i) => (
                  <div key={i} style={{ background: C.bg3, border: `0.5px solid ${C.border}`, borderRadius: 8, padding: "10px 12px", textAlign: "center" }}>
                    <div style={{ fontSize: 20, fontWeight: 700, color: p.color, marginBottom: 3 }}>{imp.n}</div>
                    <div style={{ fontSize: 11, color: C.dim }}>{imp.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* bullets */}
            <div style={{ background: C.bg2, border: `0.5px solid ${C.border}`, borderRadius: 14, padding: 22 }}>
              <p style={{ fontSize: 11, color: C.dim, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>What I built</p>
              {p.bullets.map((b, i) => (
                <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8 }}>
                  <span style={{ color: p.color, fontSize: 14, flexShrink: 0, marginTop: 1 }}>›</span>
                  <span style={{ fontSize: 13, color: C.muted, lineHeight: 1.5 }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─── SKILLS ─────────────────────────────────────────────────── */
function Skills() {
  const groups = [
    { title: "Backend Engineering", icon: "⚙", items: ["Java", "Spring Boot", "Hibernate/JPA", "REST APIs", "Microservices", "Spring Security"] },
    { title: "Frontend", icon: "🖥", items: ["Angular", "TypeScript", "PrimeNG", "HTML", "CSS"] },
    { title: "Databases", icon: "🗄", items: ["PostgreSQL", "MySQL", "Oracle", "Query Optimisation", "Indexing"] },
    { title: "Messaging & Real-Time", icon: "⚡", items: ["RabbitMQ", "WebSocket", "Event-Driven Architecture", "Async Workflows"] },
    { title: "Security", icon: "🔐", items: ["OAuth 2.0", "JWT Authentication", "RBAC", "Spring Security"] },
    { title: "Cloud & DevOps", icon: "☁", items: ["AWS", "Docker (Basics)", "CI/CD", "Azure Fundamentals", "Git", "Maven", "Postman"] },
  ];

  return (
    <Section id="skills">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <SectionTag>Skills</SectionTag>
        <SectionTitle>Technology stack</SectionTitle>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
          {groups.map((g, i) => (
            <div key={i} style={{
              background: C.bg2, border: `0.5px solid ${C.border}`,
              borderRadius: 12, padding: "18px 20px",
              transition: "border-color 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = C.blueBdr}
              onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
              <div style={{ fontSize: 11, color: C.blue, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10, fontWeight: 600 }}>
                {g.title}
              </div>
              <div>
                {g.items.map((s, j) => <Chip key={j}>{s}</Chip>)}
              </div>
            </div>
          ))}
        </div>

        {/* tools row */}
        <div style={{ marginTop: 14, background: C.bg2, border: `0.5px solid ${C.border}`, borderRadius: 12, padding: "16px 20px", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <span style={{ fontSize: 11, color: C.dim, textTransform: "uppercase", letterSpacing: "0.08em", flexShrink: 0 }}>Tools & Practices</span>
          {["Git", "Maven", "Postman", "Agile/Scrum", "Code Review", "Docker"].map((t, i) => <Chip key={i}>{t}</Chip>)}
        </div>
      </div>
    </Section>
  );
}

/* ─── WHY HIRE ME ─────────────────────────────────────────────── */
function WhyHireMe() {
  const items = [
    { title: "Microservices Architecture", desc: "Designed and shipped modular Spring Boot microservices in real production environments." },
    { title: "Real-Time Systems", desc: "Implemented WebSocket-based bidirectional communication reducing API polling by 40%." },
    { title: "Event-Driven Design", desc: "Built RabbitMQ async workflows improving throughput and scalability by 40–50%." },
    { title: "Enterprise Development", desc: "Delivered end-to-end features across ride-booking and Oracle data migration platforms." },
    { title: "Secure Application Design", desc: "Implemented OAuth 2.0, JWT, and RBAC across multi-role production applications." },
    { title: "Performance Optimisation", desc: "Improved API response times 25–30% through PostgreSQL query tuning and indexing." },
    { title: "Full Stack Delivery", desc: "Java backend + Angular frontend — own the whole feature from DB schema to UI." },
    { title: "Production-Grade Quality", desc: "Write clean, maintainable code that teammates can extend with confidence." },
    { title: "Agile Collaboration", desc: "Experienced in cross-functional Agile/Scrum teams with strong communication skills." },
  ];

  return (
    <Section id="why">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <SectionTag>Why Hire Me</SectionTag>
        <SectionTitle>What I bring to your team</SectionTitle>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
          {items.map((it, i) => (
            <div key={i} style={{
              background: C.bg2, border: `0.5px solid ${C.border}`,
              borderRadius: 12, padding: "16px 18px",
              display: "flex", gap: 12, alignItems: "flex-start",
              transition: "border-color 0.2s, transform 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.cyanBdr; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = ""; }}>
              <span style={{ color: C.cyan, fontSize: 16, flexShrink: 0, marginTop: 2 }}>✓</span>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: C.text, marginBottom: 5 }}>{it.title}</div>
                <div style={{ fontSize: 12, color: C.muted, lineHeight: 1.6 }}>{it.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─── CONTACT ────────────────────────────────────────────────── */
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const links = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/uma-maheswara-sai-danda", icon: "in", desc: "linkedin.com/in/uma-maheswara-sai-danda" },
    { label: "GitHub", href: "https://github.com/uma-sai-danda", icon: "gh", desc: "github.com/uma-sai-danda" },
    { label: "Email", href: "mailto:danda.ums09@gmail.com", icon: "✉", desc: "danda.ums09@gmail.com" },
    { label: "Phone", href: "tel:+918639374798", icon: "☎", desc: "+91 8639374798" },
  ];

  const inputStyle = {
    width: "100%", background: C.bg3, border: `0.5px solid ${C.border2}`,
    borderRadius: 8, padding: "10px 13px", color: C.text, fontSize: 13,
    outline: "none", fontFamily: "inherit", transition: "border-color 0.2s",
  };

  return (
    <Section id="contact">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <SectionTag>Contact</SectionTag>
        <SectionTitle>Let's build something great</SectionTitle>
        <p style={{ fontSize: 15, color: C.muted, marginBottom: 36 }}>
          Open to full-time roles, contract work, and interesting engineering problems worth solving.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          {/* links */}
          <div>
            <p style={{ fontSize: 11, color: C.dim, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14 }}>Find me at</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
              {links.map((l, i) => (
                <a key={i} href={l.href} target="_blank" rel="noreferrer" style={{
                  display: "flex", alignItems: "center", gap: 14, textDecoration: "none",
                  background: C.bg2, border: `0.5px solid ${C.border}`, borderRadius: 10, padding: "12px 16px",
                  transition: "border-color 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = C.blueBdr}
                  onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: C.blueDim, border: `0.5px solid ${C.blueBdr}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, color: C.blue, fontWeight: 700, flexShrink: 0 }}>
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
              <div style={{ textAlign: "center", padding: "32px 0" }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>✓</div>
                <div style={{ fontSize: 16, fontWeight: 600, color: C.text, marginBottom: 8 }}>Message sent!</div>
                <div style={{ fontSize: 13, color: C.muted }}>I'll get back to you within 24 hours.</div>
              </div>
            ) : (
              <form onSubmit={submit}>
                <p style={{ fontSize: 13, fontWeight: 600, color: C.text, marginBottom: 18 }}>Send a message</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
                  <input name="name" value={form.name} onChange={handle} placeholder="Your name" required style={inputStyle}
                    onFocus={e => e.target.style.borderColor = C.blue} onBlur={e => e.target.style.borderColor = C.border2} />
                  <input name="email" type="email" value={form.email} onChange={handle} placeholder="Email address" required style={inputStyle}
                    onFocus={e => e.target.style.borderColor = C.blue} onBlur={e => e.target.style.borderColor = C.border2} />
                </div>
                <input name="subject" value={form.subject} onChange={handle} placeholder="Subject" style={{ ...inputStyle, marginBottom: 10 }}
                  onFocus={e => e.target.style.borderColor = C.blue} onBlur={e => e.target.style.borderColor = C.border2} />
                <textarea name="message" value={form.message} onChange={handle} placeholder="Your message..." required rows={4}
                  style={{ ...inputStyle, resize: "vertical", marginBottom: 14 }}
                  onFocus={e => e.target.style.borderColor = C.blue} onBlur={e => e.target.style.borderColor = C.border2} />
                <button type="submit" style={{
                  width: "100%", background: C.blue, color: "#fff",
                  border: "none", borderRadius: 8, padding: "11px 0", fontSize: 13, fontWeight: 600,
                  cursor: "pointer", transition: "transform 0.15s, box-shadow 0.15s",
                }}
                  onMouseEnter={e => { e.target.style.transform = "translateY(-1px)"; e.target.style.boxShadow = "0 8px 24px rgba(79,142,247,0.35)"; }}
                  onMouseLeave={e => { e.target.style.transform = ""; e.target.style.boxShadow = ""; }}>
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─── FOOTER ─────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ borderTop: `0.5px solid ${C.border}`, padding: "24px 24px", maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
      <span style={{ fontSize: 12, color: C.dim }}>© 2026 Uma Maheswara Sai Danda. All rights reserved.</span>
      <div style={{ display: "flex", gap: 20 }}>
        {["LinkedIn", "GitHub", "Email"].map((l, i) => (
          <a key={i} href="#" style={{ fontSize: 12, color: C.dim, textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = C.text}
            onMouseLeave={e => e.target.style.color = C.dim}>{l}</a>
        ))}
      </div>
    </footer>
  );
}

/* ─── APP ────────────────────────────────────────────────────── */
export default function App() {
  return (
    <div style={{ background: C.bg, minHeight: "100vh", color: C.text, fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <WhyHireMe />
      <Contact />
      <Footer />
    </div>
  );
}
