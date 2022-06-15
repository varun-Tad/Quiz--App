import { useNavigate } from "react-router-dom";
import Navbar from "../Navigation/Navbar";
import "./SignUp.css";

const SignUp = () => {
  let navigate = useNavigate();
  const signInHandler = () => {
    navigate("/Login");
  };
  return (
    <div>
      <Navbar />
      <section className="hero-section">
        <div className="signUp-container">
          <div className="signUp-header">
            <h2>Sign Up</h2>
            <p>Enter your details to sign Up</p>
          </div>
          <div className="signUp-inputs">
            <input
              className="signUp-input-box"
              type="email"
              placeholder="Enter email"
              required
            ></input>
            <input
              className="signUp-input-box"
              type="password"
              placeholder="Enter Password"
              required
            ></input>
          </div>
          <div className="sign-up-btn">
            <button>Sign up</button>
            <p>
              Already have an account?{" "}
              <span onClick={signInHandler} className="sign-in-small">
                Sign in
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
