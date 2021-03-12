import { Redirect, Route, useLocation } from 'react-router-dom';

const PrivateRoute = ({Component, ...rest}) => {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem('isAuthenticated')

  return (
      isAuthenticated ?
        <Route
          {...rest}
          render={() => <Component />}
          />
      :
        <Redirect to={{ pathname: "/signin", state: { from: location } }} />
  );
};

export default PrivateRoute;