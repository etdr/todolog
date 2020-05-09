import React from 'react';
import './Navbar.scss';

const Navbar = (props) => {

  return (
    <nav id="navbar">
      <h1>Todo log</h1>
      <span id="navspacer"></span>
      <ul>
        <li>Home</li>
        {props.loggedIn ? <li>Account</li> : null}
        {props.loggedIn ? null : <li>Sign Up</li>}
        {props.loggedIn ? <li onClick={() => props.logOut()}>Log Out</li> : null}
      </ul>
    </nav>
  );
};



export default Navbar;