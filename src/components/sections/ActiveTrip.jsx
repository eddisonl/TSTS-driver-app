import React, { useState } from "react";
import { toast } from "react-toastify";
import ConfirmModal from "../common/ConfirmModal";

export default function ActiveTrip({ tripStatus, setTripStatus, user }) {
  const [passengerCount, setPassengerCount] = useState(8);
  const [nextStop, setNextStop] = useState("Central Market");
  const [showEndTripModal, setShowEndTripModal] = useState(false);

  const handleEndTripClick = () => {
    setShowEndTripModal(true);
  };

  const handleConfirmEndTrip = () => {
    setShowEndTripModal(false);
    toast.warning("Ending current trip...", {
      position: "top-center",
      autoClose: 2000,
    });
    setTimeout(() => {
      setTripStatus("completed");
      toast.success("Trip ended successfully", {
        position: "top-center",
        autoClose: 3000,
      });
    }, 500);
  };

  const handleStartTrip = () => {
    setTripStatus("active");
    toast.success("New trip started!", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  const handleUpdateStop = (newStop) => {
    setNextStop(newStop);
    toast.info(`Next stop updated to ${newStop}`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="section">
      <h2 className="section-title">Active Trip</h2>

      {tripStatus === "active" ? (
        <>
          <div className="trip-card">
            <div className="trip-header">
              <h3>Route: Accra - Kumasi</h3>
              <p className="text-gray-500">KMA-ACR-001</p>
            </div>

            <div className="trip-metrics">
              <div className="metric">
                <p className="metric-label">Passengers</p>
                <p className="metric-value">{passengerCount}/14</p>
                <div className="capacity-bar">
                  <div
                    className="capacity-fill"
                    style={{ width: `${(passengerCount / 14) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="metric">
                <p className="metric-label">Distance</p>
                <p className="metric-value">24.3 km</p>
              </div>
              <div className="metric">
                <p className="metric-label">Time</p>
                <p className="metric-value">45 min</p>
              </div>
            </div>

            <div className="next-stop">
              <p className="stop-label">Next Stop</p>
              <p className="stop-name">{nextStop}</p>
            </div>

            <div className="trip-actions">
              <button
                className="btn-secondary"
                onClick={() => handleUpdateStop("Main Station")}
              >
                Update Stop
              </button>
              <button className="btn-danger" onClick={handleEndTripClick}>
                End Trip
              </button>
            </div>
          </div>

          <div className="alerts-section">
            <h3 className="section-subtitle">⚠️ Alerts</h3>
            <div className="alert-box">
              <p className="text-sm">
                Vehicle capacity at 57% - Still accepting passengers
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="trip-card">
          <div className="text-center">
            <p className="text-2xl mb-4">🏁</p>
            <p className="text-lg font-semibold">Trip Completed</p>
            <p className="text-gray-500 mt-2">
              Total passengers: {passengerCount}
            </p>
            <button
              className="btn-primary mt-6 w-full"
              onClick={handleStartTrip}
            >
              Start New Trip
            </button>
          </div>
        </div>
      )}

      <ConfirmModal
        isOpen={showEndTripModal}
        onClose={() => setShowEndTripModal(false)}
        onConfirm={handleConfirmEndTrip}
        title="End Trip Confirmation"
        message="Are you sure you want to end the current trip? This action cannot be undone."
        confirmText="Yes, End Trip"
        cancelText="Cancel"
        confirmButtonClass="btn-danger"
      />
    </div>
  );
}
