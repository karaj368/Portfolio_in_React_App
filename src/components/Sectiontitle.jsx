export default function Sectiontitle({ label, title, subtitle, center = false, light = false }) {
  return (
    <div className={`section-header${center ? ' text-center' : ''}`}>
      {label && <span className="section-label" style={light ? { color: '#93c5fd' } : {}}>{label}</span>}
      <h2 style={light ? { color: '#fff' } : {}}>{title}</h2>
      {subtitle && (
        <p style={light ? { color: '#9ca3af' } : {}}>{subtitle}</p>
      )}
    </div>
  );
}