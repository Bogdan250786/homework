import { Link } from 'react-router-dom';

const Home = () => {
      return (
        <nav className="navbar-navbar">
        <ul className="navbar-ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signin">Sign in</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
          <li>
            <Link to="/users">User area</Link>
          </li>
        </ul>
      </nav>
      );
  };

  export default Home;