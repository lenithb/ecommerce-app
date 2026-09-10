import { Link } from "react-router-dom";

export function Novedades() {
  return (
    <main className="flex-1 w-full flex flex-col justify-center py-12 font-sans text-left">
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
