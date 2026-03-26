import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import "./index.css";
import Home from "./components/Home";

const DashboardApp = () => {
  const [isChecking, setIsChecking] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.get("http://localhost:3002/verify", {
          withCredentials: true,
        });
        setIsAuthenticated(true);
        setUser(data.user);
      } catch (error) {
        setIsAuthenticated(false);
        window.location.href = "http://localhost:3000/login";
      } finally {
        setIsChecking(false);
      }
    };

    verifyUser();
  }, []);

  if (isChecking) {
    return <div>Checking authentication...</div>;
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Routes>
      <Route path="/*" element={<Home user={user} />} />
    </Routes>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DashboardApp />
    </BrowserRouter>
  </React.StrictMode>
);
