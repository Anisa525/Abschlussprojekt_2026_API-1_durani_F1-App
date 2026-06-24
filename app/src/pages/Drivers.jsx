/**
 * Abschlussprojekt 2026
 * Formula 1 Statistik App
 *
 * Autor: Anisa Durani
 * Beschreibung: Fahrer-Seite
 * Datenquelle: Supabase
 * Technologie: React, Vite, React Router
 */
import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { Link } from "react-router-dom";
import "../styles/Drivers.css";

function Drivers() {
  const [drivers, setDrivers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDrivers();
  }, []);

  async function fetchDrivers() {
    setLoading(true);

    const { data, error } = await supabase.from("drivers").select("*");

    if (error) {
      console.error(error);
    } else {
      setDrivers(data);
    }

    setLoading(false);
  }

  const filteredDrivers = drivers.filter((driver) => {
    const fullName = `${driver.forename} ${driver.surname}`.toLowerCase();
    return fullName.includes(search.toLowerCase());
  });

  return (
    <div className="drivers-container">
      <h1 className="page-title">🏎️ F1 Fahrer</h1>

      <input
        className="search-input"
        type="text"
        placeholder="Fahrer suchen..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading ? (
        <p className="loading">Lade Fahrer...</p>
      ) : (
        <div className="drivers-grid">
          {filteredDrivers.map((driver) => (
            <Link
              to={`/DriverDetail/${driver.driver_id}`}
              key={driver.driver_id}
              className="driver-card"
            >
              <p className="driver-name">
                {driver.forename} {driver.surname}
              </p>

              <p className="driver-meta">
                {driver.nationality} • #{driver.number}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Drivers;