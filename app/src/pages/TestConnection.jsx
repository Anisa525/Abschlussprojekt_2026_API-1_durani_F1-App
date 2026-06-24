/**
 * Abschlussprojekt 2026
 * Formula 1 Statistik App
 *
 * Autor: Anisa Durani
 * Beschreibung: Testseite für die Verbindung zu Supabase
 * Datenquelle: Supabase
 * Technologie: React, Vite, React Router
 */
import { useEffect } from "react";
import { supabase } from "../services/supabase";

function TestConnection() {
  useEffect(() => {
    console.log("Supabase verbunden:", supabase);
  }, []);

  return <h1>Supabase Test</h1>;
}

export default TestConnection;