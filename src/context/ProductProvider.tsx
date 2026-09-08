import { useCallback, useMemo, useState, type ReactNode } from "react";
import { ProductContext, type NewProduct } from "./ProductContext";
import type { Product } from "../interfaces/Product";
import seed from "../data/productos-seed.json";

function mapSeedProduct(p: (typeof seed)[number]): Product {
  return {
    id: String(p.id),
    name: p.nombre,
    description: p.descripcion,
    price: p.precio,
    image: p.imagen,
    category: p.categoria,
    stock: p.stock,
  };
}

const initialProducts = seed.map(mapSeedProduct);

export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const getProductById = useCallback(
    (id: string | undefined) => products.find((p) => p.id === id),
    [products],
  );

  const addProduct = useCallback((product: NewProduct): Product => {
    const newProduct: Product = {
      ...product,
      id: product.id ?? crypto.randomUUID(),
    };
    setProducts((prev) => [...prev, newProduct]);
    return newProduct;
  }, []);

  const updateProduct = useCallback((product: Product) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === product.id ? product : p)),
    );
  }, []);

  const removeProduct = useCallback((id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const value = useMemo(
    () => ({ products, getProductById, addProduct, updateProduct, removeProduct }),
    [products, getProductById, addProduct, updateProduct, removeProduct],
  );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}
