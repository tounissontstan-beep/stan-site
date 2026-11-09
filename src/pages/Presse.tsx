import { Eyebrow, Kicker, Lead, PageH1, Photo } from "../components/ui";

/** Photos presse : déposer les fichiers dans public/photos/ puis renseigner `src`. */
const SHOTS = [
  { src: undefined, placeholder: "Portrait — haute définition", caption: "Portrait · JPEG 300 dpi" },
  { src: undefined, placeholder: "En course — piquets", caption: "En course · JPEG 300 dpi" },
  { src: undefined, placeholder: "Drapeau malien / veste", caption: "Détail · JPEG 300 dpi" },
] as { src?: string; placeholder: string; caption: string }[];

// ⚠️ Placeholders : remplacer par les vrais articles.
const RETOMBEES = [
  { titre: "Média · titre de l'article", date: "mars 2026" },
  { titre: "Média · titre du reportage", date: "févr. 2026" },
  { titre: "Média · titre de l'entretien", date: "janv. 2026" },
];

// ⚠️ Liens de téléchargement à renseigner (fichiers à placer dans public/kit/).
const KIT = [
  { label: "Biographie — 200 et 600 mots", format: "DOCX", href: "#" },
  { label: "Photos haute définition", format: "ZIP", href: "#" },
  { label: "Logos & drapeau malien", format: "SVG", href: "#" },
  { label: "Dossier partenaires", format: "PDF", href: "#" },
];

export function Presse() {
  return (
    <div className="relative block">
      <section className="relative z-[1] w-full bg-white">
        <div className="mx-auto box-border flex w-full max-w-[1280px] flex-col gap-12 px-6 pt-[108px] pb-20 md:gap-[72px] md:pt-[168px] md:pb-32">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-[680px]">
              <Eyebrow>Presse &amp; médias</Eyebrow>
              <PageH1>
                De quoi raconter
                <br />
                l'histoire sans moi.
              </PageH1>
              <Lead className="max-w-[600px] !text-[19px]">
                Un skieur franco-malien qui court pour le pays de sa mère : l'angle est rare, et il se raconte bien.
                Photos, logos et biographie sont libres d'usage pour la presse et pour mes partenaires.
              </Lead>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-line px-6 py-[13px] text-[15px] font-medium !text-forest transition-[background] duration-200 hover:bg-mist"
            >
              Télécharger le kit média <span className="text-[14px] leading-none">&darr;</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-[14px] md:grid-cols-3 md:gap-5">
            {SHOTS.map((s) => (
              <figure key={s.caption} className="m-0 flex flex-col gap-[10px]">
                <div className="aspect-[4/5] w-full overflow-hidden rounded-[20px] bg-ash">
                  <Photo src={s.src} alt={s.placeholder} placeholder={s.placeholder} />
                </div>
                <figcaption className="m-0 text-[13px] text-muted">{s.caption}</figcaption>
              </figure>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-11 border-t border-line-soft pt-11 lg:grid-cols-2 lg:gap-[72px]">
            <div className="flex flex-col gap-1">
              <Kicker className="!mb-4">Retombées</Kicker>
              {RETOMBEES.map((r) => (
                <div
                  key={r.titre}
                  className="flex flex-row items-baseline justify-between gap-5 border-b border-line-soft py-4"
                >
                  <span className="text-[17px] text-forest">{r.titre}</span>
                  <span className="whitespace-nowrap text-[14px] text-muted">{r.date}</span>
                </div>
              ))}
              <p className="m-0 mt-5 text-[13px] leading-[1.5] text-muted">
                Journalistes&nbsp;: je réponds en direct, sans intermédiaire.
              </p>
            </div>
            <div className="flex flex-col">
              <Kicker className="!mb-4">Dans le kit</Kicker>
              {KIT.map((k) => (
                <a
                  key={k.label}
                  href={k.href}
                  className="flex flex-row items-baseline justify-between gap-5 border-b border-line-soft py-4 text-[17px] !text-forest transition-opacity duration-200"
                >
                  {k.label} <span className="whitespace-nowrap text-[14px] text-muted">{k.format}</span>
                </a>
              ))}
              <p className="m-0 mt-5 text-[13px] leading-[1.5] text-muted">
                Crédit photo à mentionner&nbsp;: indiqué dans chaque fichier.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
