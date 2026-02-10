import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Codes from "./components/Codes";
import Scan from "./components/Scan";
import Location from "./components/Location";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Email from "./components/Email";
import Items from "./components/Items";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/codes" element={<Codes />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/:code" element={<Scan />} />
        <Route path="/:code/location" element={<Location />} />
        <Route path="/email" element={<Email />} />
        <Route path="items" element={<Items />} />
      </Routes>
    </Router>
  );
}
