import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_USERS, type User } from '../types';

export function Users() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('All');

  const roles = ['All', ...Array.from(new Set(MOCK_USERS.map((u) => u.role)))];

  const filteredUsers = MOCK_USERS.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'All' || user.role === filterRole;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="page users-page">
      <div className="page-header">
        <div>
          <h2>👥 Users List</h2>
          <p className="page-description">Testing list rendering, search filtering, and dynamic route links.</p>
        </div>
      </div>

      <div className="filter-bar">
        <input
          type="text"
          className="input-field"
          placeholder="Search by name or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="select-field"
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
        >
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>

      <div className="table-responsive">
        <table className="custom-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user: User) => (
                <tr key={user.id}>
                  <td>#{user.id}</td>
                  <td>
                    <strong>{user.name}</strong>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <span className={`badge badge-${user.status.toLowerCase()}`}>
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <Link to={`/users/${user.id}`} className="btn btn-sm btn-outline">
                      View Profile →
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-4">
                  No users found matching "{searchTerm}".
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
