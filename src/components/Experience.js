import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'SNAD Developers',
      period: 'April 2024 – Present',
      achievements: [
        'Built production-grade enterprise applications using Spring Boot microservices',
        'Developed real-time event processing with RabbitMQ, improving workflow efficiency by 40-50%',
        'Implemented WebSocket integration for live tracking, reducing API polling by 40%',
        'Optimized PostgreSQL queries, improving API response time by 25-30%',
        'Implemented OAuth 2.0 and Role-Based Access Control (RBAC) for enterprise security',
        'Designed and built RESTful APIs serving 10K+ concurrent users',
      ],
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">Journey of Growth & Impact</p>
        </div>

        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-dot"></div>
              </div>

              <div className="timeline-content">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-title">{exp.title}</h3>
                    <p className="exp-company">{exp.company}</p>
                  </div>
                  <span className="exp-period">{exp.period}</span>
                </div>

                <ul className="exp-achievements">
                  {exp.achievements.map((achievement, aidx) => (
                    <li key={aidx}>
                      <span className="achievement-bullet">✦</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="exp-tech">
                  <span className="tech-label">Tech Stack:</span>
                  {['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'RabbitMQ', 'WebSocket', 'OAuth 2.0'].map((tech, tidx) => (
                    <span key={tidx} className="exp-tech-pill">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="experience-metrics">
          <div className="metric-card">
            <div className="metric-number">40-50%</div>
            <div className="metric-label">Efficiency Improvement</div>
            <p className="metric-desc">Using RabbitMQ event processing</p>
          </div>
          <div className="metric-card">
            <div className="metric-number">40%</div>
            <div className="metric-label">API Polling Reduced</div>
            <p className="metric-desc">With WebSocket implementation</p>
          </div>
          <div className="metric-card">
            <div className="metric-number">25-30%</div>
            <div className="metric-label">Response Time Boost</div>
            <p className="metric-desc">Through DB optimization</p>
          </div>
          <div className="metric-card">
            <div className="metric-number">10K+</div>
            <div className="metric-label">Concurrent Users</div>
            <p className="metric-desc">Handled simultaneously</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
