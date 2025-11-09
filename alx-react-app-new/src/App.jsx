import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Header />

      <main style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <UserProfile 
          name="John Doe" 
          age={30} 
          bio="I love traveling to new cities and exploring different cultures." 
        />

        <UserProfile 
          name="Jane Smith" 
          age={25} 
          bio="Food enthusiast and city explorer. Always seeking the best coffee!" 
        />

        <MainContent />
      </main>

      <Footer />
    </div>
  );
}

export default App;
