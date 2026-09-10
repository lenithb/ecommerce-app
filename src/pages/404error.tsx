// página de error 404 (ruta * y /categories/ofertas).

export function NotFound() {
  return (
    <main className="flex-1 w-full min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center gap-6 px-6 py-12 font-sans text-center">
      <img
        src="/404.png"
        alt="Error 404"
        className="w-full max-w-sm md:max-w-md select-none"
        draggable={false}
      />
      <p className="text-sm uppercase tracking-widest font-bold" style={{ color: "var(--text)" }}>
        La página que estás buscando no se encuentra disponible
      </p>
    </main>
  );
}
