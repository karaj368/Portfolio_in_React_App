import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { SkillCard, ServiceCard } from '../components/SkillCard';
import './Skills.css';

const frontendSkills = [
  { icon: '🟠', name: 'HTML5', level: 'Expert', percent: 95 },
  { icon: '🔵', name: 'CSS3 / SCSS', level: 'Expert', percent: 92 },
  { icon: '🟡', name: 'JavaScript', level: 'Advanced', percent: 80 },
  { icon: '🟣', name: 'Bootstrap', level: 'Expert', percent: 90 },
  { icon: '🩵', name: 'Tailwind CSS', level: 'Advanced', percent: 82 },
  { icon: '⚛️', name: 'React JS', level: 'Intermediate', percent: 65 },
];

const wordpressSkills = [
  { icon: '💙', name: 'WordPress CMS', level: 'Expert', percent: 95 },
  { icon: '🧩', name: 'Elementor Pro', level: 'Expert', percent: 93 },
  { icon: '🛒', name: 'WooCommerce', level: 'Advanced', percent: 85 },
  { icon: '🎨', name: 'PSD/Figma to WP', level: 'Expert', percent: 90 },
  { icon: '🔌', name: 'Plugin Integration', level: 'Advanced', percent: 85 },
  { icon: '⚙️', name: 'Theme Customization', level: 'Expert', percent: 92 },
];

const designSkills = [
  { icon: '🎭', name: 'Figma', level: 'Advanced', percent: 80 },
  { icon: '🖊️', name: 'Adobe XD', level: 'Proficient', percent: 72 },
  { icon: '🖼️', name: 'Adobe Photoshop', level: 'Proficient', percent: 70 },
  { icon: '📱', name: 'Responsive / Mobile-First', level: 'Expert', percent: 95 },
];

const toolSkills = [
  { icon: '🐙', name: 'GitHub / GitLab', level: 'Advanced', percent: 85 },
  { icon: '🔍', name: 'On-Page SEO', level: 'Advanced', percent: 82 },
  { icon: '⚡', name: 'Page Speed Optimization', level: 'Advanced', percent: 80 },
  { icon: '🍃', name: 'MongoDB', level: 'Intermediate', percent: 60 },
  { icon: '🔗', name: 'REST API Integration', level: 'Intermediate', percent: 65 },
  { icon: '🌐', name: 'Cross-Browser Testing', level: 'Expert', percent: 90 },
];

const services = [
  { icon: 'fas fa-palette', title: 'Website Design', description: 'Custom website design with strong visual hierarchy and premium UI — designed to impress visitors and drive conversions.', features: ['Figma / PSD mockup conversion', 'Mobile-first responsive design', 'Brand-consistent styling'] },
  { icon: 'fas fa-code', title: 'Frontend Development', description: 'Clean, semantic HTML/CSS/JS development with Bootstrap or Tailwind — fast-loading, cross-browser compatible code throughout.', features: ['HTML5 / CSS3 / SCSS builds', 'JavaScript interactions', 'Performance optimized'] },
  { icon: 'fab fa-wordpress', title: 'WordPress Development', description: 'Full WordPress website setup — from theme selection and customization to plugin integration and ongoing maintenance.', features: ['Custom theme development', 'Elementor page building', 'WooCommerce stores'] },
  { icon: 'fas fa-bolt', title: 'Landing Page Design', description: 'High-converting landing pages for campaigns, products, or lead generation — designed to turn visitors into customers.', features: ['CTA-focused layout', 'Fast load time', 'A/B test friendly structure'] },
  { icon: 'fas fa-redo', title: 'Website Redesign', description: 'Modernize your outdated website with a fresh, professional look without losing your existing content and SEO rankings.', features: ['UX audit first', 'Content migration', 'SEO preserved'] },
  { icon: 'fas fa-search', title: 'Basic SEO Optimization', description: 'On-page SEO to help your website rank better — semantic markup, meta tags, speed improvements, and clean architecture.', features: ['Meta title & description', 'Heading structure (H1–H6)', 'Core Web Vitals improvement'] },
];

const process = [
  { num: '01', title: 'Discover', desc: 'We discuss your goals, audience, and vision. I ask the right questions to understand what success looks like for your project.' },
  { num: '02', title: 'Design', desc: 'I plan the layout and structure. Whether converting your Figma or designing from scratch, I prototype before I build.' },
  { num: '03', title: 'Develop', desc: 'Clean code, semantic HTML, and optimized performance. I build responsively and test across devices throughout.' },
  { num: '04', title: 'Deliver', desc: 'Final testing, SEO check, and live deployment. I hand over a site you are proud to show — and I am here for post-launch support.' },
];

export default function Skills() {
  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <span className="section-label">Skills & Services</span>
          <h1>What I Know &<br /><span className="text-gradient">What I Offer</span></h1>
          <p>A deep technical skill set built over 4+ years of real-world projects — frontend development, WordPress, design, and SEO.</p>
        </div>
      </section>

      {/* SKILLS SECTIONS */}
      <section className="section section-chalk">
        <div className="container">
          <div className="skill-category mb-40">
            <div className="skill-category__header">
              <div className="skill-cat-icon" style={{ background: '#1652F0' }}><i className="fas fa-code" /></div>
              <div>
                <span className="section-label">Category 01</span>
                <h2>Frontend Development</h2>
              </div>
            </div>
            <div className="grid-2">
              {frontendSkills.map((s) => <SkillCard key={s.name} {...s} />)}
            </div>
          </div>

          <div className="skill-category mb-40">
            <div className="skill-category__header">
              <div className="skill-cat-icon" style={{ background: '#1e3a8a' }}><i className="fab fa-wordpress" /></div>
              <div>
                <span className="section-label">Category 02</span>
                <h2>WordPress Development</h2>
              </div>
            </div>
            <div className="grid-2">
              {wordpressSkills.map((s) => <SkillCard key={s.name} {...s} />)}
            </div>
          </div>

          <div className="skill-category mb-40">
            <div className="skill-category__header">
              <div className="skill-cat-icon" style={{ background: '#7c3aed' }}><i className="fas fa-pen-ruler" /></div>
              <div>
                <span className="section-label">Category 03</span>
                <h2>UI/UX & Design Tools</h2>
              </div>
            </div>
            <div className="grid-2">
              {designSkills.map((s) => <SkillCard key={s.name} {...s} />)}
            </div>
          </div>

          <div className="skill-category">
            <div className="skill-category__header">
              <div className="skill-cat-icon" style={{ background: '#059669' }}><i className="fas fa-search" /></div>
              <div>
                <span className="section-label">Category 04</span>
                <h2>SEO, Tools & Platforms</h2>
              </div>
            </div>
            <div className="grid-2">
              {toolSkills.map((s) => <SkillCard key={s.name} {...s} />)}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section-white">
        <div className="container">
          <SectionTitle label="Freelance Services" title="Services I Provide" subtitle="Whether you need a brand-new website or want to improve an existing one, I offer focused professional services." />
          <div className="grid-3">
            {services.map((s) => <ServiceCard key={s.title} {...s} />)}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section section-slate">
        <div className="container">
          <SectionTitle label="How I Work" title="My Process" light />
          <div className="process-grid">
            {process.map(({ num, title, desc }) => (
              <div key={num} className="process-step">
                <div className="process-step__num">{num}</div>
                <h3 className="process-step__title">{title}</h3>
                <p className="process-step__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-cobalt">
        <div className="container text-center">
          <h2 className="text-white mb-12">Need These Skills on Your Project?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 28 }}>I'm available for freelance work and open to discussing new opportunities.</p>
          <Link to="/contact" className="btn btn-white">Hire Me Now</Link>
        </div>
      </section>
    </main>
  );
}