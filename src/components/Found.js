import { useState, useEffect } from "react";
import { setLongLat } from "../services/database";
import { QRCodeCanvas } from "qrcode.react";
import { sendMessage } from "../services/notify";
import { useGeolocation } from "@uidotdev/usehooks";

export default function Found(props) {
  const state = useGeolocation();
  let [sucess, setsucess] = useState("not yet");
  useEffect(async function () {
    await sendMessage(props.info);
  }, []);
  function Locate(event) {
    event.preventDefault(); // Prevent page refresh
    const formData = new FormData(event.target);
    if (sucess == "not yet") {
      console.log(
        state.latitude + ", " + state.longitude + ", " + props.info.code
      );
      if (setLongLat(state.latitude, state.longitude, props.info.code)) {
        setsucess((old) => "sucess");
      }
    }
  }

  return (
    <div className="found">
      <div className="header">
        <img src="trackrLogo.png" className="logo" />
        <h1 className="header-title">Trackr</h1>
      </div>
      <div className="container">
        <div className="content"></div>
        <h1 className="found-title">
          You have not found {props.info.name}'s {props.info.objname}!
        </h1>
        <p className="message-label">The message from the owner:</p>
        <p className="message">{props.info.message}</p>
      </div>
      <form onSubmit={Locate} className="gotlocate">
        {sucess == "not yet" && (
          <button className="gotlocate">
            Send location to {props.info.name}!
          </button>
        )}
        {sucess == "sucess" && (
          <button className="gotlocate">
            Location was sent to {props.info.name}!
          </button>
        )}
      </form>
    </div>
  );
}
