import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'VALAM',
      subtitle: 'Real-Time Ride Booking Platform',
      description: 'A modern ride-booking platform with live tracking and real-time updates.',
      problem: 'Need for real-time ride management and driver tracking.',
      solution: 'Angular + Spring Boot + WebSocket + Google Maps',
      impact: ['Live tracking with <100ms latency', 'Real-time updates to drivers & users', 'Reduced server load by 40%', 'Improved user experience'],
      tech: ['Angular', 'Spring Boot', 'WebSocket', 'PostgreSQL', 'Google Maps API'],
      icon: '🚗',
      color: '#00d4ff',
    },
    {
      title: 'AECCAR',
      subtitle: 'Enterprise Oracle Data Migration',
      description: 'Enterprise-grade data migration platform for complex database operations.',
      problem: 'Complex enterprise data migration with validation requirements.',
      solution: 'Angular + Spring Boot + Oracle Procedures + RabbitMQ',
      impact: ['Automated migration workflows', 'Real-time validation pipelines', 'Reduced manual intervention by 80%', 'Handled millions of records'],
      tech: ['Angular', 'Spring Boot', 'Oracle', 'RabbitMQ', 'PostgreSQL'],
      icon: '📊',
      color: '#00ffff',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Case Studies & Implementations</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <div className="project-header">
                <span className="project-icon">{project.icon}</span>
                <h3 className="project-title">{project.title}</h3>
              </div>

              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-description">{project.description}</p>

              <div className="project-section">
                <h4 className="project-section-title">Problem</h4>
                <p className="project-section-content">{project.problem}</p>
              </div>

              <div className="project-section">
                <h4 className="project-section-title">Solution</h4>
                <p className="project-section-content">{project.solution}</p>
              </div>

              <div className="project-section">
                <h4 className="project-section-title">Impact</h4>
                <ul className="project-impact-list">
                  {project.impact.map((item, iidx) => (
                    <li key={iidx}>
                      <span className="impact-icon">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-tech-stack">
                {project.tech.map((tech, tidx) => (
                  <span key={tidx} className="project-tech-tag">{tech}</span>
                ))}
              </div>

              <button className="project-cta">
                View Case Study →
              </button>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <h3>Want to see more?</h3>
          <p>Explore all projects on my GitHub or let's discuss potential collaborations.</p>
          <div className="projects-cta-buttons">
            <button className="btn btn-primary">View GitHub</button>
            <button className="btn btn-secondary">Get in Touch</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
