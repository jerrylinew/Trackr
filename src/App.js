import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Codes from "./components/Codes";
import Scan from "./components/Scan";
import Location from "./components/Location";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Codes />} />
        <Route path="/:code" element={<Scan />} />
        <Route path="/:code/location" element={<Location />} />
      </Routes>
    </Router>
  );
}
