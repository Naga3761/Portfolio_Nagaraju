import { motion } from 'framer-motion';
import { Building, Calendar, ExternalLink } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Capgemini',
      role: 'Senior Full Stack Developer',
      duration: '2.5 Years',
      period: '2021 - 2024',
      location: 'Bangalore, India',
      type: 'Full-time',
      logo: 'CG',
      logoColor: '#0066cc',
      description:
        'Leading development of enterprise Java applications and microservices architecture for Fortune 500 clients across banking and insurance sectors.',
      achievements: [
        'Architected and developed RESTful APIs using Spring Boot, serving 1M+ requests daily with 99.9% uptime',
        'Implemented microservices architecture reducing system coupling and improving deployment frequency by 300%',
        'Led a team of 4 developers in building a cloud-native customer management platform on AWS',
        'Optimized database queries reducing response time by 60% and improving overall application performance',
        'Integrated third-party payment gateways processing transactions worth $2M+ monthly',
      ],
      technologies: [
        'Java', 'Spring Boot', 'Microservices', 'React.js', 'AWS',
        'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'Redis'
      ],
    },
    {
      company: 'Tata Consultancy Services',
      role: 'Full Stack Developer',
      duration: '2.5 Years',
      period: '2018 - 2021',
      location: 'Chennai, India',
      type: 'Full-time',
      logo: 'TCS',
      logoColor: '#004a8f',
      description:
        'Developed full-stack web applications for banking and financial services clients, focusing on creating responsive user interfaces and robust backend systems.',
      achievements: [
        'Built and maintained 12+ Spring Boot REST APIs supporting 500K+ active users',
        'Developed real-time dashboard using React.js and WebSocket for monitoring financial transactions',
        'Implemented JWT-based authentication system with role-based access control (RBAC)',
        'Set up CI/CD pipelines using Jenkins and GitLab, reducing deployment time by 70%',
        'Migrated legacy monolithic application to microservices architecture, improving scalability',
      ],
      technologies: [
        'Java', 'Spring Boot', 'React.js', 'Redux', 'MySQL',
        'Jenkins', 'GitLab', 'Jenkins', 'Maven', 'REST APIs'
      ],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="experience">
      <div className="container experience__container">
        <motion.div
          className="experience__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="experience__label">Experience</span>
          <h2 className="experience__title">
            Professional Journey at <span className="experience__title-gradient">Industry Leaders</span>
          </h2>
          <p className="experience__subtitle">
            5+ years of building enterprise solutions for Fortune 500 companies
          </p>
        </motion.div>

        <motion.div
          className="experience__timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience__card"
              variants={itemVariants}
            >
              <div className="experience__card-header">
                <div className="experience__company">
                  <div
                    className="experience__logo"
                    style={{ background: `${exp.logoColor}15`, border: `2px solid ${exp.logoColor}30` }}
                  >
                    <span style={{ color: exp.logoColor }}>{exp.logo}</span>
                  </div>
                  <div className="experience__company-info">
                    <h3 className="experience__company-name">{exp.company}</h3>
                    <p className="experience__role">{exp.role}</p>
                  </div>
                </div>
                <div className="experience__meta">
                  <div className="experience__meta-item">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="experience__meta-item">
                    <Building size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="experience__card-body">
                <p className="experience__description">{exp.description}</p>

                <div className="experience__achievements">
                  <h4 className="experience__achievements-title">Key Achievements</h4>
                  <ul className="experience__achievements-list">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="experience__achievement">
                        <span className="experience__achievement-bullet" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="experience__technologies">
                  <h4 className="experience__technologies-title">Technologies Used</h4>
                  <div className="experience__tech-list">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="experience__tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
