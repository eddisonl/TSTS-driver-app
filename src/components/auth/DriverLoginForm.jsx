"use client";

import React, { useState } from "react";

export default function DriverLoginForm({ onLoginSuccess }) {
  const [licenseNumber, setLicenseNumber] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!licenseNumber || !pin) {
      setError("Please fill in all fields");
      return;
    }

    if (licenseNumber.length < 6) {
      setError("Invalid license number format");
      return;
    }

    if (pin.length !== 4 || !/^\d+$/.test(pin)) {
      setError("PIN must be 4 digits");
      return;
    }

    onLoginSuccess({
      id: "driver-1",
      name: "Kwesi Mensah",
      licenseNumber: licenseNumber,
      vehicle: "GT-2345",
      vehicleModel: "Mercedes Sprinter",
    });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1 className="text-2xl font-bold">Driver Login</h1>
          <p className="text-gray-500 mt-2">TSTS In-Vehicle System</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {error && (
            <div className="error-banner">
              <p>{error}</p>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="license">License Number</label>
            <input
              id="license"
              type="text"
              value={licenseNumber}
              onChange={(e) => setLicenseNumber(e.target.value)}
              placeholder="DR-12345"
              className="form-input"
              maxLength="10"
            />
          </div>

          <div className="form-group">
            <label htmlFor="pin">4-Digit PIN</label>
            <input
              id="pin"
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="••••"
              className="form-input"
              maxLength="4"
              inputMode="numeric"
            />
          </div>

          <button type="submit" className="btn-primary w-full">
            Sign In
          </button>
        </form>

        <div className="login-footer">
          <p className="text-xs text-gray-500">
            Demo: Any license number, PIN: 1234
          </p>
        </div>
      </div>
    </div>
  );
}
