import { useState } from 'react';
import ProjectCard from '../components/Projectcard';
import { Link } from 'react-router-dom';
import './Projects.css';

const allProjects = [
  { title: 'Shobhit University', category: 'Education', description: 'Premier B.Tech and engineering university portal with full admissions, course listings, and student portals — high-traffic, SEO-optimized WordPress build.', tech: ['WordPress', 'Elementor', 'SEO', 'JavaScript'], liveUrl: 'https://www.shobhituniversity.ac.in', color: 'linear-gradient(135deg,#dbeafe,#bfdbfe)', icon: '🏛️', filter: 'education' },
  { title: 'Shobhit ODL', category: 'Education · ODL', description: 'Open Distance Learning platform for Shobhit University — course enrollment, curriculum details, and student resources for remote learners.', tech: ['WordPress', 'Elementor', 'CSS3'], liveUrl: 'https://shobhitodl.in', color: 'linear-gradient(135deg,#e0e7ff,#c7d2fe)', icon: '💻', filter: 'education' },
  { title: 'STEM Insights', category: 'Education · STEM', description: 'STEM education resource platform featuring research articles, insights, and learning materials for students and educators worldwide.', tech: ['WordPress', 'SEO', 'Bootstrap', 'CSS3'], liveUrl: 'https://steminsights.org', color: 'linear-gradient(135deg,#cffafe,#a5f3fc)', icon: '🔬', filter: 'education' },
  { title: 'Shobhit Online', category: 'Education · E-Learning', description: 'Online learning portal for Shobhit University is digital education initiatives, featuring course content, registration, and student login.', tech: ['WordPress', 'JavaScript', 'CSS3'], liveUrl: 'https://shobhit.online', color: 'linear-gradient(135deg,#ede9fe,#ddd6fe)', icon: '🎓', filter: 'education' },
  { title: 'Devdoot', category: 'Business · Portal', description: 'Digital business platform with clean, conversion-focused design built for strong performance and user engagement.', tech: ['WordPress', 'HTML/CSS', 'JavaScript'], liveUrl: 'https://devdoot.org', color: 'linear-gradient(135deg,#fce7f3,#fbcfe8)', icon: '🌐', filter: 'business' },
  { title: 'Shemesh Diamonds', category: 'E-Commerce · Jewelry', description: 'Premium diamond jewelry e-commerce platform with elegant product catalog, filter-based navigation, and optimized checkout flow.', tech: ['WordPress', 'WooCommerce', 'SCSS', 'CSS3'], liveUrl: 'https://shemesh-diamonds.com', color: 'linear-gradient(135deg,#d1fae5,#a7f3d0)', icon: '💎', filter: 'ecommerce' },
  { title: 'Grand Diamonds', category: 'E-Commerce · Jewelry', description: 'High-end diamond and gemstone e-commerce with rich product detail pages, luxury branding, and seamless shopping experience.', tech: ['WooCommerce', 'WordPress', 'SCSS'], liveUrl: 'https://granddiamonds.com', color: 'linear-gradient(135deg,#fef3c7,#fde68a)', icon: '💍', filter: 'ecommerce' },
  { title: 'Shemesh Goud (Belgium)', category: 'E-Commerce · Belgium', description: 'Belgian jewelry e-commerce site with multi-language readiness, clean product layouts, and strong brand presentation.', tech: ['WordPress', 'WooCommerce', 'CSS3'], liveUrl: 'https://shemeshgoud.be', color: 'linear-gradient(135deg,#fef9c3,#fef08a)', icon: '🇧🇪', filter: 'ecommerce' },
  { title: 'Saugaat (Australia)', category: 'E-Commerce · Gifts', description: 'Australian gifting e-commerce platform with culturally rich product catalog, international shipping, and mobile-first responsive design.', tech: ['WooCommerce', 'WordPress', 'Bootstrap'], liveUrl: 'https://www.saugaat.com.au', color: 'linear-gradient(135deg,#fce7f3,#fbcfe8)', icon: '🎁', filter: 'ecommerce' },
  { title: 'Teama Supplements (AU)', category: 'E-Commerce · Health', description: 'Australian sports supplement store with product filtering, subscription options, and trust-building design tailored for fitness enthusiasts.', tech: ['WooCommerce', 'WordPress', 'Responsive'], liveUrl: 'https://www.teamaasupplements.com.au', color: 'linear-gradient(135deg,#dcfce7,#bbf7d0)', icon: '💪', filter: 'ecommerce' },
  { title: 'Road King Australia', category: 'Business · Transport', description: 'Australian transport and logistics company website with service listings, quote request forms, and SEO-optimized content for national reach.', tech: ['WordPress', 'Elementor', 'SEO'], liveUrl: 'https://www.roadkingaustralia.com.au', color: 'linear-gradient(135deg,#f1f5f9,#e2e8f0)', icon: '🚚', filter: 'business' },
  { title: 'Excel Migration (AU)', category: 'Business · Immigration', description: 'Australian immigration consultancy with detailed visa service pages, eligibility information, and trust-building client testimonials.', tech: ['WordPress', 'CSS3', 'SEO'], liveUrl: 'https://www.excelmigration.com.au', color: 'linear-gradient(135deg,#e0e7ff,#c7d2fe)', icon: '🛂', filter: 'business' },
  { title: 'MDS Cleaning', category: 'Business · Services', description: 'Professional cleaning services company website with service breakdowns, booking inquiry forms, and local SEO optimization.', tech: ['WordPress', 'Elementor', 'Bootstrap'], liveUrl: 'https://www.mdscleaning.com', color: 'linear-gradient(135deg,#ffedd5,#fed7aa)', icon: '🧹', filter: 'business' },
  { title: 'Tour My India', category: 'Travel', description: 'Golden Triangle tour package website with rich destination photography, itinerary breakdowns, and SEO-optimized landing pages.', tech: ['WordPress', 'SEO', 'Responsive'], liveUrl: 'https://www.tourmyindia.com/golden-triangle', color: 'linear-gradient(135deg,#fef3c7,#fde68a)', icon: '✈️', filter: 'travel' },
  { title: 'Bandhavgarh National Park', category: 'Travel · Wildlife', description: 'Wildlife tourism website for Bandhavgarh National Park with safari booking info, tiger spotting guides, and nature photography showcase.', tech: ['WordPress', 'SEO', 'CSS3'], liveUrl: 'https://www.bandhavgarh-national-park.com', color: 'linear-gradient(135deg,#dcfce7,#bbf7d0)', icon: '🐯', filter: 'travel' },
  { title: 'Learning Ladder ELC (AU)', category: 'Childcare · Health', description: 'Australian early learning centre website with enrollment info, age-group programs, facility tours, and parent resources.', tech: ['WordPress', 'CSS3', 'SEO'], liveUrl: 'https://www.learningladderelc.com.au', color: 'linear-gradient(135deg,#cffafe,#a5f3fc)', icon: '👶', filter: 'business' },
];

const filters = ['All', 'Education', 'E-Commerce', 'Travel', 'Business'];

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? allProjects
    : allProjects.filter(p => p.filter === active.toLowerCase().replace('-', ''));

  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <span className="section-label">Portfolio</span>
          <h1>Projects &<br /><span className="text-gradient">Work Samples</span></h1>
          <p>20+ live projects across education, e-commerce, travel, and more — each built with performance and purpose.</p>
        </div>
      </section>

      <section className="section section-chalk">
        <div className="container">
          {/* Filter Bar */}
          <div className="filter-bar mb-40">
            {filters.map((f) => (
              <button
                key={f}
                className={`filter-btn${active === f ? ' filter-btn--active' : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="projects-grid">
            {filtered.map((p) => <ProjectCard key={p.title} {...p} />)}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray mt-40">No projects found in this category.</p>
          )}
        </div>
      </section>

      <section className="section section-cobalt">
        <div className="container text-center">
          <h2 className="text-white mb-12">Like What You See?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 28 }}>Let's build something exceptional together. I'm currently available for freelance projects.</p>
          <Link to="/contact" className="btn btn-white">Get in Touch</Link>
        </div>
      </section>
    </main>
  );
}