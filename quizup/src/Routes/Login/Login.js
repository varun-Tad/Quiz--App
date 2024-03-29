import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navigation/Navbar";
import "./Login.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultFormFields = {
  email: "",
  password: "",
};
const Login = () => {
  let navigate = useNavigate();
  const signUpHandler = () => {
    navigate("/SignUp");
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          toast.error("incorrect password for email", {
            autoClose: 3000,
          });
          break;
        case "auth/user-not-found":
          toast.error("no user associated with this email", {
            autoClose: 3000,
          });
          break;
        default:
          toast.error(error, {
            autoClose: 3000,
          });
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <>
      <Navbar />
      <section className="hero-section login-hero">
        <form className="login-container" onSubmit={handleSubmit}>
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
              onChange={handleChange}
              name="email"
              value={email}
            ></input>
            <input
              className="login-input-box"
              type="password"
              placeholder="Enter Password"
              required
              onChange={handleChange}
              name="password"
              value={password}
            ></input>
          </div>
          <div className="sign-in-btn">
            <button type="submit">Sign in</button>
            <p>
              Don't have an account?{" "}
              <span onClick={signUpHandler} className="sign-up-small">
                Sign Up
              </span>
            </p>
          </div>
          <p className="small-text">_____or sign in with_____</p>
          <div className="google-sign-in-btn" onClick={signInWithGoogle}>
            {" "}
            <img
              src="https://img.icons8.com/color/24/000000/google-logo.png"
              alt="google-icon"
            />{" "}
            Sign in With Google
          </div>
        </form>
      </section>
      <ToastContainer />
    </>
  );
};

export default Login;
