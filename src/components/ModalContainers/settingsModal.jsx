import React, { useState } from "react";

const SettingsModal = ({ isOpen, onClose }) => {
  const [autoStartTrip, setAutoStartTrip] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">Driver Settings</h3>
        </div>
        <div className="modal-body">
          <p className="modal-message" style={{ marginBottom: "16px" }}>
            Configure how your in-vehicle system behaves. These settings are
            local to this device.
          </p>

          <div className="setting-item">
            <p>Auto-start trip when assigned</p>
            <label className="settings-toggle">
              <input
                type="checkbox"
                checked={autoStartTrip}
                onChange={() => setAutoStartTrip(!autoStartTrip)}
              />
              <span className="toggle-slider" />
            </label>
          </div>

          <div className="setting-item">
            <p>Show notifications & alerts</p>
            <label className="settings-toggle">
              <input
                type="checkbox"
                checked={notificationsEnabled}
                onChange={() =>
                  setNotificationsEnabled(!notificationsEnabled)
                }
              />
              <span className="toggle-slider" />
            </label>
          </div>

          <div className="setting-item">
            <p>Dark mode interface</p>
            <label className="settings-toggle">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <span className="toggle-slider" />
            </label>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>
            Close
          </button>
          <button className="btn-primary" onClick={onClose}>
            Save (local)
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;

