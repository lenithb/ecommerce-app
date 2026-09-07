import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

interface LoginFormInputs {
  correo: string;
  password: string;
}

const LoginScreen = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  // Logica para guardar en el localStorage
  const formSubmit = (data: LoginFormInputs) => {
    const { correo } = data;
    localStorage.setItem("user", JSON.stringify(correo));
    navigate("/");
  };

  return (
    <div className="w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div
        style={{ background: "var(--code-bg)", borderColor: "var(--border)" }}
        className="w-full max-w-md p-8 rounded-2xl shadow-[var(--shadow)] border"
      >
        <div className="flex flex-col items-center mb-8 select-none">
          <div
            style={{
              background: "var(--accent)",
              boxShadow: "0 0 25px var(--accent-border)",
            }}
            className="relative flex items-center justify-center text-white font-black text-xl tracking-tighter w-14 h-14 rounded-2xl mb-4 bg-[var(--accent)]"
          >
            <span className="transform -translate-y-0.5 -translate-x-0.5 text-sm font-black">
              L·AC
            </span>
          </div>

          <h1
            style={{ color: "var(--text-h)" }}
            className="text-xl font-black tracking-[0.2em] uppercase"
          >
            Inicio de sesión
          </h1>
        </div>

        <form
          onSubmit={handleSubmit(formSubmit)}
          className="space-y-5 text-left"
        >
          <div className="flex flex-col gap-1.5">
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
              className="w-full border rounded-xl px-4 py-3 text-sm  transition-all duration-200 outline-none focus:outline-none focus:!border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
              type="email"
              placeholder="Escribe tu correo electrónico"
              {...register("correo", {
                required: "El campo es obligatorio",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Formato de correo inválido",
                },
              })}
            />
            {errors.correo && (
              <p className="text-red-500 text-xs font-semibold pl-1 mt-1">
                {errors.correo.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
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
              className="w-full border rounded-xl px-4 py-3 text-sm placeholder-•••••••• transition-all duration-200 outline-none focus:outline-none focus:!border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
              type="password"
              placeholder="••••••••"
              {...register("password", {
                required: "El campo es obligatorio",
                pattern: {
                  value:
                    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un símbolo",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-xs font-semibold pl-1 mt-1 max-w-xs leading-relaxed">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="pt-2 grid">
            <button
              style={{ backgroundColor: "var(--accent)", color: "var(--bg)" }}
              className="w-full font-black text-xs uppercase py-3.5 px-4 rounded-xl transition-all duration-200 cursor-pointer shadow-[0_4px_15px_var(--accent-border)] hover:opacity-90 transform active:scale-[0.99]"
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
              to="/help"
              style={{ color: "var(--accent)" }}
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

export default LoginScreen;
