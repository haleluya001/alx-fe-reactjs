import React, { useContext } from 'react';
import UserContext from '../UserContext';

function UserProfile() {
  const users = useContext(UserContext);

  return (
    <>
      {users.map((user, index) => (
        <div
          key={index}
          style={{
            border: '1px solid gray',
            padding: '15px',
            margin: '15px 0',
            borderRadius: '8px',
            boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
          }}
        >
          <h2 style={{ color: 'blue', fontSize: '1.8rem', marginBottom: '10px' }}>{user.name}</h2>
          <p style={{ marginBottom: '5px' }}>
            Age: <span style={{ fontWeight: 'bold' }}>{user.age}</span>
          </p>
          <p style={{ fontStyle: 'italic', color: 'gray' }}>Bio: {user.bio}</p>
        </div>
      ))}
    </>
  );
}

export default UserProfile;
