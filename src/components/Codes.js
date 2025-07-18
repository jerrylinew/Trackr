import { useState } from "react";
import { addCode } from "../services/database";
import { QRCodeCanvas } from "qrcode.react";

export default function Codes() {
  const [codes, setCodes] = useState([]);

  async function handleSubmit() {
    try {
      const { code } = await addCode();
      const url = `${window.location.origin}/${code}`;
      setCodes((prev) => [...prev, { code, url }]);
    } catch (err) {
      console.error("Failed to add code:", err);
    }
  }

  return (
    <>
      <button className="bigButton" onClick={handleSubmit}>
        <img src="trackrLogo.png" className="logo" />
      </button>

      <div>
        {codes.map(({ code, url }) => (
          <div key={code} style={{ marginTop: "1rem" }}>
            <QRCodeCanvas value={url} size={128} />

            <p>Code: {code}</p>
          </div>
        ))}
      </div>
    </>
  );
}
