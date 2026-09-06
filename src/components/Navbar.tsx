import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <nav className="w-full bg-[#0a1128]/95 backdrop-blur-md text-slate-100 border-b border-white/[0.06] sticky top-0 z-50 font-sans">
      <div className="w-full px-6 md:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group select-none py-1">
          <div className="relative flex items-center justify-center bg-[#dea75b] text-[#0a1128] font-black text-sm tracking-tighter w-10 h-10 rounded-xl shadow-[0_0_15px_rgba(222,167,91,0.2)] transition-transform duration-200 group-hover:scale-105">
            <span className="transform -translate-y-0.5 -translate-x-0.5 text-xs font-black">
              L·AC
            </span>
          </div>

          <div className=" uppercase">
            <span className="text-xs font-black tracking-[0.2em] text-white">
              LEGADO AC
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-bold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors duration-200 ${isActive ? "text-[#dea75b] font-black" : "text-slate-400 hover:text-white"}`
            }
          >
            Tienda
          </NavLink>
          <NavLink
            to="/categories/lanzamientos"
            className={({ isActive }) =>
              `transition-colors duration-200 ${isActive ? "text-[#dea75b] font-black" : "text-slate-400 hover:text-white"}`
            }
          >
            Novedades
          </NavLink>
          <NavLink
            to="/categories/ofertas"
            className={({ isActive }) =>
              `transition-colors duration-200 ${isActive ? "text-[#dea75b] font-black" : "text-slate-400 hover:text-white"}`
            }
          >
            Ofertas
          </NavLink>
        </div>

        {/* ACCIONES DE LA DERECHA */}
        <div className="flex items-center gap-5">
          {/* Carrito con indicador */}
          <Link
            to="/cart"
            className="relative p-1 text-slate-400 hover:text-white transition-colors text-lg"
          >
            🛒
            <span className="absolute top-1 right-1 bg-[#dea75b] h-2 w-2 rounded-full ring-2 ring-[#0a1128]"></span>
          </Link>

          {/* Botón de cuenta */}
          <Link
            to="/login"
            className="hidden md:block text-xs font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-wider"
          >
            Mi Cuenta
          </Link>

          {/* Hamburguesa Móvil */}
          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="md:hidden text-xl text-slate-400 hover:text-white focus:outline-none"
          >
            {menuAbierto ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* --- MENÚ DESPLEGABLE MÓVIL --- */}
      {menuAbierto && (
        <div className="md:hidden bg-[#0a1128] border-t border-white/[0.06] w-full">
          <div className="flex flex-col p-6 space-y-4 text-xs uppercase tracking-widest font-bold text-slate-400">
            <Link
              to="/"
              onClick={() => setMenuAbierto(false)}
              className="hover:text-white py-1"
            >
              Tienda
            </Link>
            <Link
              to="/categories/lanzamientos"
              onClick={() => setMenuAbierto(false)}
              className="hover:text-white py-1"
            >
              Novedades
            </Link>
            <Link
              to="/categories/ofertas"
              onClick={() => setMenuAbierto(false)}
              className="hover:text-white py-1"
            >
              Ofertas
            </Link>
            <Link
              to="/login"
              onClick={() => setMenuAbierto(false)}
              className="text-white pt-2 border-t border-white/[0.06]"
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
