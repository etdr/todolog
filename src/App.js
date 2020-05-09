import React, {useState, useEffect} from 'react';
import './App.scss';

import Navbar from './home/Navbar';
import Footer from './home/Footer';
import Todolist from './home/Todolist';
import Auth from './home/Auth';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState('');

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
    setLoggedIn(true);
  };

  const logOut = () => {
    setLoggedIn(false);
    setToken('');
    localStorage.removeItem('token');
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      updateToken(localStorage.getItem('token'));
    }
  }, []);

  return (
    <div className="App">
      <Navbar loggedIn={loggedIn} logOut={logOut} />
      { loggedIn ? <Todolist token={token} /> : <Auth updateToken={updateToken} /> }
      <Footer /> 
    </div>
  );
}


export default App;
