import { Link, useNavigate } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  let navigate = useNavigate();
  const loginHandler = () => {
    navigate("/Login");
  };

  return (
    <div className="navbar-container">
      <Link to="/" className="logo-container">
        <h2>QuizUp</h2>
      </Link>
      <div className="navbar-right">
        <p onClick={loginHandler}>Sign In</p>
        <p>Dark Mode</p>
      </div>
    </div>
  );
};

export default Navbar;
