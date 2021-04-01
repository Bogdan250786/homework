import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
//import {IUsers} from '../interfaces';
import Button from '../components/button';
import TextField from '../components/textField';
import mainStore from '../stores/mainstore';
import { observer } from 'mobx-react';


const Signin = observer(() => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const {loginUser} = mainStore.userStore;
  const onClick = () => {
    if (login && password) {

      // const users: string | null = localStorage.getItem('newUsers');
      // const parsedusers: IUsers[] = users ? JSON.parse(users): [];
      // const loggedUser = parsedusers && parsedusers.find((el : any) => el.login === login && el.password === password);
      // if (loggedUser) {
      //   localStorage.setItem('loggedUserId', `${loggedUser.id}`);
      loginUser({login, password});
      history.push('/');
    } else alert('Wrong password or login');
  }

    return (
      <div>
        <Link to="/signup">Sign up</Link>
        <form className="form-signin">
          <h2 className="form-signin-heading"> Please sign in </h2>
          <label htmlFor="inputName" className="signup-labels">
            Login
          </label>
          <TextField
            type="text"
            placeholder="Enter login"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)}
            value={login} />
          <label htmlFor="inputPassword" className="signup-labels">
            Password
          </label>
          <TextField
            type="password"
            placeholder="Enter password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            value={password} />
          <Button disabled={!Boolean(login && password)} label="Sign in" onClick={onClick} />
        </form>
      </div>
    );
  }
);

export default Signin;