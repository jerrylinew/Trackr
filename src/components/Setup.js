import { setupCode } from "../services/database";
import { useState } from "react";
export default function Setup(props) {
  let [sucess, setsucess] = useState("not yet");
  async function Submits(event) {
    event.preventDefault(); // Prevent page refresh
    const formData = new FormData(event.target);
    const TheNam = formData.get("TheName");
    const TheDes = formData.get("TheDesc");
    const TheirN = formData.get("TheirName");
    const TheirG = formData.get("TheirGmail");
    console.log(
      "YourName: " +
        TheirN +
        "\nYourGmail: " +
        TheirG +
        "\nObjName: " +
        TheNam +
        " \nDesc: " +
        TheDes
    );
    if (TheNam != "" && TheDes != "" && TheirN != "" && TheirG != "") {
      if (await setupCode(TheNam, TheDes, TheirN, TheirG, props.theid)) {
        setsucess((old) => "sucess");
      } else {
        setsucess((old) => "fail");
      }
    } else {
      setsucess((old) => "fail");
    }
  }
  return (
    <>
      <div className="formtitle">
        <div className="cuh">
          <h1>Setup Your Trackr</h1>
        </div>
        {sucess != "sucess" && (
          <form onSubmit={Submits} className="form">
            <input name="TheirName" type="text" placeholder="Your name" />
            <input name="TheName" type="text" placeholder="Object name" />
            <input
              name="TheDesc"
              type="text"
              placeholder="Your object's description"
            />
            <input name="TheirGmail" type="text" placeholder="Email" />
            <button className="buton">Setup your Trackr</button>
          </form>
        )}
        {sucess == "sucess" && (
          <div className="usetup">
            <p1>
              This Trackr has been set up sucessfully! You can close this tab.
            </p1>
          </div>
        )}
        <br />
        {sucess == "fail" && <p2>One or more prompts are blank you nitwit</p2>}
        <p>ID: {props.theid}</p>
      </div>
    </>
  );
}
