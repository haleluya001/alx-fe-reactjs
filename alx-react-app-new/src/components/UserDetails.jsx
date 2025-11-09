import { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div style={{ border: '1px solid gray', padding: '15px', borderRadius: '8px', maxWidth: '400px', margin: '20px auto', boxShadow: '2px 2px 8px rgba(0,0,0,0.1)' }}>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
    </div>
  );
}

export default UserDetails;
