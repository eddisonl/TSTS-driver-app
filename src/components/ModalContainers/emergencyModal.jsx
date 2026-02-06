import React from "react";
import { toast } from "react-toastify";

const EmergencyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSendAlert = () => {
    toast.error("🚨 Emergency alert sent to control center.", {
      position: "top-center",
      autoClose: 4000,
    });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">Emergency Assistance</h3>
        </div>
        <div className="modal-body">
          <p className="modal-message">
            This will immediately notify the control center about an emergency
            situation on your vehicle. Use only for serious safety incidents.
          </p>
          <p className="modal-message" style={{ marginTop: "12px" }}>
            For voice assistance, call{" "}
            <strong>+233 20 000 0000 (TSTS Control)</strong>.
          </p>
        </div>
        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-danger" onClick={handleSendAlert}>
            Send Emergency Alert
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmergencyModal;

