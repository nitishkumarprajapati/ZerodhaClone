import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setInputValue({
          email: "",
          password: "",
        });
        setTimeout(() => {
          window.location.href = "http://localhost:3001";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="login-section">
      <div className="container">
        <div className="row align-items-center login-row">
          <div className="col-lg-6 d-flex justify-content-center">
            <img
              src="media/signupassets/account_open.svg"
              alt="Login to Zerodha"
              className="img-fluid login-image"
            />
          </div>
          <div className="col-lg-5">
            <h2 className="login-head">Log in to your account</h2>
            <p className="login-subtext">
              Access your dashboard, holdings, orders, and account activity.
            </p>

            <form className="login-form-box" onSubmit={handleSubmit}>
              <div className="login-field">
                <label htmlFor="login-email" className="login-label">
                  Email
                </label>
                <input
                  type="email"
                  id="login-email"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  className="login-input"
                  onChange={handleOnChange}
                />
              </div>

              <div className="login-field">
                <label htmlFor="login-password" className="login-label">
                  Password
                </label>
                <input
                  type="password"
                  id="login-password"
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  className="login-input"
                  onChange={handleOnChange}
                />
              </div>

              {/* <div className="login-meta">
                <label className="login-checkbox-row">
                  <input type="checkbox" />
                  <span>Keep me signed in</span>
                </label>
                <a href="#" className="login-link">
                  Forgot password?
                </a>
              </div> */}

              <button className="login-btn">Log in</button>

              <p className="login-register-text">
                New to Zerodha? <Link className="login-link" to="/signup">Create an account</Link>
              </p>

              <p className="login-note">
                By continuing, you agree to Zerodha&apos;s terms and privacy policy.
              </p>
            </form>
             <ToastContainer />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
