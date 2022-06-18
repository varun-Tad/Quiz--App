import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navigation/Navbar";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import "./SignUp.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  let navigate = useNavigate();
  const signInHandler = () => {
    navigate("/Login");
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match", {
        autoClose: 3000,
      });
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("Cannot create user.Email alerady in use", {
          autoClose: 3000,
        });
      } else {
        toast.error("user creation has encountered an error", {
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
    <div>
      <Navbar />
      <section className="hero-section">
        <form className="signUp-container" onSubmit={handleSubmit}>
          <div className="signUp-header">
            <h2>Sign Up</h2>
            <p>Enter your details to sign Up</p>
          </div>
          <div className="signUp-inputs">
            <input
              className="signUp-input-box"
              type="text"
              placeholder="Enter name"
              required
              onChange={handleChange}
              name="displayName"
              value={displayName}
            ></input>
            <input
              className="signUp-input-box"
              type="email"
              placeholder="Enter Email"
              required
              onChange={handleChange}
              name="email"
              value={email}
            ></input>
            <input
              className="signUp-input-box"
              type="password"
              placeholder="Enter Password"
              required
              onChange={handleChange}
              name="password"
              value={password}
            ></input>
            <input
              className="signUp-input-box"
              type="password"
              placeholder="Confirm Password"
              required
              onChange={handleChange}
              name="confirmPassword"
              value={confirmPassword}
            ></input>
          </div>
          <div className="sign-up-btn">
            <button type="submit">Sign up</button>
            <p>
              Already have an account?{" "}
              <span onClick={signInHandler} className="sign-in-small">
                Sign in
              </span>
            </p>
          </div>
        </form>
      </section>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
