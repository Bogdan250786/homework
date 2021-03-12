import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Signup from './components/signup';
import Signin from './components/signin';
import PrivateRoute from './components/privateRoute';
import Users from './components/users';
import Home from './components/home';
import './App.css';

 function App() {
    return (
      <div className="div-navbar">
        <BrowserRouter>
        <Switch>
          <PrivateRoute exact Component={Home} path="/" />
          <PrivateRoute path="/users" component={Users} />
          <Route path="/signin" component={Signin}><Signin /></Route>
          <Route path="/signup" component={Signup}><Signup /></Route>
        </Switch>
        </BrowserRouter>
      </div>
    );
  }

export default App;