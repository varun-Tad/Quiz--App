import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navigation/Navbar";
import "./Login.css";

const Login = () => {
  let navigate = useNavigate();
  const signUpHandler = () => {
    navigate("/SignUp");
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <Navbar />
      <section className="hero-section">
        <div className="login-container">
          <div className="login-header">
            <h2>Login</h2>
            <p>Enter you details to sign in</p>
          </div>
          <div className="login-inputs">
            <input
              className="login-input-box"
              type="email"
              placeholder="Enter email"
              required
            ></input>
            <input
              className="login-input-box"
              type="password"
              placeholder="Enter Password"
              required
            ></input>
          </div>
          <div className="sign-in-btn">
            <button>Sign in</button>
            <p>
              Don't have an account?{" "}
              <span onClick={signUpHandler} className="sign-up-small">
                Sign Up
              </span>
            </p>
          </div>
          <p className="small-text">_____or sign in with_____</p>
          <div className="google-sign-in-btn" onClick={logGoogleUser}>
            {" "}
            <img
              src="https://img.icons8.com/color/24/000000/google-logo.png"
              alt="google-icon"
            />{" "}
            Sign in With Google
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
