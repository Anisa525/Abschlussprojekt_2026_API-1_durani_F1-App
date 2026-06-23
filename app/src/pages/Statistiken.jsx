import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import "../styles/Statistiken.css";

function Statistiken() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchStatistics();
  }, []);

  async function fetchStatistics() {
    const { data, error } = await supabase
      .from("results")
      .select(`
        position,
        points,
        drivers (
          forename,
          surname
        ),
        constructors (
          name
        ),
        races (
          year
        )
      `);

    if (error) {
      console.error(error);
    } else {
      setResults(data);
    }
  }

  // Siege pro Fahrer
  const driverWins = {};

  results.forEach((result) => {
    if (Number(result.position) === 1) {
      const driverName =
        `${result.drivers?.forename} ${result.drivers?.surname}`;

      driverWins[driverName] =
        (driverWins[driverName] || 0) + 1;
    }
  });

  // Punkte pro Team
  const teamPoints = {};

  results.forEach((result) => {
    const teamName = result.constructors?.name;

    if (teamName) {
      teamPoints[teamName] =
        (teamPoints[teamName] || 0) +
        Number(result.points || 0);
    }
  });

  // Rennen pro Saison
  const racesPerSeason = {};

  results.forEach((result) => {
    const season = result.races?.year;

    if (season) {
      racesPerSeason[season] =
        (racesPerSeason[season] || 0) + 1;
    }
  });

  return (
    <div className="stats-container">
      <h1>Formel 1 Statistiken</h1>

      <div className="stats-section">
        <h2>Siege pro Fahrer</h2>

        {Object.entries(driverWins)
          .sort((a, b) => b[1] - a[1])
          .map(([name, wins]) => (
            <div className="stat-card" key={name}>
              <span>{name}</span>
              <strong>{wins} Siege</strong>
            </div>
          ))}
      </div>

      <div className="stats-section">
        <h2>Punkte pro Team</h2>

        {Object.entries(teamPoints)
          .sort((a, b) => b[1] - a[1])
          .map(([team, points]) => (
            <div className="stat-card" key={team}>
              <span>{team}</span>
              <strong>{points} Punkte</strong>
            </div>
          ))}
      </div>

      <div className="stats-section">
        <h2>Rennen pro Saison</h2>

        {Object.entries(racesPerSeason)
          .sort((a, b) => b[0] - a[0])
          .map(([season, races]) => (
            <div className="stat-card" key={season}>
              <span>Saison {season}</span>
              <strong>{races} Rennen</strong>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Statistiken;