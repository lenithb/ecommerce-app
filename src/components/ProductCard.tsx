import { Link } from "react-router-dom";
import type { Product } from "../interfaces/Product";

const precioCLP = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0,
});

export function ProductCard({ product }: { product: Product }) {
  const agotado = product.stock <= 0;
  const ultimasUnidades = !agotado && product.stock <= 6;

  return (
    <article className="group">
      <Link
        to={`/product/${product.id}`}
        style={{ background: "#0b0b0d", borderColor: "var(--border)" }}
        className="block rounded-2xl border overflow-hidden shadow-[var(--shadow)] transition-all duration-200 hover:-translate-y-1 hover:!border-[rgba(255,255,255,0.25)]"
      >
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={product.image}
            alt={`Portada de ${product.name}`}
            loading="lazy"
            className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${
              agotado ? "opacity-40 grayscale" : ""
            }`}
          />
          <span
            style={{ background: "var(--glass-strong)", borderColor: "var(--glass-border)", color: "var(--text)" }}
            className="absolute top-3 left-3 px-2.5 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest backdrop-blur-md"
          >
            {product.category}
          </span>
          {agotado && (
            <span
              style={{ background: "var(--glass-strong)", borderColor: "var(--glass-border)", color: "var(--text-h)" }}
              className="absolute top-3 right-3 px-2.5 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest backdrop-blur-md"
            >
              Agotado
            </span>
          )}
          {ultimasUnidades && (
            <span
              style={{ background: "var(--glass-strong)", borderColor: "var(--glass-border)", color: "var(--text-h)" }}
              className="absolute top-3 right-3 px-2.5 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest backdrop-blur-md"
            >
              ¡Últimas {product.stock}!
            </span>
          )}
        </div>

        <div className="p-4 text-left">
          <h3
            style={{ color: "var(--text-h)" }}
            className="text-sm font-black leading-snug truncate"
          >
            {product.name}
          </h3>
          <p
            style={{ color: "var(--text)" }}
            className="mt-1 text-xs leading-relaxed line-clamp-2 min-h-8"
          >
            {product.description}
          </p>

          <div className="mt-4 flex items-center justify-between gap-3">
            <span style={{ color: "var(--text-h)" }} className="text-lg font-black tabular-nums">
              {precioCLP.format(product.price)}
            </span>
            <span
              style={
                agotado
                  ? { color: "var(--text)", borderColor: "var(--border)" }
                  : { backgroundColor: "var(--text-h)", color: "var(--bg)" }
              }
              className={`px-3.5 py-2 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-opacity ${
                agotado ? "" : "group-hover:opacity-90"
              }`}
            >
              {agotado ? "No disponible" : "Comprar"}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
