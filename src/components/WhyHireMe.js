import React from 'react';

const WhyHireMe = () => {
  const reasons = [
    {
      icon: '🏗️',
      title: 'Microservices Expert',
      description: 'Built scalable microservices architectures handling thousands of concurrent users.',
    },
    {
      icon: '⚡',
      title: 'Real-Time Systems',
      description: 'Implemented WebSocket-based real-time systems with sub-100ms latency.',
    },
    {
      icon: '📊',
      title: 'Event-Driven Architecture',
      description: 'Designed and implemented event-driven systems using RabbitMQ and message queues.',
    },
    {
      icon: '💼',
      title: 'Enterprise Development',
      description: 'Experienced with enterprise-grade applications, Oracle, and complex integrations.',
    },
    {
      icon: '🔒',
      title: 'Security First',
      description: 'Implemented OAuth 2.0, JWT, RBAC, and other enterprise security patterns.',
    },
    {
      icon: '⚙️',
      title: 'Performance Master',
      description: 'Optimized queries and systems to achieve 25-30% performance improvements.',
    },
    {
      icon: '🚀',
      title: 'Full Stack Delivery',
      description: 'Can build complete features from Angular frontend to Spring Boot backend.',
    },
    {
      icon: '📈',
      title: 'Metrics Driven',
      description: 'Focus on measurable improvements and data-driven decision making.',
    },
  ];

  return (
    <section id="why-hire" className="why-hire-me">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Why Hire Me?</h2>
          <p className="section-subtitle">What Sets Me Apart</p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, idx) => (
            <div key={idx} className="reason-card">
              <span className="reason-icon">{reason.icon}</span>
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-description">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="hire-cta-section">
          <div className="hire-cta-content">
            <h3>Ready to Build Something Great?</h3>
            <p>Whether you're looking for a full-time team member, consultant, or collaborator on your next project, I'm here to help.</p>
            <div className="hire-cta-buttons">
              <button className="btn btn-primary">Schedule a Call</button>
              <button className="btn btn-secondary">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
