import { createContext } from "react";

export type Moneda = "ARS" | "USD";

// tasa fija de conversión ARS (esto variaría todos los días xD) -> USD
export const TASA_ARS_POR_USD = 1000;

export interface CurrencyContextType {
  moneda: Moneda;
  setMoneda: (m: Moneda) => void;
  alternarMoneda: () => void;
}

export const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined,
);
