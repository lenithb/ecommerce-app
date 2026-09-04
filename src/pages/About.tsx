// página del equipo

export interface TeamMember {
  name: string;
  photo: string;
  role?: string;
}

// cuando agreguen las fotos a src/assets/team/ importarlas acá abajo 🡣
// ej: import lenith.png, carlos.png from "../assets/team/lenith.png";

// ---------------------------------
// acá va el: const team: TeamMember[] = [ ... ]
// después el export function About con el return y todo eso

export function About() {
  return <main>About</main>;
}
