export const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Why Hire Me', href: '#why-hire' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const STATS = [
  { value: '2+', label: 'Years Experience' },
  { value: '12+', label: 'Projects Delivered' },
  { value: '10+', label: 'Core Technologies' },
];

export const TECH_STACK = ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'RabbitMQ', 'WebSocket'];

export const ABOUT_HIGHLIGHTS = [
  { icon: '🎯', title: 'Problem Solver', desc: 'Crafting solutions to complex architectural challenges' },
  { icon: '⚡', title: 'Performance Focused', desc: 'Optimizing systems for speed and efficiency at scale' },
  { icon: '🔒', title: 'Security First', desc: 'Implementing enterprise-grade authentication & authorization' },
  { icon: '📚', title: 'Continuous Learner', desc: 'Staying updated with latest technologies and best practices' },
];

export const ABOUT_CARDS = [
  { icon: '📊', title: 'Data Driven', desc: 'Design systems with metrics and monitoring in mind' },
  { icon: '🏗️', title: 'Scalable', desc: 'Build architectures that grow with demand' },
  { icon: '💡', title: 'Innovative', desc: 'Creative solutions to technical problems' },
];

export const EXPERIENCES = [
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
    tech: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'RabbitMQ', 'WebSocket', 'OAuth 2.0'],
  },
];

export const METRICS = [
  { number: '40-50%', label: 'Efficiency Improvement', desc: 'Using RabbitMQ event processing' },
  { number: '40%', label: 'API Polling Reduced', desc: 'With WebSocket implementation' },
  { number: '25-30%', label: 'Response Time Boost', desc: 'Through DB optimization' },
  { number: '10K+', label: 'Concurrent Users', desc: 'Handled simultaneously' },
];

export const PROJECTS = [
  {
    title: 'VALAM',
    subtitle: 'Real-Time Ride Booking Platform',
    description: 'A modern ride-booking platform with live tracking and real-time updates.',
    problem: 'Need for real-time ride management and driver tracking.',
    solution: 'Angular + Spring Boot + WebSocket + Google Maps',
    impact: ['Live tracking with <100ms latency', 'Real-time updates to drivers & users', 'Reduced server load by 40%', 'Improved user experience'],
    tech: ['Angular', 'Spring Boot', 'WebSocket', 'PostgreSQL', 'Google Maps API'],
    icon: '🚗',
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
  },
];

export const SKILL_CATEGORIES = [
  { category: 'Backend Engineering', icon: '⚙️', skills: ['Java', 'Spring Boot', 'Hibernate', 'REST APIs', 'Microservices', 'Event Processing'] },
  { category: 'Frontend', icon: '🎨', skills: ['Angular', 'TypeScript', 'PrimeNG', 'RxJS', 'HTML5', 'CSS3'] },
  { category: 'Databases', icon: '🗄️', skills: ['PostgreSQL', 'MySQL', 'Oracle', 'Query Optimization', 'Indexing'] },
  { category: 'Messaging & Real-Time', icon: '📨', skills: ['RabbitMQ', 'WebSocket', 'Event-Driven Architecture', 'Message Queues'] },
  { category: 'Security', icon: '🔐', skills: ['OAuth 2.0', 'JWT', 'RBAC', 'Spring Security', 'Encryption'] },
  { category: 'Cloud & DevOps', icon: '☁️', skills: ['AWS', 'Docker', 'CI/CD', 'Linux', 'Git'] },
];

export const PROFICIENCIES = [
  { name: 'Microservices Architecture', level: 'Expert', width: '95%' },
  { name: 'Spring Boot Development', level: 'Expert', width: '95%' },
  { name: 'PostgreSQL & Database Design', level: 'Advanced', width: '90%' },
  { name: 'Event-Driven Systems', level: 'Expert', width: '92%' },
  { name: 'Angular Frontend Development', level: 'Advanced', width: '88%' },
  { name: 'System Design & Architecture', level: 'Advanced', width: '85%' },
];

export const WHY_HIRE_REASONS = [
  { icon: '🏗️', title: 'Microservices Expert', description: 'Built scalable microservices architectures handling thousands of concurrent users.' },
  { icon: '⚡', title: 'Real-Time Systems', description: 'Implemented WebSocket-based real-time systems with sub-100ms latency.' },
  { icon: '📊', title: 'Event-Driven Architecture', description: 'Designed and implemented event-driven systems using RabbitMQ and message queues.' },
  { icon: '💼', title: 'Enterprise Development', description: 'Experienced with enterprise-grade applications, Oracle, and complex integrations.' },
  { icon: '🔒', title: 'Security First', description: 'Implemented OAuth 2.0, JWT, RBAC, and other enterprise security patterns.' },
  { icon: '⚙️', title: 'Performance Master', description: 'Optimized queries and systems to achieve 25-30% performance improvements.' },
  { icon: '🚀', title: 'Full Stack Delivery', description: 'Can build complete features from Angular frontend to Spring Boot backend.' },
  { icon: '📈', title: 'Metrics Driven', description: 'Focus on measurable improvements and data-driven decision making.' },
];

export const CONTACT_METHODS = [
  { icon: '📧', label: 'Email', value: 'danda.ums09@gmail.com', link: 'mailto:danda.ums09@gmail.com' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/uma-maheswara-sai-danda', link: 'https://www.linkedin.com/in/uma-maheswara-sai-danda' },
  { icon: '💻', label: 'GitHub', value: 'github.com/uma-sai-danda', link: 'https://github.com/uma-sai-danda' },
  { icon: '📱', label: 'Phone', value: '+91 8639374798', link: 'tel:+918639374798' },
];
