/**
 * Abschlussprojekt 2026
 * Formula 1 Statistik App
 *
 * Autor: Anisa Durani
 * Beschreibung: Race-Detailseite
 * Datenquelle: Supabase
 * Technologie: React, Vite, React Router
 */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { supabase } from "../services/supabase";
import "../styles/Races.css";

function RaceDetail() {
  const { id } = useParams();
  const [race, setRace] = useState(null);

  useEffect(() => {
    fetchRace();
  }, []);

  async function fetchRace() {
    const { data, error } = await supabase
      .from("races")
      .select("*")
      .eq("race_id", id)
      .single();

    if (error) {
      console.error(error);
    } else {
      setRace(data);
    }
  }

  if (!race) {
    return <p>Lade Rennen...</p>;
  }

  return (
    <div className="race-page">
      <h1 className="race-title">{race.name}</h1>

      <div className="race-detail-card">
        <div className="race-row">
          <span className="race-label">Renn-ID</span>
          <span className="race-value">{race.race_id}</span>
        </div>

        <div className="race-row">
          <span className="race-label">Saison</span>
          <span className="race-value">{race.year}</span>
        </div>

        <div className="race-row">
          <span className="race-label">Datum</span>
          <span className="race-value">{race.date}</span>
        </div>

        <div className="race-row">
          <span className="race-label">Runde</span>
          <span className="race-value">{race.round}</span>
        </div>

        <div className="race-row">
          <span className="race-label">Strecke-ID</span>
          <span className="race-value">{race.circuit_id}</span>
        </div>
      </div>
      <Link to="/Races" className="back-button">
        ← Zurück zu den Rennen
      </Link>
    </div>
  );
}

export default RaceDetail;