import React, { useState } from 'react';

const baseUrl = 'http://localhost:3012/user/';

const Auth = (props) => {

  const [signup, setSignup] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const submit = (e) => {
    e.preventDefault();
    const url = signup ? baseUrl + 'newuser' : baseUrl + 'signin';
    const reqBody = {
      user: {
        username: email,
        password: password
      }
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reqBody)
    }).then(response => response.json())
      .then(rjson => {
        //console.log(rjson);
        props.updateToken(rjson.sessionToken);
      })
      .catch(err => console.log(err.message));
  };

  return (
    <div id="authdiv">
      <form onSubmit={e => submit(e)}>
        <h2>{signup ? 'signup' : 'login'}</h2>
        <label htmlFor="email">Email</label>
        <input name="email" value={email} onChange={event => setEmail(event.target.value)} required />
        <br />
        <label htmlFor="password">Password</label>
        <input name="password" type="password" value={password} onChange={event => setPassword(event.target.value)} required />
        <br />
        <button type="button" onClick={() => setSignup(!signup)}>{signup ? 'Have an account? Login!' : 'Need an account? Signup!'}</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
};

export default Auth;





/*
App
    just an Auth component

    Todolist
*/