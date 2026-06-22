import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import './Resume.css';

const experience = [
  {
    title: 'Frontend Developer · WordPress Developer',
    company: 'Shobhit University',
    location: 'New Delhi, India',
    period: 'Dec 2023 – Present',
    accentColor: 'var(--cobalt)',
    bullets: [
      'Leading frontend development and WordPress management for a premier B.Tech engineering university in Delhi NCR.',
      'Managing high-traffic sub-sites for admissions, ODL, and academic programs — ensuring SEO performance, speed, and accuracy.',
      'Implementing on-page SEO improvements that boosted organic visibility for key university landing pages.',
      'Delivering fast, accurate page updates and campaign landing pages in collaboration with marketing teams.',
    ],
    tech: ['WordPress', 'Elementor', 'SEO', 'HTML/CSS', 'JavaScript', 'SCSS'],
  },
  {
    title: 'WordPress Developer',
    company: 'BlueMile Digital',
    location: 'Mohali Sec.74, India',
    period: 'Sep 2023 – Dec 2023',
    accentColor: 'var(--sky)',
    bullets: [
      'Built and maintained WordPress websites for clients across Web Design, E-commerce, SEO, and Online Marketing.',
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
    accentColor: 'var(--sky)',
    bullets: [
      'Developed premium e-commerce and jewelry websites with focus on visual quality and conversion-optimized product layouts.',
      'Built custom WooCommerce stores with product filtering, variable pricing, and cart optimization.',
      'Converted PSD/XD design files into pixel-perfect, responsive WordPress pages for jewelry and fashion clients.',
    ],
    tech: ['WooCommerce', 'WordPress', 'SCSS', 'Bootstrap', 'Figma to HTML'],
  },
  {
    title: 'Frontend Developer',
    company: 'TIS India',
    location: 'Sector-8, Noida, India',
    period: 'Jul 2021 – Jan 2023',
    accentColor: '#9ca3af',
    bullets: [
      'Built responsive HTML/CSS templates and JavaScript-enhanced UIs for clients across Web Design, Digital Marketing, and Salesforce Consulting.',
      'Ensured cross-browser compatibility and maintained version control throughout the project lifecycle.',
      'Collaborated with backend developers and project managers in an agile team environment.',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'GitHub'],
  },
];

const highlights = [
  { icon: 'fas fa-globe', title: 'International Projects', desc: 'Delivered websites for clients in Australia, Belgium, and across India — adapting to varied business and cultural requirements.' },
  { icon: 'fab fa-wordpress', title: 'Full-Stack WordPress', desc: 'From theme setup to plugin configuration and custom CSS — I handle the complete WordPress development lifecycle.' },
  { icon: 'fas fa-search', title: 'SEO-First Mindset', desc: 'Every site I build is architected for discoverability — semantic HTML, fast load times, and clean URLs.' },
  { icon: 'fas fa-industry', title: 'Multi-Industry Experience', desc: 'Built websites for education, e-commerce, jewelry, travel, childcare, immigration, cleaning, transport, and more.' },
];

export default function Resume() {
  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <div className="resume-banner-inner">
            <div>
              <span className="section-label">Resume</span>
              <h1>Experience &<br /><span className="text-gradient">Credentials</span></h1>
              <p>4+ years of professional web development experience across agencies and institutions, with a track record of delivering quality digital products.</p>
            </div>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); alert('Add your CV PDF file and update this link.'); }}
              className="btn btn-primary resume-download-btn"
            >
              <i className="fas fa-download" /> Download CV
            </a>
          </div>
        </div>
      </section>

      {/* AT A GLANCE */}
      <section className="resume-stats section-cobalt">
        <div className="container">
          <div className="resume-stats__grid">
            {[
              { num: '4+', label: 'Years Professional Experience' },
              { num: '20+', label: 'Websites Delivered' },
              { num: '4', label: 'Companies Worked At' },
              { num: '3+', label: 'Countries Served (IN, AU, BE)' },
            ].map(({ num, label }) => (
              <div key={label} className="stat-block text-center">
                <div className="stat-number" style={{ color: '#fff' }}>{num}</div>
                <div className="stat-label" style={{ color: 'rgba(255,255,255,0.65)' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL SUMMARY */}
      <section className="section section-chalk">
        <div className="container">
          <SectionTitle label="Overview" title="Technical Summary" />
          <div className="card resume-summary">
            <p className="mb-16">
              I'm a <strong>Frontend Developer and WordPress Expert</strong> with over 4 years of hands-on experience building responsive, SEO-optimized web applications. My core competencies lie in HTML5, CSS3, SCSS, JavaScript, Bootstrap, and WordPress — technologies I've used daily across a variety of client-facing projects.
            </p>
            <p className="mb-16">
              I specialize in translating design files (Figma, PSD, Adobe XD) into pixel-perfect, performance-optimized websites. I'm experienced with WooCommerce e-commerce builds, Elementor page construction, and custom WordPress theme development — having delivered projects for educational institutions, digital agencies, e-commerce brands, and international businesses.
            </p>
            <p>
              Beyond development, I bring a strong understanding of on-page SEO, Core Web Vitals optimization, and cross-browser compatibility — ensuring every website I build doesn't just look great but also ranks well and loads fast.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section section-white">
        <div className="container">
          <SectionTitle label="Work History" title="Professional Experience" />
          <div className="resume-exp-list">
            {experience.map((job, i) => (
              <div key={job.company + i} className="resume-exp-item card-chalk">
                <div className="resume-exp-item__accent" style={{ background: job.accentColor }} />
                <div className="resume-exp-item__content">
                  <div className="resume-exp-item__header">
                    <div>
                      <h3 className="resume-exp-item__title">{job.title}</h3>
                      <p className="resume-exp-item__company" style={{ color: job.accentColor }}>
                        {job.company} · {job.location}
                      </p>
                    </div>
                    <span className="resume-exp-item__period">{job.period}</span>
                  </div>
                  <ul className="resume-exp-item__bullets">
                    {job.bullets.map((b) => (
                      <li key={b} className="check-item">
                        <i className="fas fa-circle-dot check-icon" style={{ fontSize: '0.6rem', marginTop: 5 }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="tech-pills mt-16">
                    {job.tech.map((t) => <span key={t} className="tech-pill">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section section-chalk">
        <div className="container">
          <SectionTitle label="Education" title="Academic Qualifications" />
          <div className="grid-2">
            {[
              { icon: 'fas fa-graduation-cap', title: 'Master of Arts (M.A.)', inst: 'Panjab University', loc: 'Abohar, Punjab, India', period: '2020 – 2022' },
              { icon: 'fas fa-certificate', title: 'DCA – Diploma in Computer Applications', inst: 'ISO 1901:2015 Institute', loc: 'Abohar, Punjab, India', period: '2020 – 2021' },
            ].map(({ icon, title, inst, loc, period }) => (
              <div key={title} className="card edu-resume-card">
                <div className="edu-resume-card__inner">
                  <div className="icon-box icon-box-lg flex-shrink-0">
                    <i className={icon} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', marginBottom: 4 }}>{title}</h3>
                    <p className="text-cobalt font-semibold" style={{ fontSize: '0.88rem', marginBottom: 4 }}>{inst}</p>
                    <p className="text-gray" style={{ fontSize: '0.82rem' }}>{loc}</p>
                    <span className="badge mt-8">{period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="section section-white">
        <div className="container">
          <SectionTitle label="Key Highlights" title="What Sets Me Apart" />
          <div className="grid-2">
            {highlights.map(({ icon, title, desc }) => (
              <div key={title} className="highlight-card card-chalk">
                <div className="icon-box mb-12"><i className={icon} /></div>
                <h4 style={{ fontFamily: 'var(--font-display)', marginBottom: 6 }}>{title}</h4>
                <p style={{ fontSize: '0.87rem', color: '#6b7280' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD CTA */}
      <section className="section section-cobalt">
        <div className="container text-center">
          <h2 className="text-white mb-12">Want the Full Resume?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 28 }}>Download my CV for the complete picture — or get in touch directly.</p>
          <div className="flex justify-center flex-wrap gap-16">
            <a href="#" onClick={(e) => { e.preventDefault(); alert('Add your PDF CV file link here.'); }} className="btn btn-white">
              <i className="fas fa-download" /> Download CV
            </a>
            <Link to="/contact" className="btn btn-ghost">Hire Me</Link>
          </div>
        </div>
      </section>
    </main>
  );
}