import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Drivers from "./pages/Drivers";
import Teams from "./pages/Teams";
import Races from "./pages/Races";
import Dashboard from "./pages/Dashbord";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Drivers" element={<Drivers />} />
        <Route path="/Teams" element={<Teams />} />
        <Route path="/Races" element={<Races />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;