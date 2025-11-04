import { useState } from "react";
import { addCode } from "../services/database";
import { QRCodeCanvas } from "qrcode.react";

export default function Codes() {
  const [codes, setCodes] = useState([]);

  const gridSize = 16;

  async function handleSubmit(isBounty) {
    try {
      const promises = Array.from({ length: gridSize }, () =>
        addCode(isBounty)
      );
      const results = await Promise.all(promises);
      const newCodes = results.map(({ code }) => ({
        code,
        url: `${window.location.origin}/${code}`,
      }));
      setCodes((prev) => [...prev, ...newCodes]);
    } catch (err) {
      console.error("Failed to add code:", err);
    }
  }

  return (
    <>
      <button className="bigButton" onClick={() => handleSubmit(false)}>
        No Bounty
      </button>
      <button className="bigBountyButton">Bounty</button>{" "}
      {/* add this for bounty onClick={() => handleSubmit(true)}}*/}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1rem",
          marginTop: "2rem",
        }}
      >
        {codes.map(({ code, url }) => (
          <div
            key={code}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Text at the top */}
            <div
              style={{
                marginBottom: "0.5rem",
                fontSize: "25px",
                fontFamily: "Inter, sans-serif",
                display: "flex",
                alignItems: "center",
                gap: "0.2rem",
              }}
            >
              <img src="trackrLogo.png" width="22px" />
              Trackr
            </div>

            <QRCodeCanvas value={url} size={128} />
            <div
              style={{
                marginTop: "0.5rem",
                fontFamily: "Inter, sans-serif",
                display: "flex",
              }}
            >
              Found This Item?
            </div>
            <div
              style={{
                marginTop: "0.2rem",
                fontFamily: "Inter, sans-serif",
                display: "flex",
                fontSize: "12px",
              }}
            >
              Scan to notify owner
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
