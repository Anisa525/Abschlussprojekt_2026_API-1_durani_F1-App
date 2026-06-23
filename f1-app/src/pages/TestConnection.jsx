import { useEffect } from "react";
import { supabase } from "../services/supabase";

function TestConnection() {
  useEffect(() => {
    console.log("Supabase verbunden:", supabase);
  }, []);

  return <h1>Supabase Test</h1>;
}

export default TestConnection;