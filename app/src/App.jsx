import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Drivers from "./pages/Drivers";
import Teams from "./pages/Teams";
import Races from "./pages/Races";
import Dashboard from "./pages/Dashbord";
import Statistiken from "./pages/Statistiken";
import RaceDetail from "./pages/RaceDetail";
import DriverDetail from "./pages/DriverDetail";
import Chart from "./pages/Chart";
import Circuit from "./pages/Circuits";
import NotFound from "./pages/NotFound";

import Navbar from "./components/Navbar";

function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Drivers" element={<Drivers />} />
        <Route path="/Teams" element={<Teams />} />
        <Route path="/Races" element={<Races />} />

        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Statistiken" element={<Statistiken />} />
        <Route path="/Chart" element={<Chart />} />
        <Route path="/Circuits" element={<Circuits />} />

        <Route path="/RaceDetail/:id" element={<RaceDetail />} />
        <Route path="/DriverDetail/:id" element={<DriverDetail />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;