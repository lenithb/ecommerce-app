import { useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";

const STORAGE_KEY = "ecommerce-auth-session";

interface StoredSession {
  user: string | null;
  isAdmin: boolean;
}

function readStoredSession(): StoredSession {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<StoredSession>;
      return { user: parsed.user ?? null, isAdmin: Boolean(parsed.isAdmin) };
    }
  } catch {
    return { user: null, isAdmin: false };
  }
  return { user: null, isAdmin: false };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<StoredSession>(readStoredSession);

  // este placeholder solo acepta cualquier email/password no vacío
  const login = (email: string, password: string) => {
    const ok = email.length > 0 && password.length > 0;
    const next: StoredSession = ok
      ? { user: email, isAdmin: true }
      : { user: null, isAdmin: false };
    setSession(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    return ok;
  };

  const logout = () => {
    setSession({ user: null, isAdmin: false });
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <AuthContext.Provider
      value={{ isAdmin: session.isAdmin, user: session.user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
