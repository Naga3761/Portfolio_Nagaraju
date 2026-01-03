import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Send, MapPin, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'contact@nagarajusaravanan.dev',
      href: 'mailto:contact@nagarajusaravanan.dev',
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/nagaraju-saravanan',
      href: 'https://linkedin.com',
      external: true,
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'Bangalore, India',
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: '+91 XXXXX XXXXX',
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact__background">
        <div className="contact__gradient" />
      </div>

      <div className="container contact__container">
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="contact__label">Get In Touch</span>
          <h2 className="contact__title">
            Let's Build <span className="contact__title-gradient">Something Great</span> Together
          </h2>
          <p className="contact__subtitle">
            Have a project in mind or want to discuss opportunities? Feel free to reach out.
          </p>
        </motion.div>

        <div className="contact__content">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="contact__info-title">Contact Information</h3>
            <p className="contact__info-description">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part
              of your vision. Feel free to reach out through any of the channels below.
            </p>

            <div className="contact__info-list">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact__info-item">
                  <div className="contact__info-icon">{info.icon}</div>
                  <div className="contact__info-details">
                    <span className="contact__info-label">{info.label}</span>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.external ? '_blank' : undefined}
                        rel={info.external ? 'noopener noreferrer' : undefined}
                        className="contact__info-value"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="contact__info-value">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact__cta">
              <a
                href="mailto:contact@nagarajusaravanan.dev"
                className="contact__email-button"
              >
                <Mail size={20} />
                <span>Send me an email</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="contact__form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-group">
                <label htmlFor="name" className="contact__form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="contact__form-input"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="email" className="contact__form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact__form-input"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="message" className="contact__form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="contact__form-textarea"
                  placeholder="Tell me about your project or opportunity..."
                  rows={6}
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="contact__form-button"
                disabled={isSubmitting || submitted}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <span>Sending...</span>
                    <motion.div
                      className="contact__spinner"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    >
                      <Send size={18} />
                    </motion.div>
                  </>
                ) : submitted ? (
                  <>
                    <span>Message Sent!</span>
                    <span className="contact__success-icon">✓</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
