/**
 * Abschlussprojekt 2026
 * Formula 1 Statistik App
 *
 * Autor: Anisa Durani
 * Beschreibung: Dashboard-Seite
 * Datenquelle: Supabase
 * Technologie: React, Vite, React Router
 */
import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import "../styles/StatisticsDashboard.css";

function StatisticsDashboard() {
  const [results, setResults] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedRace, setSelectedRace] = useState("");

  const uniqueTeams = [
    ...new Map(
      results
        .filter(r => r.constructors)
        .map(r => [r.constructor_id, r.constructors.name])
    ).entries()
  ];

  const uniqueRaces = [
    ...new Map(
      results
        .filter(r => r.races)
        .map(r => [r.race_id, r.races.name])
    ).entries()
  ];

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const { data, error } = await supabase
      .from("results")
      .select(`
        result_id,
        position,
        driver_id,
        constructor_id,
        race_id,
        drivers (forename, surname),
        constructors (name),
        races (name)
      `);

    if (error) {
      console.error(error);
    } else {
      setResults(data);
    }
  }

  const filteredResults = results.filter((r) => {
    const teamMatch =
      selectedTeam === "" ||
      String(r.constructor_id) === selectedTeam;

    const raceMatch =
      selectedRace === "" ||
      String(r.race_id) === selectedRace;

    return teamMatch && raceMatch;
  });

  return (
    <div className="dashboard">
      <h1>Statistik Dashboard</h1>

      <div className="filters">
        <select
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
        >
          <option value="">Alle Teams</option>
          {uniqueTeams.map(([id, name]) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>

        <select
          value={selectedRace}
          onChange={(e) => setSelectedRace(e.target.value)}
        >
          <option value="">Alle Rennen</option>
          {uniqueRaces.map(([id, name]) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <hr />

      <h2>Gefilterte Ergebnisse</h2>

      {filteredResults.map((r) => (
        <div className="result-card" key={r.result_id}>
          <p className="result-text">
            Fahrer: {r.drivers?.forename} {r.drivers?.surname} |
            Team: {r.constructors?.name} |
            Rennen: {r.races?.name} |
            Position: {r.position}
          </p>
        </div>
      ))}
    </div>
  );
}

export default StatisticsDashboard;