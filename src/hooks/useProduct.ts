import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import type { Product } from "../interfaces/Product";

// hook para obtener un solo producto por su id (para ProductDetail)
export function useProduct(id: string | undefined): Product | undefined {
  const ctx = useContext(ProductContext);
  // buscar y devolver el producto cuyo id coincida con `id`
  return ctx?.products.find((p) => p.id === id);
}
