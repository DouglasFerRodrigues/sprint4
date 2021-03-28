import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './Routes.js';
import Reader from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';

function App() {
  const [user, setUser] = useState(null);

  const actionLogin = (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL,
      passwd: '',
    };
    setUser(newUser);
  };

  if (user === null) {
    return <Login onReceive={actionLogin} />;
  }

  return (
    <BrowserRouter>
      <Reader user={user} />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
