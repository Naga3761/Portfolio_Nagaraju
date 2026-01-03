import { motion } from 'framer-motion';
import { Code2, Server, Database, Cloud } from 'lucide-react';
import './About.css';

const About = () => {
  const highlights = [
    {
      icon: <Code2 size={24} />,
      title: 'Clean Architecture',
      description: 'Building maintainable, scalable applications with SOLID principles and design patterns.',
    },
    {
      icon: <Server size={24} />,
      title: 'Microservices Expert',
      description: 'Designing and implementing distributed systems with Spring Boot and cloud-native technologies.',
    },
    {
      icon: <Database size={24} />,
      title: 'Performance Driven',
      description: 'Optimizing database queries and API responses for high-throughput enterprise applications.',
    },
    {
      icon: <Cloud size={24} />,
      title: 'Cloud Native',
      description: 'Deploying and managing applications on AWS with Docker, Kubernetes, and CI/CD pipelines.',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="about">
      <div className="container about__container">
        <motion.div
          className="about__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="about__label">About Me</span>
          <h2 className="about__title">
            Crafting Enterprise Solutions with <span className="about__title-gradient">Precision & Scale</span>
          </h2>
        </motion.div>

        <div className="about__content">
          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="about__description">
              I'm a Senior Full Stack Developer with over 5 years of professional experience building
              enterprise-grade applications. My expertise spans across backend development with Java and
              Spring Boot, frontend engineering with React.js, and DevOps practices including containerization
              and cloud deployment.
            </p>
            <p className="about__description">
              Throughout my career at Capgemini and Tata Consultancy Services, I've worked on diverse
              projects ranging from microservices architecture to real-time communication platforms. I'm
              passionate about writing clean, maintainable code and architecting systems that can handle
              millions of transactions.
            </p>
            <p className="about__description">
              My approach combines deep technical knowledge with business acumen, ensuring that every
              solution I build not only performs exceptionally but also delivers real value to stakeholders.
              I believe in continuous learning and stay current with emerging technologies to bring
              innovative solutions to complex problems.
            </p>
          </motion.div>

          <motion.div
            className="about__image"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="about__image-wrapper">
              <div className="about__image-gradient" />
              <div className="about__image-card">
                <div className="about__image-pattern">
                  <div className="about__pattern-dot about__pattern-dot--1" />
                  <div className="about__pattern-dot about__pattern-dot--2" />
                  <div className="about__pattern-dot about__pattern-dot--3" />
                  <div className="about__pattern-dot about__pattern-dot--4" />
                </div>
                <div className="about__image-content">
                  <div className="about__years">5+</div>
                  <div className="about__years-label">Years of Experience</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about__highlights"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="about__highlight"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="about__highlight-icon">{highlight.icon}</div>
              <h3 className="about__highlight-title">{highlight.title}</h3>
              <p className="about__highlight-description">{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
