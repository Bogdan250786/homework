import { Redirect, Route, useLocation } from 'react-router-dom';
import mainStore from '../stores/mainstore';

const PrivateRoute = ({Component, path, ...rest}: {Component: Function, path: string, exact: boolean}) => {
  const location = useLocation();
  const {loggedUserId} = mainStore.userStore;
console.log('mainStore', mainStore);

  return (
    !!loggedUserId
      ? <Route
        {...rest}
        render={() => <Component />}
        />
      : <Redirect to={{ pathname: "/signin", state: { from: location } }} />
  );
};

export default PrivateRoute;