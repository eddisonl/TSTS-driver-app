import React from "react";
export default function RouteInfo() {
  const routeStops = [
    { name: "Accra Central Station", time: "08:00 AM", distance: 0 },
    { name: "Tema Interchange", time: "08:45 AM", distance: 35 },
    { name: "Nsawam Junction", time: "09:30 AM", distance: 62 },
    { name: "Central Market", time: "10:15 AM", distance: 98, current: true },
    { name: "Kumasi Station", time: "11:30 AM", distance: 145 },
  ];

  return (
    <div className="section">
      <h2 className="section-title">Route Information</h2>

      <div className="route-details">
        <h3 className="section-subtitle">Accra ↔ Kumasi (KMA-ACR-001)</h3>
        <p className="text-gray-500 text-sm">Total distance: 145 km</p>
      </div>

      <div className="stops-list">
        {routeStops.map((stop, idx) => (
          <div
            key={idx}
            className={`stop-item ${stop.current ? "current" : ""}`}
          >
            <div className="stop-indicator">
              {stop.current ? (
                <span className="stop-dot active">●</span>
              ) : (
                <span className="stop-dot">○</span>
              )}
              {idx < routeStops.length - 1 && <div className="stop-line"></div>}
            </div>
            <div className="stop-content">
              <p className="stop-title">{stop.name}</p>
              <p className="stop-time">{stop.time}</p>
              <p className="stop-distance">{stop.distance} km</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
