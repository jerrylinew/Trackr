import { GmailID } from "../services/database";
import { useState } from "react";
export default function Email() {
  let [yay, Setyay] = useState("")

  async function Submits(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const TheGmail = formData.get("thegmail");
    if(TheGmail == ""){
      Setyay("no")
    } else {
    console.log(TheGmail);
    await GmailID(TheGmail);
    Setyay(TheGmail)
    }
  }
  
  return (
    <>
      <div className="emailplacething">
        <form className="inputtheemail" onSubmit={Submits}>
        { yay == "no" || yay == "" ? <>
            <h1>Send Code to Email</h1>
            <input
              name="thegmail"
              type="email"
              placeholder="Your Gmail"
              className="email-input"
            />
            <p className="newline">.</p>
            <button type="submit" className="email-email-button" >
              Send Code to Email
            </button>
          </> : <>

            <h2 className="gmail-horray">Sucessfully sent your gmail [{yay}] the item link!</h2>
            
          </>}
          { yay == "no" ?
          <p>Cannot send to an empty email.</p> : <></>}
        </form>
      </div>
    </>
  );
}
