import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Engineer & Problem Solver</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              I'm Uma Maheswara Sai Danda, a Full Stack Java Developer with 2+ years of experience 
              building scalable enterprise applications. My journey began with a B.Tech degree, and 
              evolved through hands-on experience solving complex backend challenges.
            </p>

            <p className="about-paragraph">
              What drives me is the intersection of <strong>performance</strong> and <strong>scalability</strong>. 
              I've built real-time ride-booking platforms with WebSocket integration, enterprise data migration 
              systems handling millions of records, and microservices architectures that process events at scale.
            </p>

            <p className="about-paragraph">
              My expertise spans the entire stack—from designing REST APIs and implementing OAuth 2.0 security 
              to optimizing PostgreSQL queries and orchestrating event-driven systems with RabbitMQ. 
              I believe in writing code that's not just functional, but maintainable, secure, and built to scale.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🎯</span>
                <div>
                  <h4>Problem Solver</h4>
                  <p>Crafting solutions to complex architectural challenges</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">⚡</span>
                <div>
                  <h4>Performance Focused</h4>
                  <p>Optimizing systems for speed and efficiency at scale</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🔒</span>
                <div>
                  <h4>Security First</h4>
                  <p>Implementing enterprise-grade authentication & authorization</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">📚</span>
                <div>
                  <h4>Continuous Learner</h4>
                  <p>Staying updated with latest technologies and best practices</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="visual-item skill-card">
              <div className="card-icon">📊</div>
              <h3>Data Driven</h3>
              <p>Design systems with metrics and monitoring in mind</p>
            </div>
            <div className="visual-item skill-card">
              <div className="card-icon">🏗️</div>
              <h3>Scalable</h3>
              <p>Build architectures that grow with demand</p>
            </div>
            <div className="visual-item skill-card">
              <div className="card-icon">💡</div>
              <h3>Innovative</h3>
              <p>Creative solutions to technical problems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
