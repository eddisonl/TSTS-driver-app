import React, { useState } from "react";
import { toast } from "react-toastify";
import DriverHeader from "../layout/DriverHeader";
import ActiveTrip from "../sections/ActiveTrip";
import PassengerManagement from "../sections/PassengerManagement";
import QuickActions from "../sections/QuickActions";
import RouteInfo from "../sections/RouteInfo";
import BottomNav from "../layout/BottomNav";

export default function DriverDashboard({ user, onLogout }) {
  const [activeSection, setActiveSection] = useState("trip");
  const [tripStatus, setTripStatus] = useState("active");
  const [currentPassengers, setCurrentPassengers] = useState([
    {
      id: 1,
      name: "Abena Owusu",
      phone: "0244567890",
      qrScanned: true,
      destination: "Kumasi Station",
      qrCode: "PASS-001-ABENA-OWUSU",
    },
    {
      id: 2,
      name: "Kofi Asante",
      phone: "0245678901",
      qrScanned: true,
      destination: "Central Market",
      qrCode: "PASS-002-KOFI-ASANTE",
    },
    {
      id: 3,
      name: "Yaa Mensah",
      phone: "0246789012",
      qrScanned: false,
      destination: "Main Station",
      qrCode: "PASS-003-YAA-MENSAH",
    },
  ]);

  const handleScanQR = () => {
    toast.info("📱 QR Scanner activated - Place device over QR code", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  const handleRemovePassenger = (passengerId) => {
    const passenger = currentPassengers.find((p) => p.id === passengerId);
    setCurrentPassengers(currentPassengers.filter((p) => p.id !== passengerId));
    toast.success(`Removed ${passenger?.name || "passenger"}`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const renderSection = () => {
    switch (activeSection) {
      case "trip":
        return (
          <ActiveTrip
            tripStatus={tripStatus}
            setTripStatus={setTripStatus}
            user={user}
          />
        );
      case "passengers":
        return (
          <PassengerManagement
            passengers={currentPassengers}
            onRemove={handleRemovePassenger}
            onScanQR={handleScanQR}
          />
        );
      case "route":
        return <RouteInfo />;
      case "actions":
        return <QuickActions tripStatus={tripStatus} onLogout={onLogout} />;
      default:
        return (
          <ActiveTrip
            tripStatus={tripStatus}
            setTripStatus={setTripStatus}
            user={user}
          />
        );
    }
  };

  return (
    <div className="driver-dashboard">
      <DriverHeader user={user} tripStatus={tripStatus} />
      <div className="dashboard-content">{renderSection()}</div>
      <BottomNav
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </div>
  );
}
