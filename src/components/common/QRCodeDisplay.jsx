import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { toast } from "react-toastify";

export default function QRCodeDisplay({ data, title, passengerName }) {
  const [showQR, setShowQR] = useState(false);

  const handleDownloadQR = () => {
    const svg = document.getElementById(`qr-code-${data}`);
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");

      const downloadLink = document.createElement("a");
      downloadLink.download = `QR-${passengerName || "Code"}.png`;
      downloadLink.href = pngFile;
      downloadLink.click();

      toast.success("QR code downloaded!", {
        position: "top-right",
        autoClose: 2000,
      });
    };

    img.src =
      "data:image/svg+xml;base64," +
      btoa(unescape(encodeURIComponent(svgData)));
  };

  const handleCopyQR = () => {
    navigator.clipboard.writeText(data);
    toast.success("QR code data copied to clipboard!", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="qr-code-container">
      <button
        className="btn-secondary w-full mb-3"
        onClick={() => setShowQR(!showQR)}
      >
        {showQR ? "👁️ Hide QR Code" : "📱 Show QR Code"}
      </button>

      {showQR && (
        <div className="qr-code-display">
          {title && <h4 className="qr-code-title">{title}</h4>}
          <div className="qr-code-wrapper">
            <QRCodeSVG
              id={`qr-code-${data}`}
              value={data}
              size={200}
              level="H"
              includeMargin={true}
              fgColor="#065f46"
              bgColor="#ffffff"
            />
          </div>
          <div className="qr-code-actions">
            <button className="btn-secondary" onClick={handleCopyQR}>
              📋 Copy Data
            </button>
            <button className="btn-primary" onClick={handleDownloadQR}>
              ⬇️ Download
            </button>
          </div>
          <p className="qr-code-data">{data}</p>
        </div>
      )}
    </div>
  );
}
