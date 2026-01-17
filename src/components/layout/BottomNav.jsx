"use client";
import React from "react";

export default function BottomNav({ activeSection, setActiveSection }) {
  const navItems = [
    { id: "trip", label: "Trip", icon: "🚗" },
    { id: "passengers", label: "Passengers", icon: "👥" },
    { id: "route", label: "Route", icon: "🗺️" },
    { id: "actions", label: "More", icon: "⋯" },
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveSection(item.id)}
          className={`nav-button ${activeSection === item.id ? "active" : ""}`}
        >
          <span className="nav-icon">{item.icon}</span>
          <span className="nav-label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
