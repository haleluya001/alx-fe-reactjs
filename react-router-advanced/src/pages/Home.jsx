import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/profile/details">Profile Details</Link><br />
      <Link to="/profile/settings">Profile Settings</Link><br />
      <Link to="/blog/1">Blog Post 1</Link>
    </div>
  );
};

export default Home;
