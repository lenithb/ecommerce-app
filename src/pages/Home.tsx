import { useMemo, useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { ProductCard } from "../components/ProductCard";
import { SearchBar } from "../components/SearchBar";

export function Home() {
  const ctx = useContext(ProductContext);
  const products = useMemo(() => ctx?.products ?? [], [ctx]);

  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todo");

  const categorias = useMemo(
    () => [
      "Todo",
      ...Array.from(new Set(products.map((p) => p.category))).sort(),
    ],
    [products],
  );

  const filtrados = useMemo(() => {
    const q = busqueda.trim().toLowerCase();
    return products.filter((p) => {
      const coincideCategoria =
        categoria === "Todo" || p.category === categoria;
      const coincideBusqueda =
        q === "" ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      return coincideCategoria && coincideBusqueda;
    });
  }, [products, busqueda, categoria]);

  return (
    <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans text-left">
      <section
        className="relative rounded-3xl overflow-hidden border"
        style={{ borderColor: "var(--border)" }}
      >
        <img
          src="/banner1.webp"
          alt="Banner KeySpot"
          className="w-full h-auto object-cover object-center select-none"
        />
        <div
          className="absolute inset-0 flex flex-col justify-end px-6 sm:px-10 pb-5 sm:pb-7 gap-1"
          style={{
            background:
              "linear-gradient(0deg, rgba(6,6,7,0.85) 0%, rgba(6,6,7,0.35) 45%, transparent 70%)",
          }}
        >
          <h2
            style={{
              color: "var(--text-h)",
              textShadow: "0 2px 12px rgba(0,0,0,0.8)",
            }}
            className="text-lg sm:text-2xl font-black tracking-tight"
          >
            Cansado de piratear? Compra los juegos ratón.
          </h2>
          <p
            style={{
              color: "var(--text)",
              textShadow: "0 1px 8px rgba(0,0,0,0.8)",
            }}
            className="text-xs sm:text-sm font-medium"
          >
            {products.length} productos con entrega inmediata
          </p>
        </div>
      </section>

      {/* Buscador + filtros */}
      <section className="mt-8 flex flex-col gap-4">
        <div className="max-w-md">
          <SearchBar value={busqueda} onChange={setBusqueda} />
        </div>
        <div className="flex flex-wrap gap-2">
          {categorias.map((c) => {
            const activo = c === categoria;
            return (
              <button
                key={c}
                onClick={() => setCategoria(c)}
                style={
                  activo
                    ? {
                        backgroundColor: "var(--text-h)",
                        color: "var(--bg)",
                        borderColor: "var(--text-h)",
                      }
                    : {
                        color: "var(--text)",
                        borderColor: "var(--border)",
                        background: "#0b0b0d",
                      }
                }
                className="px-3.5 py-1.5 rounded-full border text-[11px] font-black uppercase tracking-widest cursor-pointer transition-all duration-200 hover:!border-[var(--text-h)]"
              >
                {c}
              </button>
            );
          })}
        </div>
      </section>

      {/* Grid de productos */}
      {filtrados.length > 0 ? (
        <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtrados.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </section>
      ) : (
        <div
          style={{
            color: "var(--text)",
            borderColor: "var(--border)",
            background: "#0b0b0d",
          }}
          className="mt-8 rounded-2xl border p-10 text-center"
        >
          <p className="text-sm font-semibold">
            No encontramos resultados para "{busqueda}"
          </p>
          <button
            onClick={() => {
              setBusqueda("");
              setCategoria("Todo");
            }}
            style={{ color: "var(--text-h)" }}
            className="mt-3 text-xs font-black uppercase tracking-widest hover:underline cursor-pointer"
          >
            Limpiar filtros
          </button>
        </div>
      )}
    </main>
  );
}
