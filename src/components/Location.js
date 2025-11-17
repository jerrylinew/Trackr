import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Found from "./Found";
import { fetchData } from "../services/database";
import Setup from "./Setup";

export default function Location() {
  const { code } = useParams();

  const [data, setData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function loadLocation() {
      const docData = await fetchData(code);
      if (docData && docData.lat && docData.long) {
        setData({
          lat: docData.lat,
          long: docData.long,
          imageUri: docData.imageData,
          imageDait: docData.imageDate,
        });
      } else {
        setNotFound(true);
      }
    }
    loadLocation();
  }, [code]);

  if (notFound) {
    return (
      <div className="found-page">
        <nav className="found-nav">
          <div className="found-nav-container">
            <div className="found-logo">
              <img src="/trackrLogo.png" width="25" alt="Trackr logo" />
              <a href="/" className="found-nav-brand">
                Trackr
              </a>
            </div>
          </div>
        </nav>
        <div className="found-container">
          <div className="found-content">
            <div className="found-header">
              <h1 className="found-title">Location Not Available</h1>
              <p className="found-subtitle">
                This location has not been shared yet.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="found-page">
        <nav className="found-nav">
          <div className="found-nav-container">
            <div className="found-logo">
              <img src="/trackrLogo.png" width="25" alt="Trackr logo" />
              <a href="/" className="found-nav-brand">
                Trackr
              </a>
            </div>
          </div>
        </nav>
        <div className="found-container">
          <div className="found-content">
            <div className="found-header">
              <h1 className="found-title">Loading...</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }

  console.log(data);
  const osmUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${
    data.long - 0.01
  },${data.lat - 0.01},${data.long + 0.01},${
    data.lat + 0.01
  }&layer=mapnik&marker=${data.lat},${data.long}`;

  return (
    <div className="found-page">
      <nav className="found-nav">
        <div className="found-nav-container">
          <div className="found-logo">
            <img src="/trackrLogo.png" width="25" alt="Trackr logo" />
            <a href="/" className="found-nav-brand">
              Trackr
            </a>
          </div>
        </div>
      </nav>

      <div className="location-container">
        <div className="location-content">
          <div className="found-header">
            <h1 className="found-title">Location Found</h1>
            <p className="found-subtitle">
              <a
                href={`https://www.google.com/maps?q=${data.lat},${data.long}`}
                className="location-link"
              >
                View on Google Maps
              </a>
            </p>
          </div>

          <div className="location-map-wrapper">
            <iframe
              className="location-map-iframe"
              src={osmUrl}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <h1 className="found-title2">Image taken by finder:</h1>
      {data.imageUri == null ? (
        <>
          <p>No image has been taken!</p>
        </>
      ) : (
        <>
          <p>This image was taken at {Date(data.imageDait.seconds)}</p>
          <img className="location-image" src={data.imageUri} />
        </>
      )}
    </div>
  );
}
