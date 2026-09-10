import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import confetti from "canvas-confetti";
import { useLocalStorage } from "../hooks/useLocalStorage";

type Phase = "video" | "modal" | "closed";

export function Novedades() {
  const [yaVista, setYaVista] = useLocalStorage("novedades-ruleta-vista", false);
  const [fase, setFase] = useState<Phase>(yaVista ? "closed" : "video");

  useEffect(() => {
    if (fase !== "modal") return;
    confetti({
      particleCount: 160,
      spread: 100,
      startVelocity: 45,
      origin: { y: 0.6 },
    });
  }, [fase]);

  const terminarRuleta = () => {
    setYaVista(true);
    setFase("modal");
  };

  return (
    <main className="flex-1 w-full flex flex-col justify-center py-12 font-sans text-left">
      {fase === "video" && (
        <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
          <video
            src="/roulette.mp4"
            autoPlay
            muted
            playsInline
            onEnded={terminarRuleta}
            onError={terminarRuleta}
            className="h-full w-full object-contain"
            aria-label="Ruleta de premios"
          />
        </div>
      )}

      {fase === "modal" && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            className="relative w-full max-w-md rounded-2xl border bg-[var(--code-bg)] p-8 flex flex-col items-center text-center shadow-2xl"
            style={{ borderColor: "var(--border)" }}
            role="dialog"
            aria-modal="true"
            aria-label="Gift card recibida"
          >
            <button
              onClick={() => setFase("closed")}
              className="absolute top-3 right-4 text-2xl leading-none hover:text-[var(--text-h)] transition-colors"
              style={{ color: "var(--text)" }}
              aria-label="Cerrar"
            >
              ×
            </button>

            <h2 className="text-2xl font-black" style={{ color: "var(--text-h)" }}>
              ¡Felicidades!
            </h2>
            <p className="mt-2 text-sm" style={{ color: "var(--text)" }}>
              Acabas de recibir esta gift card, solo debes iniciar sesión.
            </p>

            <img
              src="/images/steam.png"
              alt="Gift card de Steam"
              className="my-6 w-full max-w-xs rounded-xl select-none"
              draggable={false}
            />

            <Link
              to="/login"
              className="w-full rounded-lg py-3 text-sm font-bold uppercase tracking-wider transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--text-h)", color: "var(--bg)" }}
            >
              Iniciar sesión
            </Link>
          </div>
        </div>
      )}

      <section
        className="relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]"
        aria-label="Banner animado de Gift Cards"
      >
        <Link
          to="/gift-cards"
          className="flex w-max animate-[marquee_38s_linear_infinite] will-change-transform hover:[animation-play-state:paused]"
        >
          <img
            src="/slider/gift_cards_marquee.webp"
            alt="Gift Cards KeySpot — ¡Miralas!"
            className="h-56 sm:h-72 lg:h-96 w-auto max-w-none shrink-0 select-none"
            draggable={false}
          />
          <img
            src="/slider/gift_cards_marquee.webp"
            alt=""
            aria-hidden
            className="h-56 sm:h-72 lg:h-96 w-auto max-w-none shrink-0 select-none"
            draggable={false}
          />
          <img
            src="/slider/gift_cards_marquee.webp"
            alt=""
            aria-hidden
            className="h-56 sm:h-72 lg:h-96 w-auto max-w-none shrink-0 select-none"
            draggable={false}
          />
          <img
            src="/slider/gift_cards_marquee.webp"
            alt=""
            aria-hidden
            className="h-56 sm:h-72 lg:h-96 w-auto max-w-none shrink-0 select-none"
            draggable={false}
          />
        </Link>
      </section>
    </main>
  );
}
