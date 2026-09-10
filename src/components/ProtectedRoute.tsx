import { Navigate } from "react-router-dom";
import { useContext, type ReactNode } from "react";
import { AuthContext } from "../context/AuthContext";

interface ProtectedRouteProps {
  children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const auth = useContext(AuthContext);

  // solo deja pasar si hay sesión de admin; si no, manda al login
  if (!auth?.isAdmin) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
