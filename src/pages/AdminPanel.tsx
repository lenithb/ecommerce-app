// panel de administración (ruta protegida por ProtectedRoute).

export function AdminPanel() {
  return (
    <main className="flex-1 w-full min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 font-sans">
      <div
        style={{ background: "#0b0b0d", borderColor: "var(--border)" }}
        className="w-full max-w-lg rounded-3xl border p-10 sm:p-14 text-center shadow-[var(--shadow)]"
      >
        <span className="text-5xl select-none" aria-hidden>
          🛠️
        </span>
        <h1
          style={{ color: "var(--text-h)" }}
          className="mt-6 text-xl sm:text-2xl font-black tracking-tight"
        >
          ¡Bienvenido al panel admin!
        </h1>
        <p style={{ color: "var(--text)" }} className="mt-3 text-sm font-medium">
          Organiza / elimina los productos desde acá.
        </p>
      </div>
    </main>
  );
}
