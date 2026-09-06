import { useState, useContext, type FormEvent } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { autentication } = useContext(AuthContext) as any;

  // Mantengo los estados estructurados de forma independiente
  const [correo, setCorreo] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorVisible, setErrorVisible] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorVisible(false);

    //  función logica  de validación
    const validar = autentication(correo, password);

    if (validar.ok) {
      console.log("logIn");
      navigate("/");
    } else {
      console.log("Usuario o contraseña incorrectos");
      setErrorVisible(true);
    }
  };

  return (
    <div className="w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="w-full max-w-md bg-slate-700 backdrop-blur-md p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
        <div className="flex flex-col items-center mb-8 select-none">
          <div className="relative flex items-center justify-center bg-orange-400 text-slate-800 text-xl  w-14 h-14 rounded-2xl mb-4">
            <span className="transform -translate-y-0.5 -translate-x-0.5 text-sm font-black">
              L·AC
            </span>
          </div>

          <h1 className="text-xl font-black tracking-[0.2em] text-white uppercase">
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
            <label className="text-[11px] font-black uppercase tracking-widest text-slate-300 pl-1">
              Correo:
            </label>
            <input
              className="w-full bg-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-all duration-200 outline-none"
              type="email"
              placeholder="Escribe tu correo electrónico"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 pl-1">
              Contraseña:
            </label>
            <input
              className="w-full bg-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-all duration-200 outline-none"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="pt-2 grid">
            <button className="w-full bg-orange-400 hover:bg-orange-300 text-slate-900 font-black text-xs uppercase py-3.5 px-4 rounded-xl transition-all duration-200 cursor-pointer ">
              Iniciar
            </button>
          </div>
        </form>

        <div className="mt-8 text-center  pt-5">
          <p className="text-xs font-semibold text-slate-400">
            ¿Problemas con el servidor?{" "}
            <Link
              to="*"
              className="text-orange-400 font-black hover:text-white transition-colors ml-1"
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
