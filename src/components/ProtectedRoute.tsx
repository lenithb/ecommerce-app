import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const auth = useContext(AuthContext);

  if (!auth?.isAdmin) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
