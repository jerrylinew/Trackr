import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Found from "./Found";
import { fetchData } from "../services/database";
import Setup from "./Setup";

export default function Location() {
  const { code } = useParams();

  const [data, setData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(async function () {
    const docData = await fetchData(code);
    if (docData && docData.lat && docData.long) {
      setData({
        lat: docData.lat,
        long: docData.long,
      });
    } else {
      setNotFound(true);
    }
  }, []);

  if (notFound) {
    return <h1>NOTFOUND</h1>;
  }
  if (!data) {
    return <h1>Loading</h1>;
  } else {
    console.log(data);
    const osmUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${
      data.long - 0.01
    },${data.lat - 0.01},${data.long + 0.01},${
      data.lat + 0.01
    }&layer=mapnik&marker=${data.lat},${data.long}`;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
              <h1 className="text-2xl font-bold text-white">Location Found</h1>
              <p className="text-blue-100 mt-1">
                <a
                  href={`https://www.google.com/maps?q=${data.lat},${data.long}`}
                >
                  View on google maps
                </a>
              </p>
            </div>

            <div className="p-6">
              <div className="bg-gray-50 rounded-xl p-4 shadow-inner">
                <iframe
                  width="100%"
                  height="500"
                  style={{
                    border: 0,
                    borderRadius: "12px",
                    boxShadow:
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  }}
                  src={osmUrl}
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              <div className="mt-6 flex justify-center">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
