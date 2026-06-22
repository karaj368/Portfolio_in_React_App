import './Skillcard.css';

export function SkillCard({ icon, name, level, percent }) {
  return (
    <div className="skill-card card-chalk">
      <div className="skill-card__header">
        <div className="skill-card__left">
          <span className="skill-card__icon">{icon}</span>
          <span className="skill-card__name">{name}</span>
        </div>
        <span className="skill-card__level">{level}</span>
      </div>
      <div className="skill-bar-track">
        <div className="skill-bar-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

export function ServiceCard({ icon, title, description, features = [] }) {
  return (
    <div className="service-card card">
      <div className="service-card__inner">
        <div className="icon-box icon-box-lg mb-16">
          <i className={icon} />
        </div>
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__desc">{description}</p>
        {features.length > 0 && (
          <ul className="check-list mt-16">
            {features.map((f) => (
              <li key={f} className="check-item">
                <i className="fas fa-check check-icon" />
                {f}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}