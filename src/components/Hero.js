import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-icon">🚀</span>
          <span>Full Stack Java Developer</span>
        </div>

        <h1 className="hero-title">
          Building Scalable<br />Backend Systems &<br />
          <span className="gradient-text">Real-Time Applications</span>
        </h1>

        <p className="hero-subtitle">
          Full Stack Java Developer with 2+ years of expertise in Spring Boot, 
          Angular, Microservices, Event-Driven Architecture, and Secure Enterprise Solutions. 
          I craft high-performance systems that scale.
        </p>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-value">2+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-value">12+</div>
            <div className="stat-label">Projects Delivered</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-value">10+</div>
            <div className="stat-label">Core Technologies</div>
          </div>
        </div>

        <div className="hero-cta">
          <button className="btn btn-primary">
            <span>View Projects</span>
            <span className="btn-icon">→</span>
          </button>
          <button className="btn btn-secondary">
            <span>Download Resume</span>
            <span className="btn-icon">⬇</span>
          </button>
          <button className="btn btn-tertiary">
            <span>Let's Connect</span>
            <span className="btn-icon">💬</span>
          </button>
        </div>

        <div className="hero-tech-stack">
          <p className="tech-label">Featured Technologies:</p>
          <div className="tech-pills">
            {['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'RabbitMQ', 'WebSocket'].map((tech, idx) => (
              <span key={idx} className="tech-pill">{tech}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="code-block">
          <div className="code-header">
            <span className="code-lang">Java</span>
            <div className="code-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <pre className="code-content">{`@Service
public class ScalableSystem {
  
  @Async
  public void processEvent(Event event) {
    // Real-time processing
    handleWithPerfection();
  }
  
  private void handleWithPerfection() {
    // Production-grade code
  }
}`}</pre>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-dot"></div>
        <p>Scroll to explore</p>
      </div>
    </section>
  );
};

export default Hero;
