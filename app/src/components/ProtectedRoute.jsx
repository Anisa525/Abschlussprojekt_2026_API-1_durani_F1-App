import { Navigate } from "react-router-dom";

function ProtectedRoute({ session, children }) {
  // Wenn KEINE Session existiert, schicke den User sofort zum Login
  if (!session) {
    return <Navigate to="/Login" replace />;
  }

  // Wenn eine Session existiert, zeige die eigentliche Seite
  return children;
}

export default ProtectedRoute;