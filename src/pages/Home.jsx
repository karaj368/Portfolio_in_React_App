import { Link } from 'react-router-dom';
import SectionTitle from '../components/Sectiontitle';
import ProjectCard from '../components/Projectcard';
import './Home.css';


const featuredProjects = [
  {
    title: 'Shobhit University',
    category: 'Education · CMS · Admissons Forms ',
    description: 'Full university portal with admissions, ODL, and online course listing pages. High-traffic, SEO-optimized Static build for a premier B.Tech institution in Delhi NCR.',
    tech: ['PHP','HTML5','CSS3 / SCSS', 'CMS Dashboard', 'MySQL', 'JavaScript','jQuery', 'Elementor', 'SEO'],
    liveUrl: 'https://www.shobhituniversity.ac.in',
    color: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
    projectImg: '/ep1.webp',
  },
  {
    title: 'Swarns Accessories',
    category: 'E-Commerce · Jewelry',
    description: 'Premium diamond jewelry e-commerce platform with elegant product catalog, variable pricing, and a conversion-optimized checkout experience.',
    tech: ['WordPress', 'WooCommerce', 'Elementor', 'HTML5','CSS3 / SCSS','JavaScript', 'SEO', 'Responsive'],
    liveUrl: 'http://swarns.co.in',
    color: 'linear-gradient(135deg, #d1fae5, #a7f3d0)',
    projectImg: '/p1.webp',
  },
  {
    title: 'Suraksha HealthCare',
    category: 'Pharmacies & e-Commerce',
    description: 'Suraksha Healthcare works to provide dependable healthcare services, quality products, and educational initiatives that empower individuals to take control of their health.',
    tech: ['WordPress', 'WooCommerce', 'Elementor', 'HTML5','CSS3 / SCSS','JavaScript', 'SEO', 'Responsive'],
    liveUrl: 'https://surakshahealthcare.com',
    color: 'linear-gradient(135deg, #fef3c7, #fde68a)',
    projectImg: '/p2.webp',
  },
];

const skills = [
  'React JS', 'MongoDB', 'REST API', 'HTML5', 'CSS3 / SCSS', 'JavaScript', 'Bootstrap',
  'Tailwind CSS', 'WordPress', 'Elementor', 'WooCommerce',
  'Figma', 'Adobe XD', 'GitHub / GitLab', 'Vercel', 'SEO Optimization',
  'Responsive Design', 'Performance Optimization', 'Cross-Browser Compatibility',
];

const whyHireItems = [
  { icon: 'fas fa-bullseye', title: 'Pixel-Perfect Design', desc: 'Faithful conversion of Figma, PSD, and XD designs into clean, production-ready code.' },
  { icon: 'fas fa-rocket', title: 'Fast Delivery', desc: 'Reliable timelines and clear communication from kickoff to launch — no surprises.' },
  { icon: 'fas fa-search', title: 'SEO Built-In', desc: 'Every site is architected for Google from day one — semantic HTML, speed, and clean URLs.' },
  { icon: 'fas fa-headset', title: 'Post-Launch Support', desc: 'Available for fixes, content updates, and ongoing improvements after delivery.' },
];

const testimonials = [
  {
    stars: 5, initials: 'SU', color: '#1652F0',
    quote: 'Karaj delivered our university website on time and beyond expectations. The SEO improvements have noticeably increased our organic traffic.',
    name: 'Shobhit University', role: 'Education · New Delhi',
  },
  {
    stars: 5, initials: 'CH', color: '#059669',
    quote: 'Professional, detail-oriented, and proactive. Our e-commerce store looks stunning and performs flawlessly across all devices.',
    name: 'Collationhub', role: 'E-Commerce · Mohali',
  },
  {
    stars: 5, initials: 'BD', color: '#7c3aed',
    quote: 'Great communication and top-notch WordPress skills. Karaj work helped us reach more clients through improved site performance.',
    name: 'BlueMile Digital', role: 'Digital Agency · Mohali',
  },
];

export default function Home() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="container">
          <div className="hero__grid">
            <div className="hero__content">
              <p className="hero__available">
                <span className="hero__available-dot" /> Available for Freelance Work
              </p>
              <h1 className="hero__name">
                Karaj<br />
                <span className="hero__name-blue">Singh</span>
              </h1>
              <p className="hero__subtitle">
                Frontend Developer · WordPress Expert · UI/UX Enthusiast
              </p>
              <p className="hero__bio">
                4+ years crafting fast, responsive, and SEO-optimized websites. From pixel-perfect HTML/CSS builds to complete WordPress solutions — I deliver web experiences that convert visitors into customers.
              </p>
              <div className="hero__ctas">
                <Link to="/projects" className="btn btn-primary">View My Work</Link>
                <Link to="/contact" className="btn btn-outline">Let's Talk</Link>
              </div>
              <div className="hero__stats">
                <div className="stat-block">
                  <div className="stat-number">4+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="hero__stats-divider" />
                <div className="stat-block">
                  <div className="stat-number">20+</div>
                  <div className="stat-label">Projects Delivered</div>
                </div>
                <div className="hero__stats-divider" />
                <div className="stat-block">
                  <div className="stat-number">4</div>
                  <div className="stat-label">Companies Worked</div>
                </div>
              </div>
            </div>
            <div className="hero__visual">
              <div className="hero__avatar">
                <img src="/profile-pic.webp" className="w-100" alt="Karaj Singh Profile picture" />
              </div>
              <div className="hero__badge hero__badge--top">
                <span className="hero__badge-dot" />
                <span>Available to Hire</span>
              </div>
              <div className="hero__badge hero__badge--bottom">
                <span className="hero__badge-label">Stack</span>
                <span className="hero__badge-value">React-JS · HTML · CSS · WordPress</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKILLS CLOUD ===== */}
      <section className="section section-white">
        <div className="container">
          <SectionTitle label="Core Skills" title="Technologies I Work With" subtitle="A versatile skill set built across 4+ years of hands-on projects." />
          <div className="skills-cloud">
            {skills.map((s) => (
              <span key={s} className="skill-tag">{s}</span>
            ))}
          </div>
          <div className="mt-32">
            <Link to="/skills" className="btn btn-outline">Explore All Skills →</Link>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ROW ===== */}
      <section className="section section-chalk">
        <div className="container">
          <SectionTitle label="What I Do" title="Services I Offer" subtitle="From landing pages to full WordPress websites — I deliver clean code and beautiful design tailored to your goals." />
          <div className="services-row grid-3">
            {[
              { icon: 'fas fa-code', title: 'Frontend Development', desc: 'Web Development using React-JS, Tailwind CSS, Bootstrap-5, HTML5/CSS3/JS, jQuery builds with clean semantic code, cross-browser compatibility, and performance optimization.' },
              { icon: 'fab fa-wordpress', title: 'WordPress Development', desc: 'Custom WordPress themes, Elementor page builds, plugin integration, and full website setup for any business.' },
              { icon: 'fas fa-mobile-alt', title: 'Responsive Design', desc: 'Mobile-first design that looks sharp on every screen — phones, tablets, and desktops — with smooth UX throughout.' },
              { icon: 'fas fa-search', title: 'SEO Optimization', desc: 'On-page SEO best practices built into every project — semantic markup, meta structure, fast load times, and clean URLs.' },
              { icon: 'fas fa-paint-brush', title: 'Figma / PSD to HTML', desc: 'Pixel-perfect conversion of design files (Figma, PSD, XD) into production-ready with React-JS, Tailwind CSS, Bootstrap-5, HTML/CSS or WordPress pages.' },
              { icon: 'fas fa-tachometer-alt', title: 'Speed Optimization', desc: 'Website speed audits, Core Web Vitals improvement, image compression, and lazy loading for better Google rankings.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="service-mini card-chalk">
                <div className="icon-box mb-16"><i className={icon} /></div>
                <h3 className="service-mini__title">{title}</h3>
                <p className="service-mini__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <section className="section section-white">
        <div className="container">
          <SectionTitle label="Portfolio" title="Featured Projects" subtitle="A selection of websites I've designed and developed across industries." />
          <div className="grid-3">
            {featuredProjects.map((p) => <ProjectCard key={p.title} {...p} />)}
          </div>
          <div className="text-center mt-40">
            <Link to="/projects" className="btn btn-primary">View All Projects →</Link>
          </div>
        </div>
      </section>

      {/* ===== WHY HIRE ME ===== */}
      <section className="section section-slate">
        <div className="container">
          <div className="why-hire">
            <div className="why-hire__left">
              <SectionTitle label="Why Work With Me" title="Clean Code. Real Results." subtitle="I don't just build websites — I build digital tools that help businesses grow." light />
              <Link to="/contact" className="btn btn-primary mt-24">Start a Project</Link>
            </div>
            <div className="grid-2 why-hire__right">
              {whyHireItems.map(({ icon, title, desc }) => (
                <div key={title} className="why-item">
                  <i className={`${icon} why-item__icon`} />
                  <h4 className="why-item__title">{title}</h4>
                  <p className="why-item__desc">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section section-chalk">
        <div className="container">
          <SectionTitle label="Testimonials" title="What Clients Say" />
          <div className="grid-3">
            {testimonials.map(({ stars, initials, color, quote, name, role }) => (
              <div key={name} className="testimonial-card card">
                <div className="stars mb-16">{'★'.repeat(stars)}</div>
                <p className="testimonial-quote">"{quote}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar" style={{ background: color }}>{initials}</div>
                  <div>
                    <p className="testimonial-name">{name}</p>
                    <p className="testimonial-role">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="section section-cobalt">
        <div className="container text-center">
          <h2 className="text-white mb-12">Ready to Build Something Great?</h2>
          <p className="cta-sub mb-32">Let's create a website that works as hard as you do. Get in touch today.</p>
          <div className="flex justify-center flex-wrap gap-16">
            <Link to="/contact" className="btn btn-white">Start a Project</Link>
            <a href="mailto:karajsingh368@gmail.com" className="btn btn-ghost">karajsingh368@gmail.com</a>
          </div>
        </div>
      </section>
    </main>
  );
}
