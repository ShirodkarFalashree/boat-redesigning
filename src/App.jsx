import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Categories from "./sections/Categories";
import EarBuds from "./sections/EarBuds";
import Headphone from "./sections/Headphone";
import NeckBand from "./sections/NeckBand";
import PowerBank from "./sections/PowerBank";
import SmartWatch from "./sections/SmartWatch";

function App() {
  return (
    <div className="bg-black overflow-x-hidden">
      <Router>
        <Routes>
          <Route index element={<Categories />} />
          <Route path="earbuds" element={<EarBuds />} />
          <Route path="headphone" element={<Headphone />} />
          <Route path="neckband" element={<NeckBand />} />
          <Route path="powerbank" element={<PowerBank />} />
          <Route path="smart-watch" element={<SmartWatch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
