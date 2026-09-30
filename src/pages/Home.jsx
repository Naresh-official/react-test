import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Home() {
  const [count, setCount] = useState(0);
  const [feedback, setFeedback] = useState('');

  return (
    <div className="page home-page">
      <section className="hero-section">
        <h1 className="hero-title">🚀 Welcome to React Vite Test</h1>
        <p className="hero-subtitle">
          A lightweight, clean testbed built with Vite, React 19, JavaScript, and React Router.
        </p>
        <div className="hero-cta">
          <Link to="/dashboard" className="btn btn-primary">
            Explore Dashboard
          </Link>
          <Link to="/users" className="btn btn-secondary">
            View Users Route
          </Link>
        </div>
      </section>

      <section className="cards-grid">
        <div className="card">
          <h3>⚡ State Test Counter</h3>
          <p>Test React state reactivity and component renders:</p>
          <div className="counter-box">
            <span className="counter-value">{count}</span>
            <div className="btn-group">
              <button className="btn btn-sm" onClick={() => setCount((c) => c - 1)}>
                -1
              </button>
              <button className="btn btn-sm" onClick={() => setCount(0)}>
                Reset
              </button>
              <button className="btn btn-sm btn-primary" onClick={() => setCount((c) => c + 1)}>
                +1
              </button>
            </div>
          </div>
        </div>

        <div className="card">
          <h3>📝 Input & Form Test</h3>
          <p>Test controlled inputs and two-way binding:</p>
          <input
            type="text"
            className="input-field"
            placeholder="Type something here..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          {feedback && (
            <p className="live-preview">
              Live text: <strong>{feedback}</strong>
            </p>
          )}
        </div>

        <div className="card">
          <h3>🧭 Available Routes</h3>
          <ul className="routes-list">
            <li>
              <code>/</code> - Home page (this page)
            </li>
            <li>
              <code>/dashboard</code> - Mock analytics & metrics
            </li>
            <li>
              <code>/users</code> - Filterable list of mock users
            </li>
            <li>
              <code>/users/:id</code> - Dynamic user profile detail view
            </li>
            <li>
              <code>/about</code> - Tech stack and setup info
            </li>
            <li>
              <Link to="/non-existent-route"><code>/404-test</code></Link> - Test 404 page
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
