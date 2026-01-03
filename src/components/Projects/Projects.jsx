import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Customer Support Platform',
      description:
        'An intelligent customer support system that combines NLP with machine learning to provide automated responses, ticket routing, and sentiment analysis. Reduced support response time by 70% and improved customer satisfaction scores by 40%.',
      longDescription:
        'Built a comprehensive customer support platform featuring AI-powered chatbots, intelligent ticket routing, real-time analytics dashboard, and multi-channel integration (email, chat, social media). The system processes 50K+ queries daily with 95% accuracy in intent classification.',
      category: 'Enterprise Platform',
      image: 'gradient-1',
      role: 'Lead Full Stack Developer',
      impact: 'Serving 2M+ users across 5 enterprise clients',
      tech: [
        { name: 'React.js', type: 'Frontend' },
        { name: 'Spring Boot', type: 'Backend' },
        { name: 'Python ML', type: 'AI/ML' },
        { name: 'Docker', type: 'DevOps' },
        { name: 'PostgreSQL', type: 'Database' },
        { name: 'Redis', type: 'Cache' },
        { name: 'AWS', type: 'Cloud' },
      ],
      features: [
        'AI-powered chatbot with natural language understanding',
        'Intelligent ticket routing based on sentiment and category',
        'Real-time analytics dashboard with customizable reports',
        'Multi-language support for 15+ languages',
        'Integration with Slack, Teams, and email channels',
        'Automated response suggestions for agents',
      ],
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      title: 'RBAC Authentication & Authorization System',
      description:
        'A comprehensive security framework implementing Role-Based Access Control with fine-grained permissions, audit logging, and SSO integration. Deployed across 12 enterprise applications securing 500K+ user accounts.',
      longDescription:
        'Developed a centralized authentication and authorization service featuring JWT-based authentication, OAuth 2.0 integration, dynamic permission management, and comprehensive audit logging. The system handles 100K+ authentication requests daily with sub-100ms response times.',
      category: 'Security Framework',
      image: 'gradient-2',
      role: 'Full Stack Developer',
      impact: 'Securing 12 enterprise applications with zero security breaches',
      tech: [
        { name: 'Spring Security', type: 'Backend' },
        { name: 'React.js', type: 'Frontend' },
        { name: 'OAuth 2.0', type: 'Security' },
        { name: 'JWT', type: 'Security' },
        { name: 'MongoDB', type: 'Database' },
        { name: 'Kubernetes', type: 'DevOps' },
      ],
      features: [
        'Fine-grained role and permission management',
        'SSO integration with SAML 2.0 and OAuth 2.0',
        'Comprehensive audit logging and compliance reporting',
        'Multi-factor authentication (MFA) support',
        'Passwordless authentication options',
        'Real-time threat detection and blocking',
      ],
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      title: 'Real-time Chat Application',
      description:
        'A scalable WebSocket-based messaging platform supporting 1:1 and group chats, file sharing, and message encryption. Handles 100K+ concurrent connections with <50ms latency and 99.99% uptime.',
      longDescription:
        'Architected a high-performance messaging system using WebSocket for real-time communication, Redis pub/sub for horizontal scaling, and end-to-end encryption. The platform supports rich media sharing, read receipts, typing indicators, and message search across 30-day history.',
      category: 'Communication Platform',
      image: 'gradient-3',
      role: 'Backend Lead',
      impact: 'Processing 10M+ messages daily with 99.99% uptime',
      tech: [
        { name: 'Spring Boot', type: 'Backend' },
        { name: 'WebSocket', type: 'Real-time' },
        { name: 'React.js', type: 'Frontend' },
        { name: 'Redis', type: 'Cache' },
        { name: 'MongoDB', type: 'Database' },
        { name: 'Docker', type: 'DevOps' },
        { name: 'AWS ECS', type: 'Cloud' },
      ],
      features: [
        'Real-time messaging with WebSocket',
        'End-to-end encryption for sensitive communications',
        'Group chats with up to 1000 participants',
        'File and document sharing with virus scanning',
        'Message search with filters across 30-day history',
        'Read receipts and typing indicators',
        'Push notifications for mobile apps',
      ],
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      title: 'Payment Gateway Integration Platform',
      description:
        'A unified payment processing platform integrating multiple payment providers (Stripe, PayPal, Square) with smart routing, reconciliation, and fraud detection. Processing $5M+ in monthly transactions with 99.9% success rate.',
      longDescription:
        'Built a comprehensive payment orchestration layer that abstracts multiple payment providers, implements intelligent routing based on cost and success rates, and provides real-time reconciliation. Features include PCI-DSS compliance, webhook management, and detailed transaction analytics.',
      category: 'FinTech Platform',
      image: 'gradient-4',
      role: 'Full Stack Developer',
      impact: '$5M+ monthly transaction volume with 99.9% success rate',
      tech: [
        { name: 'Java', type: 'Backend' },
        { name: 'Spring Boot', type: 'Backend' },
        { name: 'React.js', type: 'Frontend' },
        { name: 'PostgreSQL', type: 'Database' },
        { name: 'Kafka', type: 'Events' },
        { name: 'Docker', type: 'DevOps' },
        { name: 'AWS', type: 'Cloud' },
      ],
      features: [
        'Multi-payment provider integration (Stripe, PayPal, Square)',
        'Smart routing based on cost and success rates',
        'Automated reconciliation with detailed reports',
        'Fraud detection with machine learning models',
        'Webhook management with retry logic',
        'PCI-DSS compliant architecture',
        'Real-time transaction monitoring and alerts',
      ],
      links: {
        demo: '#',
        github: '#',
      },
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const gradientClasses = {
    'gradient-1': 'project-card--gradient-1',
    'gradient-2': 'project-card--gradient-2',
    'gradient-3': 'project-card--gradient-3',
    'gradient-4': 'project-card--gradient-4',
  };

  return (
    <section id="projects" className="projects">
      <div className="container projects__container">
        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="projects__label">Featured Projects</span>
          <h2 className="projects__title">
            Enterprise-Grade <span className="projects__title-gradient">Solutions</span> I've Built
          </h2>
          <p className="projects__subtitle">
            A selection of production applications delivering real business impact
          </p>
        </motion.div>

        <motion.div
          className="projects__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`project-card ${gradientClasses[project.image] || ''}`}
              variants={itemVariants}
            >
              <div className="project-card__image">
                <div className={`project-card__gradient ${gradientClasses[project.image] || ''}`} />
                <div className="project-card__category">{project.category}</div>
              </div>

              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>
                <p className="project-card__long-description">{project.longDescription}</p>

                <div className="project-card__meta">
                  <div className="project-card__role">
                    <span className="project-card__role-label">Role:</span>
                    <span className="project-card__role-value">{project.role}</span>
                  </div>
                  <div className="project-card__impact">{project.impact}</div>
                </div>

                <div className="project-card__features">
                  <h4 className="project-card__features-title">Key Features</h4>
                  <ul className="project-card__features-list">
                    {project.features.slice(0, 4).map((feature, i) => (
                      <li key={i} className="project-card__feature">
                        <span className="project-card__feature-bullet" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-card__tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="project-card__tech-badge">
                      {tech.name}
                    </span>
                  ))}
                </div>

                <div className="project-card__links">
                  <motion.a
                    href={project.links.demo}
                    className="project-card__link project-card__link--primary"
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>View Demo</span>
                    <ExternalLink size={16} />
                  </motion.a>
                  <motion.a
                    href={project.links.github}
                    className="project-card__link project-card__link--secondary"
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={18} />
                    <span>Source Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="projects__cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="projects__cta-text">Interested in seeing more of my work?</p>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="projects__cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects on GitHub
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
