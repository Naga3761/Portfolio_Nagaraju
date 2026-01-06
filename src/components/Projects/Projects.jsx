import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Automated Incident Routing System',
      description:
        'Built a Java-based automated incident routing system that dissolved a team of 20+ members and reduced Mean Time To Acknowledge (MTTA) from 7 minutes to 1 minute, saving significant operational costs.',
      longDescription:
        'Designed and developed a comprehensive automated incident routing system from scratch using Java and Spring Boot. The system automatically analyzes incoming alerts, determines the appropriate team based on alert type and severity, and routes incidents to the correct assignment group. This automation eliminated the need for a 20+ member team that manually triaged and routed alerts, resulting in massive cost savings and faster response times.',
      category: 'Automation',
      image: 'gradient-1',
      role: 'DevOps Engineer II',
      impact: 'Dissolved team of 20+ members, reduced MTTA from 7 mins to 1 min',
      tech: [
        { name: 'Java', type: 'Backend' },
        { name: 'Spring Boot', type: 'Backend' },
        { name: 'REST APIs', type: 'Backend' },
        { name: 'Jira API', type: 'Integration' },
        { name: 'Oracle', type: 'Database' },
        { name: 'Hibernate', type: 'ORM' },
        { name: 'Maven', type: 'Build Tool' },
      ],
      features: [
        'Automated alert analysis and classification engine',
        'Intelligent routing based on alert type and severity',
        'Jira API integration for automatic ticket creation and routing',
        'Configurable routing rules and team assignments',
        'Real-time monitoring and logging of routing decisions',
        'Scalable architecture handling thousands of alerts daily',
      ],
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      title: 'Alert Suppression UI',
      description:
        'Developed a full-stack UI application for alert suppression that reduced approximately 36 hours per day of manual effort for operations teams managing 5,000+ servers across the infrastructure.',
      longDescription:
        'Built an end-to-end full-stack application using React.js for the frontend and Java Spring Boot for the backend. The Alert Suppression UI enables operations teams to easily manage and suppress non-critical or duplicate alerts at scale. Before this tool, teams spent hours manually managing alerts for 5,000+ servers. The application provides a centralized interface for creating suppression rules, managing their lifecycle, and viewing analytics on suppressed alerts.',
      category: 'Full-Stack Development',
      image: 'gradient-2',
      role: 'DevOps Engineer II',
      impact: 'Reduced ~36 hours/day of manual effort for 5,000+ servers',
      tech: [
        { name: 'React.js', type: 'Frontend' },
        { name: 'Java', type: 'Backend' },
        { name: 'Spring Boot', type: 'Backend' },
        { name: 'REST APIs', type: 'Backend' },
        { name: 'Oracle', type: 'Database' },
        { name: 'CSS3', type: 'Styling' },
        { name: 'JavaScript', type: 'Frontend' },
      ],
      features: [
        'Full-stack development with React.js and Java Spring Boot',
        'Centralized alert suppression rule management',
        'Bulk suppression capabilities for server groups',
        'Analytics dashboard showing suppression statistics',
        'Rule lifecycle management with expiration and renewal',
        'Role-based access control and audit logging',
      ],
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      title: 'Microservices Application Development',
      description:
        'Developed and maintained microservices applications using Java 11/17, Spring Boot, and Hibernate. Implemented RESTful APIs for inter-service communication and integrated with Oracle databases for data persistence.',
      longDescription:
        'Built microservices applications from scratch using Spring Boot and Java. Designed and implemented RESTful APIs for communication between services. Integrated Hibernate/JPA for database operations with Oracle. Implemented security using JWT authentication and Spring Security. Followed Agile/Scrum methodology with 2-week sprints.',
      category: 'Backend Development',
      image: 'gradient-3',
      role: 'Senior Analyst',
      impact: 'Supporting Fortune 500 banking clients with scalable microservices',
      tech: [
        { name: 'Java 11/17', type: 'Backend' },
        { name: 'Spring Boot', type: 'Backend' },
        { name: 'Spring Security', type: 'Security' },
        { name: 'Hibernate/JPA', type: 'ORM' },
        { name: 'REST APIs', type: 'Backend' },
        { name: 'Oracle', type: 'Database' },
        { name: 'JUnit', type: 'Testing' },
      ],
      features: [
        'Developed microservices using Spring Boot and Java',
        'Implemented RESTful APIs for service communication',
        'Integrated Hibernate for database operations with Oracle',
        'Implemented JWT-based authentication with Spring Security',
        'Wrote unit and integration tests using JUnit and Mockito',
        'Participated in Agile/Scrum ceremonies and code reviews',
      ],
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      title: 'Legacy Application Migration',
      description:
        'Migrated monolithic applications from Oracle WebLogic to modern Spring Boot microservices architecture, improving scalability, maintainability, and deployment efficiency.',
      longDescription:
        'Led the migration of legacy monolithic applications running on Oracle WebLogic to a modern microservices architecture using Spring Boot. The migration involved breaking down the monolith into independent services, implementing REST APIs, and deploying on Azure cloud infrastructure. This significantly improved application scalability and reduced deployment complexity.',
      category: 'Migration',
      image: 'gradient-4',
      role: 'Senior Analyst',
      impact: 'Improved scalability and reduced deployment time by 70%',
      tech: [
        { name: 'Java', type: 'Backend' },
        { name: 'Spring Boot', type: 'Backend' },
        { name: 'Microservices', type: 'Architecture' },
        { name: 'Oracle', type: 'Database' },
        { name: 'WebLogic', type: 'Application Server' },
        { name: 'Azure', type: 'Cloud' },
        { name: 'Maven', type: 'Build Tool' },
      ],
      features: [
        'Migrated applications from WebLogic to Spring Boot',
        'Broke down monolith into microservices architecture',
        'Implemented RESTful APIs for service communication',
        'Deployed microservices to Azure cloud infrastructure',
        'Improved application scalability and maintainability',
        'Reduced deployment complexity and time significantly',
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
