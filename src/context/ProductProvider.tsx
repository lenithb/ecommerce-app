import { useState, type ReactNode } from "react";
import { ProductContext } from "./ProductContext";
import type { Product } from "../interfaces/Product";

export function ProductProvider({ children }: { children: ReactNode }) {
  // se cargan los productos desde src/data/productos-seed.json o del backend
  const [products] = useState<Product[]>([]);

  // completen el value con las funciones de ProductContextType
  const value = { products };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}
