import { Link } from 'react-router-dom';
import SectionTitle from '../components/Sectiontitle';
import './About.css';

const experience = [
  {
    title: 'Frontend Developer · WordPress Developer',
    company: 'Shobhit University',
    location: 'New Delhi, India',
    period: 'Dec 2023 – Present',
    color: 'var(--cobalt)',
    bullets: [
      'Leading frontend development and WordPress management for a premier B.Tech engineering university portal in Delhi NCR.',
      'Managing multiple sub-sites including admissions, ODL, and academic program pages — ensuring SEO, speed, and accuracy.',
      'Implementing on-page SEO improvements that boosted organic search visibility for key university landing pages.',
      'Collaborating with marketing and content teams to deliver fast, accurate page updates and campaign landing pages.',
    ],
    tech: ['WordPress', 'Elementor', 'SEO', 'HTML/CSS', 'JavaScript', 'SCSS'],
  },
  {
    title: 'WordPress Developer',
    company: 'BlueMile Digital',
    location: 'Mohali Sec.74, India',
    period: 'Sep 2023 – Dec 2023',
    color: 'var(--sky)',
    bullets: [
      'Built and maintained WordPress websites for clients across Web Design, E-commerce, SEO, and Online Marketing verticals.',
      'Delivered client-ready sites on tight deadlines with strong attention to design fidelity and code quality.',
      'Collaborated with the SEO team to implement technical SEO improvements across multiple client sites.',
    ],
    tech: ['WordPress', 'Elementor', 'SEO', 'WooCommerce'],
  },
  {
    title: 'Frontend Developer · WordPress Developer',
    company: 'Collationhub',
    location: 'Mohali Sec.74, India',
    period: 'Feb 2023 – Aug 2023',
    color: 'var(--sky)',
    bullets: [
      'Developed premium e-commerce and jewelry websites with a focus on visual quality and conversion-optimized product layouts.',
      'Built custom WooCommerce stores with product filtering, variable pricing, and cart optimization.',
      'Produced responsive frontend builds from PSD/XD design files for clients in the jewelry and fashion sector.',
    ],
    tech: ['WooCommerce', 'WordPress', 'SCSS', 'Bootstrap', 'Figma to HTML'],
  },
  {
    title: 'Frontend Developer',
    company: 'TIS India',
    location: 'Sector-8, Noida, India',
    period: 'Jul 2021 – Jan 2023',
    color: '#9ca3af',
    bullets: [
      'Built responsive HTML/CSS templates and JavaScript-enhanced UIs for clients across Website Design, Digital Marketing, and Salesforce Consulting.',
      'Ensured cross-browser compatibility and maintained version control using GitHub/GitLab.',
      'Collaborated closely with backend developers and project managers in an agile team environment.',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'GitHub'],
  },
];

const strengths = [
  { icon: 'fas fa-bullseye', title: 'Detail-Oriented', desc: 'I obsess over pixels, performance, and polish — nothing ships until it is right.' },
  { icon: 'fas fa-users', title: 'Client-First', desc: 'I listen before I code. Understanding your goals drives every decision I make.' },
  { icon: 'fas fa-sync-alt', title: 'Always Learning', desc: 'The web moves fast. I stay current with technologies, tools, and best practices.' },
  { icon: 'fas fa-clock', title: 'On-Time Delivery', desc: 'Deadlines matter. I plan and communicate clearly so projects land when they should.' },
];

export default function About() {
  return (
    <main>
      {/* PAGE BANNER */}
      <section className="page-banner">
        <div className="container">
          <span className="section-label">About Me</span>
          <h1>The Person Behind<br /><span className="text-gradient">The Code</span></h1>
          <p>Frontend developer, WordPress specialist, and lifelong learner based in New Delhi, India. Here's my story.</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section section-chalk">
        <div className="container">
          <div className="about-intro">
            <div className="about-avatar">KS</div>
            <div className="about-intro__content">
              <span className="section-label">My Story</span>
              <h2>Building the Web, One Line at a Time</h2>
              <p className="mb-16">
                I'm <strong>Karaj Singh</strong>, a Frontend Developer and WordPress Expert with over <strong>4 years of hands-on experience</strong> crafting responsive, performance-focused web applications for businesses across India and internationally.
              </p>
              <p className="mb-16">
                My journey started with a deep curiosity about how websites worked — how design and code come together to create meaningful digital experiences. Since then, I've worked with digital agencies, educational institutions, and e-commerce platforms, delivering everything from simple landing pages to full enterprise-grade WordPress builds.
              </p>
              <p className="mb-32">
                I believe great websites are built on three pillars: <strong>clean code</strong>, <strong>user-first design</strong>, and <strong>search-engine readiness</strong>. Every project I take on gets all three.
              </p>
              <div className="about-stats">
                <div className="stat-block">
                  <div className="stat-number">4+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="about-stats__divider" />
                <div className="stat-block">
                  <div className="stat-number">20+</div>
                  <div className="stat-label">Projects Delivered</div>
                </div>
                <div className="about-stats__divider" />
                <div className="stat-block">
                  <div className="stat-number">4</div>
                  <div className="stat-label">Companies Worked</div>
                </div>
              </div>
              <div className="mt-32">
                <Link to="/contact" className="btn btn-primary">Work With Me</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section className="section section-white">
        <div className="container">
          <SectionTitle label="Experience" title="My Career Journey" />
          <div className="exp-timeline">
            {experience.map((job) => (
              <div key={job.company + job.period} className="exp-item card-chalk">
                <div className="exp-item__header">
                  <div>
                    <h3 className="exp-item__title">{job.title}</h3>
                    <p className="exp-item__company" style={{ color: job.color }}>{job.company} · {job.location}</p>
                  </div>
                  <span className="exp-item__period">{job.period}</span>
                </div>
                <ul className="exp-item__bullets">
                  {job.bullets.map((b) => (
                    <li key={b} className="exp-item__bullet">
                      <i className="fas fa-circle-dot exp-item__dot" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="tech-pills">
                  {job.tech.map((t) => <span key={t} className="tech-pill">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section section-chalk">
        <div className="container">
          <SectionTitle label="Education" title="Academic Background" />
          <div className="grid-2">
            <div className="edu-card card">
              <div className="icon-box icon-box-lg mb-16"><i className="fas fa-graduation-cap" /></div>
              <h3>Master of Arts (M.A.)</h3>
              <p className="text-cobalt font-semibold mb-8">Panjab University</p>
              <p className="text-gray" style={{ fontSize: '0.85rem' }}>Abohar, Punjab, India</p>
              <span className="badge mt-12">2020 – 2022</span>
            </div>
            <div className="edu-card card">
              <div className="icon-box icon-box-lg mb-16"><i className="fas fa-certificate" /></div>
              <h3>DCA — Diploma in Computer Applications</h3>
              <p className="text-cobalt font-semibold mb-8">ISO 1901:2015 Institute</p>
              <p className="text-gray" style={{ fontSize: '0.85rem' }}>Abohar, Punjab, India</p>
              <span className="badge mt-12">2020 – 2021</span>
            </div>
          </div>
        </div>
      </section>

      {/* STRENGTHS */}
      <section className="section section-white">
        <div className="container">
          <SectionTitle label="My Approach" title="Personal Strengths" />
          <div className="grid-4">
            {strengths.map(({ icon, title, desc }) => (
              <div key={title} className="strength-card card-chalk">
                <div className="icon-box icon-box-lg mb-16"><i className={icon} /></div>
                <h4 className="strength-card__title">{title}</h4>
                <p style={{ fontSize: '0.855rem', color: '#6b7280' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LANGUAGES */}
      <section className="section section-chalk">
        <div className="container">
          <SectionTitle label="Languages" title="I Speak" />
          <div className="lang-grid">
            {[
              { flag: '🇬🇧', name: 'English', level: 'Professional Proficiency' },
              { flag: '🇮🇳', name: 'Hindi', level: 'Native' },
              { flag: '🇮🇳', name: 'Punjabi', level: 'Native' },
            ].map(({ flag, name, level }) => (
              <div key={name} className="lang-card card">
                <span className="lang-card__flag">{flag}</span>
                <h4 className="lang-card__name">{name}</h4>
                <p className="lang-card__level">{level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}