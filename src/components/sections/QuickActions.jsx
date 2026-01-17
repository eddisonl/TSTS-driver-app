import React, { useState } from "react";
import { toast } from "react-toastify";

export default function QuickActions({ tripStatus, onLogout }) {
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleLogout = () => {
    toast.info("Logging out...", {
      position: "top-center",
      autoClose: 2000,
    });
    setTimeout(() => {
      onLogout();
      toast.success("Logged out successfully", {
        position: "top-center",
        autoClose: 2000,
      });
    }, 500);
  };

  const handleEmergency = () => {
    toast.error("🚨 Emergency alert sent to admin - Help is on the way", {
      position: "top-center",
      autoClose: 5000,
    });
  };

  const handleReportIssue = () => {
    toast.warning("Issue report submitted successfully", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const handleContactSupport = () => {
    toast.info("Connecting to support...", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const handleSettings = () => {
    toast.info("Settings feature coming soon", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div className="section">
      <h2 className="section-title">Quick Actions</h2>

      <div className="actions-grid">
        <button className="action-card warning" onClick={handleReportIssue}>
          <span className="action-icon">⚠️</span>
          <span className="action-text">Report Issue</span>
        </button>
        <button className="action-card danger" onClick={handleEmergency}>
          <span className="action-icon">🚨</span>
          <span className="action-text">Emergency</span>
        </button>
        <button className="action-card info" onClick={handleContactSupport}>
          <span className="action-icon">📞</span>
          <span className="action-text">Contact Support</span>
        </button>
        <button className="action-card secondary" onClick={handleSettings}>
          <span className="action-icon">⚙️</span>
          <span className="action-text">Settings</span>
        </button>
      </div>

      <div className="settings-section">
        <h3 className="section-subtitle">Account</h3>
        <div className="setting-item">
          <p>Trip Status</p>
          <span className="text-sm text-gray-500">{tripStatus}</span>
        </div>
        <div className="setting-item">
          <p>Vehicle Connection</p>
          <span className="badge badge-verified">Connected</span>
        </div>
      </div>

      <button className="btn-danger w-full mt-6" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
