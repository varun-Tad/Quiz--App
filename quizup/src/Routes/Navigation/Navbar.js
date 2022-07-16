import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Navbar.css";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  let navigate = useNavigate();

  const signOutHandler = async () => {
    await signOutUser();
    toast.success("Logout successful", {
      autoClose: 3000,
    });
  };

  const signInHandler = () => {
    navigate("/Login");
  };

  return (
    <>
      <div className="navbar-container">
        <Link to="/" className="logo-container">
          <h2>QuizUp</h2>
        </Link>
        <div className="navbar-right">
          {currentUser ? (
            <button className="signInOut-btn" onClick={signOutHandler}>
              Sign Out
            </button>
          ) : (
            <button className="signInOut-btn" onClick={signInHandler}>
              Sign in
            </button>
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Navbar;
