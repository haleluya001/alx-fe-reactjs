import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';
import UserContext from './UserContext'; // import the context

function App() {
  const userDataList = [
    { name: "John Doe", age: 30, bio: "I love traveling to new cities and exploring different cultures." },
    { name: "Jane Smith", age: 25, bio: "Food enthusiast and city explorer. Always seeking the best coffee!" }
  ];

  return (
    <UserContext.Provider value={userDataList}>
      <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
        <Header />

        <main style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
          {/* Map through the userDataList from context */}
          {userDataList.map((user, index) => (
            <UserProfile 
              key={index}
              name={user.name}
              age={user.age}
              bio={user.bio}
            />
          ))}

          <MainContent />

          <Counter />
        </main>

        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
