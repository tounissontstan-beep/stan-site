import { Video } from "../components/Video";
import { motion } from "motion/react";
import { compteurStats } from "../data/derive";
import { Arrow, Eyebrow, H2, PrimaryLink, Stat, Unit, UnderlineLink } from "../components/ui";

const dropIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

export function Home({ typed }: { typed: { displayed: string; done: boolean } }) {
  const { pctLabel } = compteurStats();
  return (
    <div className="relative flex flex-col lg:block">
      {/* Photo du hero : plein écran derrière le texte en desktop, sous le texte en mobile */}
      <div className="pointer-events-none relative z-0 aspect-square w-full overflow-hidden bg-[#FAFAFA] md:aspect-video lg:absolute lg:inset-x-0 lg:top-0 lg:aspect-auto lg:h-screen lg:bg-transparent">
        <img
          src="media/hero-portillon.png"
          alt="Skieur au portillon de départ au-dessus d'une vallée alpine"
          className="h-full w-full object-cover object-[right_center] lg:object-[right_bottom]"
        />
      </div>

      <div className="relative z-[1] -order-1 flex w-full flex-col bg-white pb-8 lg:order-none lg:min-h-screen lg:bg-transparent lg:pb-0">
        <div className="mx-auto box-border flex w-full max-w-[1280px] flex-1 flex-col justify-center px-6 pt-[120px] pb-16 lg:pt-[136px]">
          <motion.div {...dropIn(0)}>
            <h1 className="m-0 mb-8 w-full select-none whitespace-pre-wrap text-[46px] font-normal leading-[1.08] tracking-[-0.025em] text-black md:text-[60px] lg:text-[76px]">
              {typed.displayed}
              {!typed.done && (
                <span className="ml-[2px] inline-block h-[1.1em] w-[2px] bg-black align-middle animate-blink" />
              )}
            </h1>
          </motion.div>
          <motion.div {...dropIn(0.1)}>
            <p className="m-0 mb-10 max-w-[640px] text-[18px] font-normal leading-[1.625] text-body text-pretty md:text-[20px]">
              Skieur alpin franco-malien, formé dans les Hautes-Alpes. En 2030, dans les Alpes, je veux que le Mali soit
              au portillon de départ. Quatre saisons pour y arriver — et je ne peux pas les courir seul.
            </p>
          </motion.div>
          <motion.div {...dropIn(0.2)} className="flex flex-wrap items-center gap-x-7 gap-y-4">
            <PrimaryLink href="#/aider">Comment m'aider</PrimaryLink>
            <UnderlineLink href="#/histoire" className="text-[17px]">
              Ce qui se cache derrière cet objectif
            </UnderlineLink>
          </motion.div>
        </div>
      </div>

      {/* L'aventure + vidéo Bamako */}
      <section className="relative z-[1] w-full bg-white">
        <div className="mx-auto box-border flex w-full max-w-[1280px] flex-col gap-12 px-6 pt-24 pb-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="min-w-0 max-w-[760px] flex-[1_1_640px]">
              <Eyebrow>L'aventure</Eyebrow>
              <H2 className="mb-7">
                Un dossard malien
                <br />
                dans les Alpes.
              </H2>
              <p className="m-0 max-w-[680px] text-[19px] leading-[1.6] text-body text-pretty">
                Ma mère est née au Mali. En cherchant sa famille, j'ai retrouvé un pays — et une raison de courir. À
                Milan-Cortina, une quinzaine d'athlètes seulement représentaient l'Afrique. Il me reste quatre saisons
                pour aller chercher les points FIS, financer le matériel et construire l'équipe.
              </p>
            </div>
            <UnderlineLink href="#/histoire" className="self-end whitespace-nowrap text-[16px]">
              Lire toute l'histoire &rarr;
            </UnderlineLink>
          </div>
          <figure className="m-0 flex flex-col gap-[14px]">
            <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-ash">
              <Video src="media/bamako.mp4" className="block h-full w-full object-cover" label="Animation : arrivée à ski sur Bamako, drapeau malien cousu sur la veste" />
            </div>
            <figcaption className="m-0 text-[14px] text-sage">
              Animation — arrivée sur Bamako, drapeau malien cousu sur la veste.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Chiffres + deux portes */}
      <section className="relative z-[1] w-full border-t border-line-soft bg-mist">
        <div className="mx-auto box-border flex w-full max-w-[1280px] flex-col gap-16 px-6 pt-24 pb-28">
          <div className="grid grid-cols-1 gap-9 lg:grid-cols-3 lg:gap-12">
            <Stat label="L'objectif" value="2030">
              Les Jeux dans les Alpes françaises, sous les couleurs du Mali.
            </Stat>
            <Stat
              label="Où j'en suis"
              value={
                <>
                  144,47 <Unit>pts FIS</Unit>
                </>
              }
            >
              Le standard olympique est à 120. Il reste une vingtaine de points à gratter.
            </Stat>
            <Stat label="Ce qu'il manque" value={<>28&nbsp;000&nbsp;€</>}>
              Une saison de courses, sans salaire ni frais de structure.{" "}
              <a href="#/compteur" className="!text-forest underline underline-offset-[3px]">
                {pctLabel} réunis à ce jour
              </a>
              .
            </Stat>
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <a
              href="#/aider"
              className="box-border flex min-h-[260px] flex-col justify-between gap-10 rounded-3xl bg-forest p-10 !text-white transition-opacity duration-200 hover:!opacity-90"
            >
              <div className="flex flex-col gap-[14px]">
                <p className="m-0 text-[12px] font-semibold uppercase tracking-[0.14em] text-pale">
                  Vous êtes une entreprise, une marque, un particulier
                </p>
                <p className="m-0 text-[32px] font-normal leading-[1.15] tracking-[-0.025em] text-white">
                  Comment m'aider, concrètement.
                </p>
                <p className="m-0 text-[17px] leading-[1.6] text-lichen text-pretty">
                  Trois façons d'entrer dans le projet, ce que vous y gagnez, et où va chaque euro. Cinq minutes
                  suffisent.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-[16px] font-medium text-white">
                Voir la page <Arrow />
              </span>
            </a>
            <a
              href="#/histoire"
              className="box-border flex min-h-[260px] flex-col justify-between gap-10 rounded-3xl border border-line bg-white p-10 !text-black transition-[background] duration-200 hover:bg-hover"
            >
              <div className="flex flex-col gap-[14px]">
                <p className="m-0 text-[12px] font-semibold uppercase tracking-[0.14em] text-moss">
                  Pour comprendre d'où ça vient
                </p>
                <p className="m-0 text-[32px] font-normal leading-[1.15] tracking-[-0.025em] text-black">
                  Ce qui se cache derrière cet objectif.
                </p>
                <p className="m-0 text-[17px] leading-[1.6] text-body text-pretty">
                  Guillestre, Bamako, le déclic, les premiers points FIS. Toute l'histoire, racontée par moi, sans
                  communiqué.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-[16px] font-medium text-forest">
                Lire l'histoire <Arrow />
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
