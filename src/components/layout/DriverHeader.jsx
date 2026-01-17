import React from "react";
export default function DriverHeader({ user, tripStatus }) {
  return (
    <div className="driver-header">
      <div className="header-top">
        <div className="vehicle-info">
          <h2 className="vehicle-plate">{user.vehicle}</h2>
          <p className="vehicle-model">{user.vehicleModel}</p>
        </div>
        <div className={`status-badge status-${tripStatus}`}>
          {tripStatus.charAt(0).toUpperCase() + tripStatus.slice(1)}
        </div>
      </div>
      <div className="header-driver">
        <span className="driver-icon">👨‍✈️</span>
        <span className="driver-name">{user.name}</span>
      </div>
    </div>
  );
}
