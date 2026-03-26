import React from "react";
import {Link} from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg  shadow-sm py-2 mb-5 rounded"
        style={{ backgroundColor: "white"
         }}
      >
        <div className="container p-2 ">
          <Link className="navbar-brand" to="/">
            <img src="media/assets/logo.svg" alt="logo"
            style={{ width: "25%" }}></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <form className="d-flex">
              <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/products">
                  Products
                </Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
                <li className="nav-item">
                <Link className="nav-link active" to="/support">
                  Support
                </Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link active" to="#">
                  <i className="fa-solid fa-bars"></i>
                </Link>
              </li>
              
              
            </ul>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
