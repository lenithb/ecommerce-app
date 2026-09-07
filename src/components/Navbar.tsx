import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <nav
      style={{ background: "var(--bg)", borderColor: "var(--border)" }}
      className="w-full text-slate-100 border-b sticky top-0 z-50 font-sans shadow-[var(--shadow)]"
    >
      <div className="w-full px-6 md:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group select-none py-1">
          <div
            style={{
              background: "var(--accent)",
              boxShadow: "0 0 15px var(--accent-border)",
            }}
            className="relative flex items-center justify-center text-white font-black text-sm tracking-tighter w-10 h-10 rounded-xl transition-transform duration-200 group-hover:scale-105"
          >
            <span className="transform -translate-y-0.5 -translate-x-0.5 text-xs font-black">
              L·AC
            </span>
          </div>

          <div className="uppercase">
            <span
              style={{ color: "var(--text-h)" }}
              className="text-xs font-black tracking-[0.2em]"
            >
              LEGADO AC
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-bold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors duration-200 ${isActive ? "font-black" : "hover:text-[var(--text-h)]"}`
            }
            style={({ isActive }) => ({
              color: isActive ? "var(--accent)" : "var(--text)",
            })}
          >
            Tienda
          </NavLink>
          <NavLink
            to="/categories/lanzamientos"
            className={({ isActive }) =>
              `transition-colors duration-200 ${isActive ? "font-black" : "hover:text-[var(--text-h)]"}`
            }
            style={({ isActive }) => ({
              color: isActive ? "var(--accent)" : "var(--text)",
            })}
          >
            Novedades
          </NavLink>
          <NavLink
            to="/categories/ofertas"
            className={({ isActive }) =>
              `transition-colors duration-200 ${isActive ? "font-black" : "hover:text-[var(--text-h)]"}`
            }
            style={({ isActive }) => ({
              color: isActive ? "var(--accent)" : "var(--text)",
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
            style={{ color: "var(--text)" }}
            className="relative p-1 hover:text-[var(--text-h)] transition-colors text-lg"
          >
            🛒
            <span
              style={{
                backgroundColor: "var(--accent)",
                ringColor: "var(--bg)",
              }}
              className="absolute top-1 right-1 h-2 w-2 rounded-full ring-2"
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
          style={{ background: "var(--code-bg)", borderColor: "var(--border)" }}
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
              to="/categories/lanzamientos"
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
