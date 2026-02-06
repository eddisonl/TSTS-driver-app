import { CFormSelect } from "@coreui/react";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ReportModal = ({ isOpen, onClose }) => {
  const [issueType, setIssueType] = useState("vehicle");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");

  if (!isOpen) return null;

  const issueTypes = [
    { value: "vehicle", label: "Vehicle problem" },
    { value: "passenger", label: "Passenger incident" },
    { value: "route", label: "Route / traffic issue" },
    { value: "safety", label: "Safety concern" },
    { value: "other", label: "Other" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description.trim()) {
      toast.warning("Please describe the issue before sending.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    toast.success("Issue report sent to control center.", {
      position: "top-right",
      autoClose: 3000,
    });

    setDescription("");
    setContact("");
    setIssueType("vehicle");
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">Report an Issue</h3>
        </div>
        <form className="modal-body" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="issueType">Issue type</label>
            <CFormSelect
              id="issueType"
              className="form-input"
              value={issueType}
              onChange={(e) => setIssueType(e.target.value)}
            >
              <option value="vehicle">Vehicle problem</option>
              {issueTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}

              {/* <option value="passenger">Passenger incident</option>
              <option value="route">Route / traffic issue</option>
              <option value="safety">Safety concern</option>
              <option value="other">Other</option> */}
            </CFormSelect>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              className="form-input report-textarea"
              placeholder="Describe what happened..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact">Contact (optional)</label>
            <input
              id="contact"
              type="text"
              className="form-input"
              placeholder="Phone or radio ID"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>

          <div className="modal-footer">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Send report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportModal;
