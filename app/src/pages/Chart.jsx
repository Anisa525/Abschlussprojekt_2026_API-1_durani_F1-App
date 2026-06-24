/**
 * Abschlussprojekt 2026
 * Formula 1 Statistik App
 *
 * Autor: Anisa Durani
 * Beschreibung: Chart-Seite
 * Datenquelle: Supabase
 * Technologie: React, Vite, React Router
 */
import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function Chart() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const { data, error } = await supabase
      .from("results")
      .select(`
        position,
        constructors (
          name
        )
      `);

    if (error) {
      console.error(error);
      return;
    }

    const teamWins = {};

    data.forEach((result) => {
      if (Number(result.position) === 1) {
        const teamName = result.constructors?.name;

        if (teamName) {
          teamWins[teamName] = (teamWins[teamName] || 0) + 1;
        }
      }
    });

    const formattedData = Object.entries(teamWins)
      .map(([team, siege]) => ({
        team,
        siege,
      }))
      .filter((item) => item.siege > 0)
      .sort((a, b) => b.siege - a.siege);

    setChartData(formattedData);
  }

  return (
    <div>
      <h1>Siege pro Team</h1>

      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="team"
            angle={-45}
            textAnchor="end"
            interval={0}
            height={120}
          />

          <YAxis />
          <Tooltip />

          <Bar dataKey="siege" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;