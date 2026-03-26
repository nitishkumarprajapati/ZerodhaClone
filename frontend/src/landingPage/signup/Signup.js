// import React from 'react';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
function Signup() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    fullname: "",
  });
  const { email, password, fullname } = inputValue;
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
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setInputValue({
          email: "",
          password: "",
          fullname: "",
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
    <>
      <section className='signup-section'>
        <div className='container'>
          <div className='row align-items-center signup-row'>
            <div className='col-lg-6 d-flex justify-content-center'>
              <img
                src="media/signupassets/account_open.svg"
                alt="Open account"
                className='img-fluid signup-image'
              ></img>
            </div>
            <div className='col-lg-5'>
              <h2 className='signup-head'>Signup now</h2>
              <p className='signup-subtext'>Or track your existing application</p>
              <form className='signup-form-box' onSubmit={handleSubmit}>
                <div className='signup-field'>
                  <label htmlFor="fullname" className='signup-label'>Full Name</label>
                  <input
                    type="text"
                    id="fullname"
                    placeholder='Enter your full name'
                    name='fullname'
                    value={fullname}
                    className='signup-input'
                    onChange={handleOnChange}
                  ></input>
                </div>

                <div className='signup-field'>
                  <label htmlFor="email" className='signup-label'>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    placeholder='Enter your email'
                    className='signup-input'
                    onChange={handleOnChange}
                  ></input>
                </div>

                <div className='signup-field'>
                  <label htmlFor="password" className='signup-label'>Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    placeholder='Enter your password'
                    className='signup-input'
                    onChange={handleOnChange}
                  ></input>
                </div>

                <button className='signup-btn'>Signup</button>
                <p className='signup-login-text'>
                  Already registered? <Link className='signup-login-link' to="/login">Log in</Link>
                </p>
                <p className='signup-note'>
                  By proceeding, you agree to the Zerodha terms & privacy policy
                </p>
                <hr className='signup-divider'></hr>
                <p className='signup-nri'>
                  Looking to open NRI account? <a className='signup-nri-link' href="#">Click here</a>
                </p>
              </form>
              <ToastContainer/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
