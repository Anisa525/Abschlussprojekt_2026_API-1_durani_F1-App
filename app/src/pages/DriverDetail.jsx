import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../services/supabase";
import "../styles/DriverDetail.css";

function DriverDetail() {
  const { id } = useParams();
  const [driver, setDriver] = useState(null);

  useEffect(() => {
    fetchDriver();
  }, [id]);

  async function fetchDriver() {
    const { data, error } = await supabase
      .from("drivers")
      .select("*")
      .eq("driver_id", id)
      .single();

    if (!error) setDriver(data);
    else console.error(error);
  }

  if (!driver) {
    return <p className="f1-loading">Lade Fahrer...</p>;
  }

  return (
    <div className="f1-page">
      <h1 className="f1-title">Driver Details</h1>

      <div className="f1-detail-card">

        <div className="f1-row">
          <span className="f1-label">Name</span>
          <span className="f1-value">
            {driver.forename} {driver.surname}
          </span>
        </div>

        <div className="f1-row">
          <span className="f1-label">Nationalität</span>
          <span className="f1-value">{driver.nationality}</span>
        </div>

        <div className="f1-row">
          <span className="f1-label">Geburt</span>
          <span className="f1-value">{driver.dob}</span>
        </div>

      </div>

      <Link to="/Drivers" className="back-button">
        ← Zurück zu den Fahrern
      </Link>
    </div>
  );
}

export default DriverDetail;