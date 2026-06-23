import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>🏎️ F1 Statistik Dashboard</h1>

      <p className="home-intro">
        Willkommen beim F1 Statistik Dashboard. Diese Anwendung ermöglicht
        die Analyse von Formel-1-Daten aus verschiedenen Saisons.
      </p>

      <p>
        Entdecke Fahrer, Teams und Rennen und erhalte detaillierte
        Einblicke in die Welt der Formel 1.
      </p>

      <br />

      <h2>Verfügbare Funktionen</h2>

      <p>👨‍🏎️ Fahrerübersicht mit Suchfunktion</p>
      <p>🏆 Teamübersicht aller Konstrukteure</p>
      <p>🏁 Rennübersicht mit Detailseiten</p>
      <p>📊 Statistische Auswertungen</p>
      <p>📈 Diagramme und Visualisierungen</p>

      <br />

      <h2>Fun Fact</h2>

      <p className="fun-fact">
        „Die Formel 1 gilt als die höchste Klasse des internationalen
        Motorsports und begeistert jedes Jahr Millionen von Fans weltweit.“
      </p>

      <br />

      <h2>Projektziel</h2>

      <p>
        Ziel dieses Projekts ist die Entwicklung einer modernen
        Webanwendung zur Analyse und Visualisierung von Formel-1-Daten
        mithilfe von React und Supabase.
      </p>
    </div>
  );
}

export default Home;
