import { supabase } from "../services/supabase";

function LogoutButton() {

  async function handleLogout() {
    await supabase.auth.signOut();

    window.location.href = "/";
  }

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}

export default LogoutButton;