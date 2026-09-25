export function About() {
  return (
    <div className="page about-page">
      <div className="page-header">
        <h2>ℹ️ About This Project</h2>
        <p className="page-description">
          A minimalistic React sample application set up specifically for testing and experimentation.
        </p>
      </div>

      <div className="card">
        <h3>🛠️ Tech Stack & Features</h3>
        <ul className="feature-list">
          <li>
            <strong>Build Tool:</strong> Vite 8 (Ultra-fast ESM bundling & HMR)
          </li>
          <li>
            <strong>Frontend Library:</strong> React 19 + React DOM
          </li>
          <li>
            <strong>Language:</strong> TypeScript (strict type checking enabled)
          </li>
          <li>
            <strong>Routing:</strong> React Router DOM with nested layout and dynamic routing
          </li>
          <li>
            <strong>Environment Variables:</strong> Zero env configuration needed
          </li>
        </ul>
      </div>

      <div className="card" style={{ marginTop: '1.5rem' }}>
        <h3>🚀 Quick Commands</h3>
        <pre className="code-block">
{`# Start local development server
npm run dev

# Run TypeScript check & build for production
npm run build

# Preview production build locally
npm run preview`}
        </pre>
      </div>
    </div>
  );
}
