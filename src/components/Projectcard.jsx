import './Projectcard.css';

export default function ProjectCard({ title, projectImg, category, description, tech = [], liveUrl, color = '#dbeafe' }) {
  return (
    <div className="project-card card">
      <div className="project-card__thumb" style={{ background: color }}>
        <img
          src={projectImg}
          alt={title}
          className="project-card__image"
        />
      </div>
      <div className="project-card__body">
        <span className="badge">{category}</span>
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__desc">{description}</p>
        <div className="tech-pills">
          {tech.map((t) => (
            <span key={t} className="tech-pill">{t}</span>
          ))}
        </div>
        <div className="project-card__actions">
          {liveUrl ? (
            <a href={liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary project-card__btn">
              <i className="fas fa-external-link-alt" /> View Live
            </a>
          ) : (
            <span className="btn btn-outline project-card__btn project-card__btn--disabled">
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
}