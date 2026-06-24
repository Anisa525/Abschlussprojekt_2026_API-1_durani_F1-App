/**
 * Abschlussprojekt 2026
 * Formula 1 Statistik App
 *
 * Autor: Anisa Durani
 * Beschreibung: Teams-Seite
 * Datenquelle: Supabase
 * Technologie: React, Vite, React Router
 */
import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import "../styles/Teams.css";

function Teams() {
  const [teams, setTeams] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchTeams() {
      const { data, error } = await supabase
        .from("constructors")
        .select("*");

      if (!error) {
        setTeams(data);
      }
    }

    fetchTeams();
  }, []);

  const filteredTeams = teams.filter((team) =>
    team.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="teams-page">
      <h1 className="teams-title">🏎️ Formel 1 Teams</h1>

      <input
        className="teams-search"
        type="text"
        placeholder="Team suchen..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="teams-grid">
        {filteredTeams.map((team) => (
          <div
            key={team.constructor_id}
            className="team-card"
          >
            <div className="team-stripe"></div>

            <h2>{team.name}</h2>

            <p>
              🌍 {team.nationality || "Keine Nationalität vorhanden"}
            </p>

            <p>
              Team-ID: {team.constructor_id}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;