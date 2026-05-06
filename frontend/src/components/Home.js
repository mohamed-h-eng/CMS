import React from 'react';

export default function Home({ users, loading, error }) {
  return (
    <div style={{ maxWidth: 800, margin: '40px auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>CMS Frontend</h1>
      <p>This is a starter React frontend connected to the backend API.</p>

      <h2>Users</h2>
      {loading && <p>Loading users...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && (
        <ul>
          {users.map(user => (
            <li key={user._id}>{user.name} - {user.email}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
