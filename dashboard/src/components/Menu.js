import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Menu = ({ user }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

  const handleProfileClick = () => {
    setIsProfileOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:3002/logout",
        {},
        { withCredentials: true }
      );
      window.location.href = "http://localhost:3000/login";
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const getMenuClassName = ({ isActive }) =>
    isActive ? "menu selected" : "menu";

  return (
    <div className="menu-container">
      <NavLink to="/">
        <img src="logo.png" alt="Zerodha logo" style={{ width: "50px" }} />
      </NavLink>
      <div className="menus">
        <ul>
          <li>
            <NavLink to="/" className={getMenuClassName} end>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/orders" className={getMenuClassName}>
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink to="/holdings" className={getMenuClassName}>
              Holdings
            </NavLink>
          </li>
          <li>
            <NavLink to="/positions" className={getMenuClassName}>
              Positions
            </NavLink>
          </li>
          <li>
            <NavLink to="/funds" className={getMenuClassName}>
              Funds
            </NavLink>
          </li>
          <li>
            <NavLink to="/apps" className={getMenuClassName}>
              Apps
            </NavLink>
          </li>
        </ul>
        <hr />
        <div className="profile-wrapper" ref={profileRef}>
          <div className="profile" onClick={handleProfileClick}>
            <div className="avatar">
              {user?.fullname ? user.fullname.slice(0, 2).toUpperCase() : "ZU"}
            </div>
            <p className="username">{user?.fullname || "USERID"}</p>
          </div>
          {isProfileOpen && (
            <div className="profile-menu">
              <button className="profile-menu-item" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
