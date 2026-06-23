import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { Link } from "react-router-dom";
import "../styles/Races.css";

function Races() {
  const [races, setRaces] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchRaces() {
      const { data, error } = await supabase
        .from("races")
        .select("*");

      if (!error) {
        setRaces(data);
      }
    }

    fetchRaces();
  }, []);

  return (
    <div className="race-page">
      <h1 className="race-title">🏁 Rennen</h1>

      <input
        className="race-search"
        type="text"
        placeholder="Rennen suchen..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="race-grid">
        {races
          .filter((race) =>
            race.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((race) => (
            <Link
              to={`/RaceDetail/${race.race_id}`}
              key={race.race_id}
              className="race-card"
            >
              <h3>{race.name}</h3>
              <p>Saison {race.year}</p>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Races;