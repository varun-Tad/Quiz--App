import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/" className="logo-container">
        <h2>QuizUp</h2>
      </Link>
      <div className="navbar-right">
        <BiUser className="user" />
        <p>Dark Mode</p>
      </div>
    </div>
  );
};

export default Navbar;
