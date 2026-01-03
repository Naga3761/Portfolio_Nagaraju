import { motion } from 'framer-motion';
import {
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  Braces,
  Cpu,
  GitBranch,
} from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      icon: <Server size={28} />,
      color: '#6366f1',
      skills: [
        { name: 'Java', level: 95, icon: '☕' },
        { name: 'Spring Boot', level: 92, icon: '🍃' },
        { name: 'Microservices', level: 88, icon: '🔧' },
        { name: 'REST APIs', level: 95, icon: '🔌' },
        { name: 'Hibernate/JPA', level: 85, icon: '💾' },
      ],
    },
    {
      title: 'Frontend Development',
      icon: <Layout size={28} />,
      color: '#8b5cf6',
      skills: [
        { name: 'React.js', level: 92, icon: '⚛️' },
        { name: 'JavaScript', level: 90, icon: '📜' },
        { name: 'Redux', level: 85, icon: '🔄' },
        { name: 'HTML/CSS', level: 95, icon: '🎨' },
        { name: 'TypeScript', level: 80, icon: '📘' },
      ],
    },
    {
      title: 'DevOps & Cloud',
      icon: <Cloud size={28} />,
      color: '#06b6d4',
      skills: [
        { name: 'Docker', level: 90, icon: '🐳' },
        { name: 'Kubernetes', level: 82, icon: '☸️' },
        { name: 'AWS', level: 85, icon: '☁️' },
        { name: 'CI/CD', level: 88, icon: '🔄' },
        { name: 'Jenkins', level: 82, icon: '🔧' },
      ],
    },
    {
      title: 'Databases',
      icon: <Database size={28} />,
      color: '#10b981',
      skills: [
        { name: 'PostgreSQL', level: 88, icon: '🐘' },
        { name: 'MySQL', level: 90, icon: '🗄️' },
        { name: 'MongoDB', level: 85, icon: '🍃' },
        { name: 'Redis', level: 82, icon: '⚡' },
        { name: 'Oracle', level: 78, icon: '🔴' },
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: <Code2 size={28} />,
      color: '#f59e0b',
      skills: [
        { name: 'Git/GitHub', level: 92, icon: '📦' },
        { name: 'Maven/Gradle', level: 85, icon: '🏗️' },
        { name: 'IntelliJ IDEA', level: 90, icon: '💡' },
        { name: 'VS Code', level: 88, icon: '👨‍💻' },
        { name: 'Postman', level: 90, icon: '📮' },
      ],
    },
    {
      title: 'Concepts & Practices',
      icon: <Braces size={28} />,
      color: '#ef4444',
      skills: [
        { name: 'Clean Architecture', level: 90, icon: '🏛️' },
        { name: 'Design Patterns', level: 88, icon: '🧩' },
        { name: 'Agile/Scrum', level: 92, icon: '📋' },
        { name: 'Test-Driven Dev', level: 85, icon: '🧪' },
        { name: 'Code Review', level: 90, icon: '👀' },
      ],
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

  return (
    <section id="skills" className="skills">
      <div className="container skills__container">
        <motion.div
          className="skills__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="skills__label">Skills & Expertise</span>
          <h2 className="skills__title">
            Technologies & <span className="skills__title-gradient">Tools</span> I Work With
          </h2>
          <p className="skills__subtitle">
            A comprehensive toolkit built over 5+ years of enterprise development
          </p>
        </motion.div>

        <motion.div
          className="skills__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div
                className="skill-category__header"
                style={{ borderBottomColor: `${category.color}30` }}
              >
                <div
                  className="skill-category__icon"
                  style={{ background: `${category.color}15`, color: category.color }}
                >
                  {category.icon}
                </div>
                <h3 className="skill-category__title">{category.title}</h3>
              </div>

              <div className="skill-category__skills">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-item__info">
                      <span className="skill-item__icon">{skill.icon}</span>
                      <span className="skill-item__name">{skill.name}</span>
                      <span className="skill-item__level">{skill.level}%</span>
                    </div>
                    <div className="skill-item__bar">
                      <motion.div
                        className="skill-item__progress"
                        style={{ background: category.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="skills__summary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="skills__summary-grid">
            <div className="skills__summary-item">
              <Cpu size={24} className="skills__summary-icon" />
              <div>
                <div className="skills__summary-value">15+</div>
                <div className="skills__summary-label">Programming Languages</div>
              </div>
            </div>
            <div className="skills__summary-item">
              <Server size={24} className="skills__summary-icon" />
              <div>
                <div className="skills__summary-value">20+</div>
                <div className="skills__summary-label">Frameworks & Libraries</div>
              </div>
            </div>
            <div className="skills__summary-item">
              <Cloud size={24} className="skills__summary-icon" />
              <div>
                <div className="skills__summary-value">5+</div>
                <div className="skills__summary-label">Cloud Platforms</div>
              </div>
            </div>
            <div className="skills__summary-item">
              <GitBranch size={24} className="skills__summary-icon" />
              <div>
                <div className="skills__summary-value">1000+</div>
                <div className="skills__summary-label">GitHub Contributions</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
