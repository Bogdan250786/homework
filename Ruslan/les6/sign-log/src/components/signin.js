import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Signin = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const onClick = () => {
    if (login && password) {
      const users = JSON.parse(localStorage.getItem('newUsers'));
      if (users && users.find(el => el.login === login && el.password === password)) {
        localStorage.setItem('isAuthenticated', true);
        history.push('/');
      } else alert('Wrong password or login');
    }
  }

  return (
    <div>
      <Link to="/signup">Sign up</Link>
      <form className="form-signin">
        <h2 className="form-signin-heading"> Please sign in </h2>
        <label htmlFor="inputText" className="sr-only">
          Login
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Login"
          onChange={e => setLogin(e.target.value)} value={login} required />
        <label htmlFor="inputPassword" className="sr-only">
          Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
          value={password} />
        <button className="btn-login" type="button" onClick={() => onClick()}>
           Sign in
        </button>
      </form>
    </div>
  );
};

export default Signin;