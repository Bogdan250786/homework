import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import {IUsers} from '../interfaces';
import Button from '../components/button';
import TextField from '../components/textField';
import { observer } from 'mobx-react';
import mainStore from '../stores/mainstore';

const Signup = observer(() => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();
  const {addNewUser, newUsers} = mainStore.userStore;
  const onClick = () => {
    if (login && password && email){
    //  const newUsers: string | null = localStorage.getItem('newUsers');
//      const parsedNewUsers: IUsers[] = newUsers ? JSON.parse(newUsers): [];
      const newUser: IUsers = {
        login,
        password,
        email,
        id: newUsers.length
      };
      // localStorage.setItem('loggedUserId', JSON.stringify(loggedUserId));
      // storeUser(parsedNewUsers)
     //// parsedNewUsers.push(newUser);
      ///
      addNewUser(newUser);
      history.push('/signin');
    }
    setLogin('');
    setPassword('');
    setEmail('');
  }

    return (
      <div>
        <Link to="/signin">Sign in</Link>
        <form className="form-signup">
          <h2 className="form-signup-heading"> Please enter your data </h2>
          <label htmlFor="inputLogin" className="signup-labels">
            Login
          </label>
          <TextField type="text"
          placeholder="Enter login"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)}
          value={login} />
          <label htmlFor="inputEmail" className="signup-labels">
            Email address
          </label>
          <TextField type="email"
          placeholder="Enter email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          value={email} />
          <label htmlFor="inputPassword" className="signup-labels">
            Password
          </label>
          <TextField type="password"
          placeholder="Enter password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          value={password} />
          <Button disabled={!Boolean(login && password && email)} label="Sign up" onClick={onClick} />
        </form>
      </div>
    );
  }
);
export default Signup;