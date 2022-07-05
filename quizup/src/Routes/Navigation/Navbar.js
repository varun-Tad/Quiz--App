import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Navbar.css";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    toast.success("Logout successful", {
      autoClose: 3000,
    });
  };

  return (
    <>
      <div className="navbar-container">
        <Link to="/" className="logo-container">
          <h2>QuizUp</h2>
        </Link>
        <div className="navbar-right">
          {currentUser ? (
            <span className="toLogin" onClick={signOutHandler}>
              Sign Out
            </span>
          ) : (
            <Link className="toLogin" to="/Login">
              {" "}
              <span>Sign in</span>
            </Link>
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Navbar;
