import { useState } from 'react';

export function Dashboard() {
  const [timeRange, setTimeRange] = useState<'24h' | '7d' | '30d'>('7d');

  const stats = [
    { label: 'Total Requests', value: timeRange === '24h' ? '12,450' : timeRange === '7d' ? '86,300' : '342,100', change: '+12.5%' },
    { label: 'Active Sessions', value: timeRange === '24h' ? '412' : timeRange === '7d' ? '1,890' : '6,230', change: '+8.1%' },
    { label: 'Avg. Response Time', value: '42ms', change: '-4.2%' },
    { label: 'Uptime', value: '99.98%', change: 'Stable' },
  ];

  return (
    <div className="page dashboard-page">
      <div className="page-header">
        <div>
          <h2>📊 Test Dashboard</h2>
          <p className="page-description">Sample metric cards and interactive UI toggles.</p>
        </div>
        <div className="filter-group">
          {(['24h', '7d', '30d'] as const).map((range) => (
            <button
              key={range}
              className={`filter-pill ${timeRange === range ? 'active' : ''}`}
              onClick={() => setTimeRange(range)}
            >
              {range.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-card">
            <span className="stat-label">{stat.label}</span>
            <span className="stat-value">{stat.value}</span>
            <span className={`stat-badge ${stat.change.startsWith('+') ? 'positive' : ''}`}>
              {stat.change}
            </span>
          </div>
        ))}
      </div>

      <div className="dashboard-content-grid">
        <div className="card">
          <h3>System Health</h3>
          <ul className="health-list">
            <li>
              <span>Vite Dev Server</span>
              <span className="status-badge active">Online</span>
            </li>
            <li>
              <span>TypeScript Checker</span>
              <span className="status-badge active">Strict</span>
            </li>
            <li>
              <span>React Router DOM</span>
              <span className="status-badge active">v7 / v6</span>
            </li>
            <li>
              <span>Environment Variables</span>
              <span className="status-badge neutral">None (Pure)</span>
            </li>
          </ul>
        </div>

        <div className="card">
          <h3>Recent Test Activity</h3>
          <div className="activity-timeline">
            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <div>
                <strong>Route Mounted: /dashboard</strong>
                <p>Rendered successfully with client-side routing.</p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <div>
                <strong>Hot Module Replacement (HMR)</strong>
                <p>Vite fast reload ready.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
