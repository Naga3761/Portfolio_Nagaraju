import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section id="hero" className="hero">
      <div className="hero__background">
        <div className="hero__gradient hero__gradient--1" />
        <div className="hero__gradient hero__gradient--2" />
        <div className="hero__gradient hero__gradient--3" />
      </div>

      <div className="container hero__container">
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="hero__badge">
            <span className="hero__badge-dot" />
            <span className="hero__badge-text">Available for opportunities</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero__title">
            Nagaraju Saravanan {' '}
            <span className="hero__title-gradient">Java Full-Stack Developer</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="hero__description">
            Java Full-Stack Developer with 5+ years of experience in Java, Spring Boot, and React.
            Improves reliability and efficiency using Azure cloud and DevOps practices. Focused on clean code,
            scalable systems, and continuous improvement.
          </motion.p>

          <motion.div variants={itemVariants} className="hero__stats">
            <div className="hero__stat">
              <div className="hero__stat-value">5+</div>
              <div className="hero__stat-label">Years Experience</div>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <div className="hero__stat-value">10+</div>
              <div className="hero__stat-label">Projects Delivered</div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="hero__actions">
            <motion.button
              className="hero__button hero__button--primary"
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <ArrowRight size={18} />
            </motion.button>
            <motion.button
              className="hero__button hero__button--secondary"
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}   
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="hero__code-block">
            <div className="hero__code-header">
              <span className="hero__code-dot hero__code-dot--red" />
              <span className="hero__code-dot hero__code-dot--yellow" />
              <span className="hero__code-dot hero__code-dot--green" />   
            </div>
            <div className="hero__code-content">
              <pre className="hero__code">
                <code>{`const developer = {
  name: "Nagaraju Saravanan",
  role: "Java Full-Stack Developer",
  experience: "5+ years",

  backend: ["Java", "Spring Boot", "Microservices", "Hibernate"],
  frontend: ["React", "JavaScript", "HTML", "CSS"],
  database: ["Oracle", "PostgreSQL", "MongoDB", "Redis"],
  cloud: ["Azure", "Docker", "Kubernetes", "Terraform"],

  currentCompany: "Comcast",
  previousCompany: "Capgemini",

  passionate: [
    "Microservices Architecture",
    "Cloud Native Applications",
    "RESTful APIs"
  ]
};`}</code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="hero__scroll-text">Scroll to explore</div>
        <motion.div
          className="hero__scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="hero__scroll-line" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
