import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();
  const onClick = () => {
    if (login && password && email){
      const newUser = {
        login,
        password,
        email
      };
      const newUsers = JSON.parse(localStorage.getItem('newUsers')) || [];
      newUsers.push(newUser);
      localStorage.setItem('newUsers', JSON.stringify(newUsers));
      history.push('/');
    }
  }

    return (
      <div>
        <Link to="/signin">Sign in</Link>
        <form className="form-signup">
          <h2 className="form-signup-heading"> Please enter your data </h2>
          <label htmlFor="inputName" className="signup-labels">
            Name
          </label>
          <input
            onChange={e => setLogin(e.target.value)}
            value={login}
            className="input-signup"
            placeholder="Name" />
          <label htmlFor="inputEmail" className="signup-labels">
            Email address
          </label>
          <input
          type="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
          className="input-signup"
          placeholder="Email address" />
          <label htmlFor="inputPassword" className="signup-labels">
            Password
          </label>
          <input
            type="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
            className="input-signup"
            placeholder="Password" />
          <button className="btn-submit" onClick={onClick} type="button">
            Sign up
          </button>
        </form>
      </div>
    );
  };

export default Signup;