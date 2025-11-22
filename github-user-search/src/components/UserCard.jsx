import React from 'react';

const UserCard = ({ user }) => {
  if (!user) return null;

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '15px',
      margin: '10px 0',
      borderRadius: '8px',
      maxWidth: '400px'
    }}>
      <img
        src={user.avatar_url}
        alt={user.login}
        style={{ width: '80px', borderRadius: '50%' }}
      />
      <h3>{user.name || user.login}</h3>
      <p>{user.bio}</p>
      <p>
        <strong>Followers:</strong> {user.followers} | <strong>Following:</strong> {user.following}
      </p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        View GitHub Profile
      </a>
    </div>
  );
};

export default UserCard;
