import { useCallback, useMemo, type ReactNode } from "react";
import {
  CurrencyContext,
  type CurrencyContextType,
  type Moneda,
} from "./CurrencyContext";
import { useLocalStorage } from "../hooks/useLocalStorage";

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [moneda, setMoneda] = useLocalStorage<Moneda>("moneda", "ARS");

  const alternarMoneda = useCallback(() => {
    setMoneda((m) => (m === "ARS" ? "USD" : "ARS"));
  }, [setMoneda]);

  const value = useMemo<CurrencyContextType>(
    () => ({ moneda, setMoneda, alternarMoneda }),
    [moneda, setMoneda, alternarMoneda],
  );

  return (
    <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>
  );
}
