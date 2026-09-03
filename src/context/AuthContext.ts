import { createContext } from "react";

export interface AuthContextType {
  isAdmin: boolean;
  user: string | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);
