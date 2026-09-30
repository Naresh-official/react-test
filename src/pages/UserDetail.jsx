import { useParams, Link, useNavigate } from 'react-router-dom';
import { MOCK_USERS } from '../mockData';

export function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const userId = Number(id);
  const user = MOCK_USERS.find((u) => u.id === userId);

  if (!user) {
    return (
      <div className="page user-detail-page">
        <div className="card text-center">
          <h2>⚠️ User Not Found</h2>
          <p>No user exists with ID: <code>{id}</code></p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link to="/users" className="btn btn-primary">
              ← Back to Users
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page user-detail-page">
      <div className="page-header">
        <button className="btn btn-sm btn-outline" onClick={() => navigate('/users')}>
          ← Back to Users
        </button>
      </div>

      <div className="card user-profile-card">
        <div className="profile-header">
          <div className="avatar">
            {user.name
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </div>
          <div>
            <h2>{user.name}</h2>
            <p className="profile-email">{user.email}</p>
          </div>
          <span className={`badge badge-${user.status.toLowerCase()}`}>
            {user.status}
          </span>
        </div>

        <hr className="divider" />

        <div className="profile-details-grid">
          <div>
            <span className="label">User ID</span>
            <p className="value">#{user.id}</p>
          </div>
          <div>
            <span className="label">Job Role</span>
            <p className="value">{user.role}</p>
          </div>
        </div>

        <div className="bio-section">
          <span className="label">Biography</span>
          <p className="value">{user.bio}</p>
        </div>

        <div className="route-test-info">
          <p>
            ℹ️ <strong>Route Param Test:</strong> Currently reading <code>useParams().id</code> ={' '}
            <code>"{id}"</code>
          </p>
        </div>
      </div>
    </div>
  );
}
