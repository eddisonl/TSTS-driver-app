import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DriverLoginForm from "./components/auth/DriverLoginForm";
import DriverDashboard from "./components/dashboard/DriverDashboard";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [driverUser, setDriverUser] = useState(null);

  const handleLoginSuccess = (userData) => {
    setDriverUser(userData);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setDriverUser(null);
  };

  return (
    <div className="app">
      {!isLoggedIn ? (
        <DriverLoginForm onLoginSuccess={handleLoginSuccess} />
      ) : (
        <DriverDashboard user={driverUser} onLogout={handleLogout} />
      )}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
