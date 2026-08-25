import { Link } from 'react-router-dom';

export default function PageBanner({ title, breadcrumbs = [] }) {
  return (
    <section className="page-banner" id="page-banner">
      <div className="particles-bg">
        {[...Array(8)].map((_, i) => (
          <div className="particle" key={i}></div>
        ))}
      </div>
      <div className="container">
        <h1>{title}</h1>
        <nav className="breadcrumb-nav">
          <Link to="/">Home</Link>
          {breadcrumbs.map((crumb, index) => (
            <span key={index}>
              <span>/</span>
              {crumb.path ? (
                <Link to={crumb.path}>{crumb.label}</Link>
              ) : (
                <span className="current">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
