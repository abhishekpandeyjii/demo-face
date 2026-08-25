import { useScrollReveal } from '../../../hooks/useScrollReveal';

export default function SectionTitle({ subtitle, title, titleHighlight, description, className = '' }) {
  const ref = useScrollReveal();

  return (
    <div className={`section-title fade-in ${className}`} ref={ref}>
      {subtitle && (
        <div className="sub-title">
          <i className="fas fa-circle"></i>
          {subtitle}
          <i className="fas fa-circle"></i>
        </div>
      )}
      <h2>
        {title}{' '}
        {titleHighlight && <span className="gradient-text">{titleHighlight}</span>}
      </h2>
      {description && <p>{description}</p>}
    </div>
  );
}
