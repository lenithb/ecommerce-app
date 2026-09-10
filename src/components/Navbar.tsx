import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <nav
      style={{
        background: "var(--glass)",
        borderColor: "var(--glass-border)",
        backdropFilter: "var(--glass-blur)",
        WebkitBackdropFilter: "var(--glass-blur)",
      }}
      className="w-full text-slate-100 border-b sticky top-0 z-50 font-sans"
    >
      <div className="w-full px-6 md:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center group select-none py-1">
          <img
            src="/images/logo-wide.png"
            alt="KeySpot"
            className="h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-bold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors duration-200 ${isActive ? "font-black underline underline-offset-8 decoration-2" : "hover:text-[var(--text-h)]"}`
            }
            style={({ isActive }) => ({
              color: isActive ? "var(--text-h)" : "var(--text)",
              textDecorationColor: "var(--text-h)",
            })}
          >
            Tienda
          </NavLink>
          <NavLink
            to="/categories/novedades"
            className={({ isActive }) =>
              `transition-colors duration-200 ${isActive ? "font-black underline underline-offset-8 decoration-2" : "hover:text-[var(--text-h)]"}`
            }
            style={({ isActive }) => ({
              color: isActive ? "var(--text-h)" : "var(--text)",
              textDecorationColor: "var(--text-h)",
            })}
          >
            Novedades
          </NavLink>
          <NavLink
            to="/categories/ofertas"
            className={({ isActive }) =>
              `transition-colors duration-200 ${isActive ? "font-black underline underline-offset-8 decoration-2" : "hover:text-[var(--text-h)]"}`
            }
            style={({ isActive }) => ({
              color: isActive ? "var(--text-h)" : "var(--text)",
              textDecorationColor: "var(--text-h)",
            })}
          >
            Ofertas
          </NavLink>
        </div>

        {/* ACCIONES DE LA DERECHA */}
        <div className="flex items-center gap-5">
          {/* Carrito con indicador adaptado */}
          <Link
            to="/cart"
            style={{ color: "var(--accent)" }}
            className="relative p-1 hover:opacity-75 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            <span
              style={{
                backgroundColor: "var(--text-h)",
                boxShadow: "0 0 0 2px var(--bg)",
              }}
              className="absolute top-1 right-1 h-2 w-2 rounded-full"
            ></span>
          </Link>

          {/* Botón de cuenta */}
          <Link
            to="/login"
            style={{ color: "var(--text)" }}
            className="hidden md:block text-xs font-bold hover:text-[var(--text-h)] transition-colors uppercase tracking-wider"
          >
            Mi Cuenta
          </Link>

          {/* Hamburguesa Móvil */}
          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
            style={{ color: "var(--text)" }}
            className="md:hidden text-xl hover:text-[var(--text-h)] focus:outline-none"
          >
            {menuAbierto ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* --- MENÚ DESPLEGABLE MÓVIL --- */}
      {menuAbierto && (
        <div
          style={{
            background: "var(--glass-strong)",
            borderColor: "var(--glass-border)",
            backdropFilter: "var(--glass-blur)",
            WebkitBackdropFilter: "var(--glass-blur)",
          }}
          className="md:hidden border-t w-full"
        >
          <div className="flex flex-col p-6 space-y-4 text-xs uppercase tracking-widest font-bold">
            <Link
              to="/"
              onClick={() => setMenuAbierto(false)}
              style={{ color: "var(--text)" }}
              className="hover:text-[var(--text-h)] py-1"
            >
              Tienda
            </Link>
            <Link
              to="/categories/novedades"
              onClick={() => setMenuAbierto(false)}
              style={{ color: "var(--text)" }}
              className="hover:text-[var(--text-h)] py-1"
            >
              Novedades
            </Link>
            <Link
              to="/categories/ofertas"
              onClick={() => setMenuAbierto(false)}
              style={{ color: "var(--text)" }}
              className="hover:text-[var(--text-h)] py-1"
            >
              Ofertas
            </Link>
            <Link
              to="/login"
              onClick={() => setMenuAbierto(false)}
              style={{ color: "var(--text-h)", borderColor: "var(--border)" }}
              className="pt-2 border-t"
            >
              Mi Cuenta
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
