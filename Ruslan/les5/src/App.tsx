import './App.scss';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Signup from './containers/signup';
import Signin from './containers/signin';
import PrivateRoute from './containers/privateRoute';
import ToDoForm from './containers/todoform';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" Component={ToDoForm} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
