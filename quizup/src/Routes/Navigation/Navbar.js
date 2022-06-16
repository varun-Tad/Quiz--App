import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./Navbar.css";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="navbar-container">
      <Link to="/" className="logo-container">
        <h2>QuizUp</h2>
      </Link>
      <div className="navbar-right">
        {currentUser ? (
          <span className="toLogin" onClick={signOutUser}>
            Sign Out
          </span>
        ) : (
          <Link className="toLogin" to="/Login">
            {" "}
            <span>Sign in</span>
          </Link>
        )}

        <p>Dark Mode</p>
      </div>
    </div>
  );
};

export default Navbar;
