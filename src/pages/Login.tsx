import { useState, useContext, type FormEvent } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext)!;

  // Mantengo los estados estructurados de forma independiente
  const [correo, setCorreo] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorVisible, setErrorVisible] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorVisible(false);

    const validar = login(correo, password);

    if (validar) {
      console.log("logIn");
      navigate("/");
    } else {
      console.log("Usuario o contraseña incorrectos");
      setErrorVisible(true);
    }
  };

  return (
    <div className="w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div
        style={{ background: "var(--code-bg)", borderColor: "var(--border)" }}
        className="w-full max-w-md p-8 rounded-2xl shadow-[var(--shadow)] border"
      >
        <div className="flex flex-col items-center mb-8 select-none">
          <img
            src="/images/logo.png"
            alt="Logo de KeySpot"
            className="w-14 h-14 rounded-2xl object-cover mb-4"
          />
          <span
            style={{ color: "var(--text)" }}
            className="text-[11px] font-black tracking-[0.3em] uppercase mb-2"
          >
            KeySpot
          </span>
          <h1
            style={{ color: "var(--text-h)" }}
            className="text-xl font-black tracking-[0.2em] uppercase"
          >
            Inicio de sesión
          </h1>
        </div>

        {errorVisible && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold rounded-xl text-left">
            ⚠️ Usuario o contraseña incorrectos
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          <div className="flex flex-col gap-1.5">
            {/* Color del texto sincronizado con tus variables */}
            <label
              style={{ color: "var(--text)" }}
              className="text-[11px] font-black uppercase tracking-widest pl-1"
            >
              Correo:
            </label>
            <input
              style={{
                color: "var(--text-h)",
                borderColor: "var(--border)",
                background: "var(--bg)",
              }}
              className="w-full border rounded-xl px-4 py-3 text-sm placeholder-slate-500 transition-all duration-200 outline-none focus:outline-none focus:!border-[var(--text-h)] focus:ring-1 focus:ring-[var(--text-h)]"
              type="email"
              placeholder="Escribe tu correo electrónico"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            {/* Color del texto sincronizado con tus variables */}
            <label
              style={{ color: "var(--text)" }}
              className="text-[11px] font-black uppercase tracking-widest pl-1"
            >
              Contraseña:
            </label>
            <input
              style={{
                color: "var(--text-h)",
                borderColor: "var(--border)",
                background: "var(--bg)",
              }}
              className="w-full border rounded-xl px-4 py-3 text-sm placeholder-slate-500 transition-all duration-200 outline-none focus:outline-none focus:!border-[var(--text-h)] focus:ring-1 focus:ring-[var(--text-h)]"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="pt-2 grid">
            <button
              style={{ backgroundColor: "var(--text-h)", color: "var(--bg)" }}
              className="w-full font-black text-xs uppercase py-3.5 px-4 rounded-xl transition-all duration-200 cursor-pointer shadow-[var(--shadow)] hover:opacity-90 transform active:scale-[0.99]"
            >
              Iniciar
            </button>
          </div>
        </form>

        <div
          style={{ borderColor: "var(--border)" }}
          className="mt-8 text-center border-t pt-5"
        >
          <p style={{ color: "var(--text)" }} className="text-xs font-semibold">
            ¿Problemas con el servidor?{" "}
            <Link
              to="*"
              style={{ color: "var(--text-h)" }}
              className="font-black hover:underline transition-colors ml-1"
            >
              Soporte Técnico
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
