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

// Para empezar a consumir de un componente/página:
//   const auth = useContext(AuthContext)
//   auth.login(...) / auth.logout() / auth.isAdmin
