import { useState } from 'react';
import SectionTitle from '../components/Sectiontitle';
import './Contact.css';

const contactDetails = [
  { icon: 'fas fa-envelope', label: 'Email', value: 'karajsingh368@gmail.com', href: 'mailto:karajsingh368@gmail.com' },
  { icon: 'fas fa-phone', label: 'Phone', value: '+91 8360954145', href: 'tel:+918360954145' },
  { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'New Delhi, India', href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <span className="section-label">Contact</span>
          <h1>Let's Work<br /><span className="text-gradient">Together</span></h1>
          <p>Have a project in mind? I'd love to hear about it. Get in touch and let's discuss how I can help.</p>
        </div>
      </section>

      <section className="section section-chalk">
        <div className="container">
          <div className="contact-layout">

            {/* LEFT: INFO */}
            <div className="contact-info">
              <SectionTitle label="Get in Touch" title="Let's Start a Conversation" subtitle="Whether you're looking for a freelancer for your next project or want to discuss a full-time opportunity — I'm all ears." />

              <div className="contact-details">
                {contactDetails.map(({ icon, label, value, href }) => (
                  <div key={label} className="contact-detail-item">
                    <div className="icon-box"><i className={icon} /></div>
                    <div>
                      <p className="contact-detail-label">{label}</p>
                      {href ? (
                        <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="contact-detail-value">
                          {value}
                        </a>
                      ) : (
                        <p className="contact-detail-value">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-socials">
                <p className="contact-socials__label">Find me on</p>
                <div className="contact-socials__icons">
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="contact-social-btn" aria-label="GitHub">
                    <i className="fab fa-github" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-social-btn" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="mailto:karajsingh368@gmail.com" target="_blank" rel="noreferrer" className="contact-social-btn" aria-label="Website">
                    <i className="fas fa-envelope" />
                  </a>
                </div>
              </div>

              <div className="contact-availability">
                <span className="contact-availability__dot" />
                <span>Currently available for freelance projects</span>
              </div>
            </div>

            {/* RIGHT: FORM */}
            <div className="contact-form-wrap card">
              <h3 className="contact-form-title">Send a Message</h3>
              <p className="contact-form-sub">Fill out the form and I'll get back to you within 24 hours.</p>

              {submitted && (
                <div className="form-success">
                  <i className="fas fa-check-circle" /> Message sent! I'll be in touch soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Your Name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} className="form-input" placeholder="John Smith" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} className="form-input" placeholder="john@example.com" required />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input type="text" name="subject" value={form.subject} onChange={handleChange} className="form-input" placeholder="Website Design Project" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} className="form-textarea" placeholder="Tell me about your project — what you need, your timeline, and any other details..." required />
                </div>
                <button type="submit" className="btn btn-primary contact-form-submit">
                  <i className="fas fa-paper-plane" /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MAP/CTA STRIP */}
      <section className="section section-slate">
        <div className="container text-center">
          <h2 className="text-white mb-12">Based in New Delhi, Available Globally</h2>
          <p style={{ color: '#9ca3af', maxWidth: 480, margin: '0 auto 28px' }}>
            I work with clients across India, Australia, Europe, and beyond — timezone-friendly communication guaranteed.
          </p>
          <a href="mailto:karajsingh368@gmail.com" className="btn btn-primary">
            <i className="fas fa-envelope" /> karajsingh368@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
}