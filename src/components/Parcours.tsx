import { useState } from "react";
import { cx } from "./ui";

/** Une photo portrait (3:4) par saison. Pour changer une photo : remplacer le fichier dans public/photos/. */
const SLIDES = [
  {
    year: "Avant 24",
    tag: "Avant 2024",
    photo: "photos/par-avant.webp",
    title: "L'alpin me rattrape",
    text: "Retour aux piquets à l'adolescence, sans dossard. Le geste revient vite, l'envie de courir aussi.",
  },
  {
    year: "24-25",
    tag: "2024 — 2025",
    photo: "photos/par-2425.webp",
    title: "L'idée du Mali",
    text: "En cherchant la famille biologique de ma mère, le projet sportif devient un projet de cœur. Licence au Club Sports de Risoul, code FIS 6192025 : le compte est ouvert.",
  },
  {
    year: "25-26",
    tag: "2025 — 2026",
    photo: "photos/par-2526.webp",
    title: "Premiers dossards, premiers points",
    text: "Les 7 Laux, sortie en seconde manche. Puis Claviere : 38ᵉ, 152,61 pts. Chamrousse : 65ᵉ, 144,47 pts.",
  },
  {
    year: "26-27",
    tag: "2026 — 2027",
    photo: "photos/par-2627.webp",
    title: "Aller chercher les 120 points",
    text: "Prépa physique et stages avec Orsatus, ma structure d'entraînement. L'objectif de la saison est clair : passer sous les 120 points, le standard olympique.",
  },
];

export function Parcours() {
  const [slide, setSlide] = useState(0);
  return (
    <div>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-[650ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{ transform: `translateX(${-slide * 100}%)` }}
        >
          {SLIDES.map((s, k) => (
            <div
              key={s.tag}
              aria-hidden={k !== slide}
              className="grid min-w-0 flex-[0_0_100%] grid-cols-1 items-start gap-6 py-2 md:grid-cols-[320px_1fr] md:items-center md:gap-10 nav:grid-cols-[400px_1fr] nav:gap-16"
            >
              <div className="aspect-[3/4] w-full max-w-[300px] md:w-[320px] md:max-w-none nav:w-[400px]">
                <img src={s.photo} alt={s.title} className="block h-full w-full rounded-[20px] object-cover" />
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-moss">{s.tag}</span>
                <p className="m-0 text-[30px] font-normal leading-[1.15] tracking-[-0.025em] text-black">{s.title}</p>
                <p className="m-0 text-[17px] leading-[1.65] text-body text-pretty">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex items-center justify-center border-t border-line pt-5">
        <div className="flex flex-wrap justify-center gap-[2px] md:gap-[6px]">
          {SLIDES.map((s, k) => (
            <button
              key={s.year}
              onClick={() => setSlide(k)}
              aria-current={k === slide}
              className={cx(
                "cursor-pointer rounded-full border-none px-[10px] py-[7px] text-[13px] font-medium tracking-[-0.01em] transition-[color,background] duration-200 md:px-[14px] md:py-2 md:text-[14px]",
                k === slide ? "bg-forest text-white" : "bg-transparent text-body hover:bg-chip",
              )}
            >
              {s.year}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
