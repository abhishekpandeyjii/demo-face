import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="error-section" id="not-found">
      <div className="particles-bg">
        {[...Array(8)].map((_, i) => (
          <div className="particle" key={i}></div>
        ))}
      </div>
      <div className="container">
        <div className="error-content">
          <div className="error-number">404</div>
          <h2>Page Not Found</h2>
          <p>
            Oops! The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
          <Link to="/" className="btn-primary-custom">
            <i className="fas fa-home"></i> Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
