import { motion } from 'framer-motion';
import { Building, Calendar, ExternalLink } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Comcast',
      role: 'DevOps Engineer II',
      duration: '1 Year 8 Months',
      period: 'May 2023 - Present',
      location: 'Chennai, India',
      type: 'Full-time',
      logo: 'CM',
      logoColor: '#0078ae',
      description:
        'Working as a DevOps Engineer II, building automation solutions and full-stack applications to improve operational efficiency. Specialized in Java, Spring Boot, React.js, and cloud technologies.',
      achievements: [
        'Built a Java-based automated incident routing system, dissolving a team of 20+ members and reducing MTTA from 7 mins to 1 min',
        'Developed 5+ standalone automations for Jira ticket creation, workflow synchronization, and API-based test pipeline triggers',
        'Created 10+ SOP automations to diagnose and mitigate application and database issues, accelerating incident resolution',
        'Designed three shared backend services reused across multiple automation projects, enhancing scalability and maintainability',
        'Led Java/Spring upgrades and supported monthly server patching, ensuring platform stability and security',
        'Built 3 full-stack UI applications end-to-end using React.js and Java, owning design, backend integration, and delivery',
        'Delivered an Alert Suppression UI, reducing ~36 hours/day of manual effort for operations teams managing 5,000+ servers',
        'Developed a Change Validation UI enabling automated workflows, before/after comparisons, and analytics',
        'Contributed to the Unified UI Framework, onboarding 5+ applications with shared theming and single SSO',
        'Supported migration of 20+ applications to cloud platforms and modern authentication mechanisms',
        'Built and migrated Grafana dashboards and alerting workflows, improving observability and operational visibility',
        'Presented 4 innovation ideas during Lab Week; 2 were converted into working products',
        'Received Champ award twice and High-Five award four times',
      ],
      technologies: [
        'Java', 'Spring Boot', 'React.js', 'Jira Automation', 'Grafana',
        'Azure', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD',
        'REST APIs', 'OAuth', 'SSO', 'Git', 'Maven'
      ],
    },
    {
      company: 'Capgemini',
      role: 'Senior Analyst',
      duration: '2 Years 7 Months',
      period: 'Oct 2020 - Apr 2023',
      location: 'Bangalore, India',
      type: 'Full-time',
      logo: 'CG',
      logoColor: '#0066cc',
      description:
        'Worked as a Senior Analyst on multiple projects for Fortune 500 clients including GE Aviation and BNP Paribas. Led team during training period and delivered full-stack applications.',
      achievements: [
        'Training Period: Led a team of 8 members and successfully delivered SwiftService Tracker (Java + ReactJS), a vehicle service tracking application',
        'GE Aviation (1 Year): Worked on EDI Support project handling military aviation order transactions for GE',
        'Automated four critical workflows and created bots to significantly reduce manual effort for GE Aviation',
        'Provided 24/7 production support by monitoring and resolving EDI transaction failures on IBM Sterling Integrator',
        'BNP Paribas (1 Year 5 Months): Developed scalable microservices and RESTful APIs to validate and process insurance requests using Java and Spring Boot',
        'Resolved 100+ production incidents for mission-critical insurance renewal systems, ensuring availability',
        'Designed and implemented CI/CD pipeline independently, improving deployment speed, system reliability and release stability',
      ],
      technologies: [
        'Java', 'Spring Boot', 'React.js', 'Microservices', 'REST APIs',
        'IBM Sterling Integrator', 'EDI', 'CI/CD', 'Jenkins', 'Git',
        'Spring Security', 'Hibernate', 'Oracle', 'JIRA', 'Maven'
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
            5+ years of building enterprise solutions
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
