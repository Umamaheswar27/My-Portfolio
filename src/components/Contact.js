import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: 'uma@example.com',
      link: 'mailto:uma@example.com',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/umamaheswara',
      link: 'https://linkedin.com/in/umamaheswara',
    },
    {
      icon: '💻',
      label: 'GitHub',
      value: 'github.com/umamaheswara',
      link: 'https://github.com/umamaheswara',
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 XXXXX XXXXX',
      link: 'tel:+91XXXXXXXXXX',
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">Get in Touch</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together</h3>
            <p>
              I'm always interested in hearing about new projects and opportunities. 
              Feel free to reach out through any of the channels below!
            </p>

            <div className="contact-methods">
              {contactMethods.map((method, idx) => (
                <a
                  key={idx}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method"
                >
                  <span className="contact-icon">{method.icon}</span>
                  <div>
                    <div className="contact-label">{method.label}</div>
                    <div className="contact-value">{method.value}</div>
                  </div>
                  <span className="contact-arrow">→</span>
                </a>
              ))}
            </div>

            <div className="contact-social">
              <p className="social-label">Follow on social media</p>
              <div className="social-links">
                <a href="#" className="social-icon" title="LinkedIn">in</a>
                <a href="#" className="social-icon" title="GitHub">gh</a>
                <a href="#" className="social-icon" title="Twitter">tw</a>
                <a href="#" className="social-icon" title="Email">em</a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your message..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-input"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary form-submit">
              {submitted ? 'Message Sent! ✓' : 'Send Message'}
            </button>

            {submitted && (
              <div className="form-success">
                Thanks for reaching out! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
