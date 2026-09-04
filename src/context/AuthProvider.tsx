import { useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState<string | null>(null);

  const login = (email: string, password: string) => {
    // este placeholder solo acepta cualquier email/password no vacío:
    const ok = email.length > 0 && password.length > 0;
    setIsAdmin(ok);
    setUser(ok ? email : null);
    return ok;
  };

  const logout = () => {
    setIsAdmin(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAdmin, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
