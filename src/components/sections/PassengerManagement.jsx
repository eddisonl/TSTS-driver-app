import React, { useState } from "react";
import { toast } from "react-toastify";
import QRCodeDisplay from "../common/QRCodeDisplay";

export default function PassengerManagement({
  passengers,
  onRemove,
  onScanQR,
}) {
  const [selectedPassenger, setSelectedPassenger] = useState(null);

  const handleGenerateQR = (passenger) => {
    setSelectedPassenger(passenger);
    toast.success(`QR code generated for ${passenger.name}`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="section">
      <h2 className="section-title">Passenger Management</h2>

      <button className="btn-primary w-full mb-4" onClick={onScanQR}>
        📱 Scan QR Code
      </button>

      {selectedPassenger && (
        <div className="qr-section mb-4">
          <QRCodeDisplay
            data={
              selectedPassenger.qrCode ||
              `PASS-${selectedPassenger.id}-${selectedPassenger.name
                .replace(/\s+/g, "-")
                .toUpperCase()}`
            }
            title={`QR Code for ${selectedPassenger.name}`}
            passengerName={selectedPassenger.name}
          />
        </div>
      )}

      <div className="passenger-list">
        <h3 className="section-subtitle">
          Current Passengers ({passengers.length})
        </h3>
        {passengers.map((passenger) => (
          <div key={passenger.id} className="passenger-card">
            <div className="passenger-info">
              <p className="passenger-name">{passenger.name}</p>
              <p className="passenger-phone">{passenger.phone}</p>
              <p className="passenger-destination">→ {passenger.destination}</p>
            </div>
            <div className="passenger-status">
              {passenger.qrScanned ? (
                <span className="badge badge-verified">✓ Verified</span>
              ) : (
                <span className="badge badge-pending">⏳ Pending</span>
              )}
              <div className="passenger-actions">
                <button
                  className="btn-secondary"
                  onClick={() => handleGenerateQR(passenger)}
                  title="Generate QR Code"
                  style={{
                    fontSize: "12px",
                    padding: "6px 12px",
                    marginRight: "8px",
                  }}
                >
                  📱 QR
                </button>
                <button
                  className="btn-remove"
                  onClick={() => onRemove(passenger.id)}
                  title="Remove passenger"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
