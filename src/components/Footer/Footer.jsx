import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      href: 'https://github.com',
      color: '#333',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      href: 'https://linkedin.com',
      color: '#0077b5',
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      href: 'mailto:contact@nagarajusaravanan.dev',
      color: '#6366f1',
    },
  ];

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">SN</div>
            <p className="footer__tagline">
              Building scalable full-stack solutions with Java, Spring Boot, and React.
            </p>
            <div className="footer__social">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label={link.name}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ '--link-color': link.color }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="footer__links">
            <h4 className="footer__links-title">Quick Links</h4>
            <ul className="footer__links-list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__tech">
            <h4 className="footer__tech-title">Tech Stack</h4>
            <div className="footer__tech-list">
              <span className="footer__tech-badge">Java</span>
              <span className="footer__tech-badge">Spring Boot</span>
              <span className="footer__tech-badge">React.js</span>
              <span className="footer__tech-badge">Docker</span>
              <span className="footer__tech-badge">AWS</span>
              <span className="footer__tech-badge">Kubernetes</span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__copyright">
            <p>
              © {currentYear} Nagaraju Saravanan. Crafted with passion using React.js.
            </p>
          </div>

          <motion.button
            className="footer__back-to-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={18} />
            <span>Top</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
