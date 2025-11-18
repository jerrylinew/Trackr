import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Found from "./Found";
import { fetchData } from "../services/database";
import Setup from "./Setup";

export default function Scan() {
  const { code } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function loadData() {
      const docData = await fetchData(code);
      if (docData) {
        setData({
          code: docData.code,
          isSetup: docData.isSetup,
          name: docData.name,
          message: docData.message,
          email: docData.email,
          objname: docData.objname,
          isBounty: docData.isBounty || false, // Add this line
          imageData: docData.imageData,
        });
      } else {
        setNotFound(true);
      }
    }
    loadData();
  }, [code]);

  if (notFound) return <h1>Invalid or expired code</h1>;
  if (!data) return <p>Loading...</p>;

  if (!data.isSetup) {
    return <Setup theid={code} isBounty={data.isBounty} />;
  } else {
    return <Found info={data} />;
  }

  // return (
  //   <div style={{ textAlign: "center", marginTop: "3rem" }}>
  //     <p>Code: {data.code}</p>
  //     <button onClick={() => navigate("/")}>Back</button>
  //   </div>
  // );
}
