import { Routes, Route } from 'react-router-dom';
import ProfileDetails from '../pages/ProfileDetails';
import ProfileSettings from '../pages/ProfileSettings';

const Profile = () => {
  return (
    <div>
      <h2>Profile</h2>

      {/* Nested Routes */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;
