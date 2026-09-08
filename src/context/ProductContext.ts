import { createContext } from "react";
import type { Product } from "../interfaces/Product";

export type NewProduct = Omit<Product, "id"> & { id?: string };

export interface ProductContextType {
  products: Product[];
  getProductById: (id: string | undefined) => Product | undefined;
  addProduct: (product: NewProduct) => Product;
  updateProduct: (product: Product) => void;
  removeProduct: (id: string) => void;
}

export const ProductContext = createContext<ProductContextType | undefined>(
  undefined,
);

// Para empezar a consumir de un componente/página:
//   const { products, addProduct, removeProduct, updateProduct, getProductById } =
//     useContext(ProductContext)
