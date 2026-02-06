import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DriverLoginForm from "./components/auth/DriverLoginForm";
import DriverDashboard from "./components/dashboard/DriverDashboard";
import SupportChatWidget from "./components/ModalContainers/supportChatWidget";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [driverUser, setDriverUser] = useState(null);

  const handleLoginSuccess = (userData) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("driverUser", JSON.stringify(userData));
    }
    setDriverUser(userData);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("driverUser");
    }
    setIsLoggedIn(false);
    setDriverUser(null);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const savedUser = localStorage.getItem("driverUser");
      if (savedUser) {
        setDriverUser(JSON.parse(savedUser));
        setIsLoggedIn(true);
      }
    } catch (e) {
      // ignore corrupted data
    }
  }, []);
  return (
    <div className="app">
      {!isLoggedIn ? (
        <DriverLoginForm onLoginSuccess={handleLoginSuccess} />
      ) : (
        <>
          <DriverDashboard user={driverUser} onLogout={handleLogout} />
          <SupportChatWidget />
        </>
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
        // theme="dark"
      />
    </div>
  );
}
