import { Link, useLocation } from 'react-router-dom';

export function NotFound() {
  const location = useLocation();

  return (
    <div className="page not-found-page">
      <div className="card text-center not-found-card">
        <h1 className="not-found-code">404</h1>
        <h2>Page Not Found</h2>
        <p className="not-found-desc">
          No matching route for path: <code>{location.pathname}</code>
        </p>
        <div style={{ marginTop: '1.5rem' }}>
          <Link to="/" className="btn btn-primary">
            ← Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
