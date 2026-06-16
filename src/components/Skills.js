import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Backend Engineering',
      icon: '⚙️',
      skills: ['Java', 'Spring Boot', 'Hibernate', 'REST APIs', 'Microservices', 'Event Processing'],
    },
    {
      category: 'Frontend',
      icon: '🎨',
      skills: ['Angular', 'TypeScript', 'PrimeNG', 'RxJS', 'HTML5', 'CSS3'],
    },
    {
      category: 'Databases',
      icon: '🗄️',
      skills: ['PostgreSQL', 'MySQL', 'Oracle', 'Query Optimization', 'Indexing'],
    },
    {
      category: 'Messaging & Real-Time',
      icon: '📨',
      skills: ['RabbitMQ', 'WebSocket', 'Event-Driven Architecture', 'Message Queues'],
    },
    {
      category: 'Security',
      icon: '🔐',
      skills: ['OAuth 2.0', 'JWT', 'RBAC', 'Spring Security', 'Encryption'],
    },
    {
      category: 'Cloud & DevOps',
      icon: '☁️',
      skills: ['AWS', 'Docker', 'CI/CD', 'Linux', 'Git'],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Expertise & Proficiency</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-name">{category.category}</h3>
              </div>

              <div className="category-skills">
                {category.skills.map((skill, sidx) => (
                  <span key={sidx} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-proficiency">
          <h3 className="proficiency-title">Core Competencies</h3>
          <div className="proficiency-grid">
            <div className="proficiency-item">
              <div className="proficiency-header">
                <span>Microservices Architecture</span>
                <span className="proficiency-level">Expert</span>
              </div>
              <div className="proficiency-bar">
                <div className="proficiency-fill" style={{ width: '95%' }}></div>
              </div>
            </div>

            <div className="proficiency-item">
              <div className="proficiency-header">
                <span>Spring Boot Development</span>
                <span className="proficiency-level">Expert</span>
              </div>
              <div className="proficiency-bar">
                <div className="proficiency-fill" style={{ width: '95%' }}></div>
              </div>
            </div>

            <div className="proficiency-item">
              <div className="proficiency-header">
                <span>PostgreSQL & Database Design</span>
                <span className="proficiency-level">Advanced</span>
              </div>
              <div className="proficiency-bar">
                <div className="proficiency-fill" style={{ width: '90%' }}></div>
              </div>
            </div>

            <div className="proficiency-item">
              <div className="proficiency-header">
                <span>Event-Driven Systems</span>
                <span className="proficiency-level">Expert</span>
              </div>
              <div className="proficiency-bar">
                <div className="proficiency-fill" style={{ width: '92%' }}></div>
              </div>
            </div>

            <div className="proficiency-item">
              <div className="proficiency-header">
                <span>Angular Frontend Development</span>
                <span className="proficiency-level">Advanced</span>
              </div>
              <div className="proficiency-bar">
                <div className="proficiency-fill" style={{ width: '88%' }}></div>
              </div>
            </div>

            <div className="proficiency-item">
              <div className="proficiency-header">
                <span>System Design & Architecture</span>
                <span className="proficiency-level">Advanced</span>
              </div>
              <div className="proficiency-bar">
                <div className="proficiency-fill" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
