import { createContext } from "react";
import type { Product } from "../interfaces/Product";

export interface ProductContextType {
  products: Product[];
  // falta agregar al contexto las funciones que necesite el admin,
  // ej: addProduct(product) / removeProduct(id) / getProductById(id) (nose se falta otra)
}

export const ProductContext = createContext<ProductContextType | undefined>(
  undefined,
);
