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
        { name: 'Java', icon: '☕' },
        { name: 'Spring Boot', icon: '🍃' },
        { name: 'Microservices', icon: '🔧' },
        { name: 'REST APIs', icon: '🔌' },
        { name: 'Python Core', icon: '💾' },
      ],
    },
    {
      title: 'Frontend Development',
      icon: <Layout size={28} />,
      color: '#8b5cf6',
      skills: [
        { name: 'JavaScript', icon: '📜' },
        { name: 'React.js', icon: '⚛️' },
        { name: 'HTML', icon: '🌐' },
        { name: 'CSS', icon: '🎨' },
        { name: 'JSP', icon: '📄' },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud size={28} />,
      color: '#06b6d4',
      skills: [
        { name: 'Azure', icon: '☁️' },
        { name: 'Azure DevOps', icon: '🔧' },
        { name: 'Docker', icon: '🐳' },
        { name: 'Kubernetes', icon: '☸️' },
        { name: 'Terraform', icon: '🏗️' },
        { name: 'CI/CD', icon: '🔄' },
      ],
    },
    {
      title: 'Databases',
      icon: <Database size={28} />,
      color: '#10b981',
      skills: [
        { name: 'MySQL', icon: '🗄️' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'Redis', icon: '⚡' },
      ],
    },
    {
      title: 'Tools & Version Control',
      icon: <Code2 size={28} />,
      color: '#f59e0b',
      skills: [
        { name: 'Git', icon: '📦' },
        { name: 'Maven', icon: '🏗️' },
        { name: 'JIRA', icon: '📋' },
        { name: 'JUnit', icon: '🧪' },
      ],
    },
    {
      title: 'Generic',
      icon: <Braces size={28} />,
      color: '#ef4444',
      skills: [
        { name: 'Power BI', icon: '⚙️' },
        { name: 'IOP-ServiceNow', icon: '🐱' },
        { name: 'ELK Stack', icon: '🧪' },
        { name: 'Grafana', icon: '⚡' },
        { name: 'AI fundamentals', icon: '🏗️' },
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
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

          
      </div>
    </section>
  );
};

export default Skills;
