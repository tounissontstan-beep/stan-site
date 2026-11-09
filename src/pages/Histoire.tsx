import { FisChart } from "../components/FisChart";
import { Parcours } from "../components/Parcours";
import { CtaBand, Eyebrow, H2, Inner, Kicker, Label, Lead, PageH1, PageHead, Section } from "../components/ui";

const HALO_LEFT = [
  {
    k: "Guillestre",
    t: "J'ai commencé le ski en primaire au club de Guillestre, puis je suis parti vers le fond. L'alpin m'a rattrapé à l'adolescence — et là, tout est allé très vite.",
  },
  {
    k: "Le déclic",
    t: "Trop tard pour l'élite française, trop tôt pour renoncer. J'avais envie d'exceller quelque part : l'idée du Mali est née de ce refus d'arrêter.",
  },
];
const HALO_RIGHT = [
  {
    k: "Bamako",
    t: "Ma mère est née au Mali, adoptée bébé par un couple des Hautes-Alpes. En cherchant sa famille biologique, j'ai retrouvé un pays — et une raison de courir.",
  },
  {
    k: "2030",
    t: "Quatre saisons pour aller chercher les points FIS, financer le matériel et construire l'équipe. Objectif : un dossard malien dans les Alpes.",
  },
];

function HaloCol({ items, className }: { items: { k: string; t: string }[]; className?: string }) {
  return (
    <div className={`flex flex-col gap-10 ${className ?? ""}`}>
      {items.map((i) => (
        <div key={i.k}>
          <Kicker>{i.k}</Kicker>
          <p className="m-0 text-[17px] leading-[1.6] text-body">{i.t}</p>
        </div>
      ))}
    </div>
  );
}

export function Histoire() {
  return (
    <div className="relative block">
      <PageHead>
        <Eyebrow>Derrière l'objectif</Eyebrow>
        <PageH1 className="max-w-[900px]">
          Un objectif, ça ne tombe pas du ciel.
          <br />
          Voilà d'où vient le mien.
        </PageH1>
        <Lead>
          Ici, pas de communiqué : je raconte moi-même mon parcours, mes courses et ce que je construis, saison après
          saison.
        </Lead>
      </PageHead>

      <Section label="Pourquoi le Mali">
        <Inner desktop="md:pt-24 md:pb-28 md:gap-10">
          <div className="min-w-0">
            <Eyebrow>Pourquoi le Mali</Eyebrow>
            <H2 className="mb-7">
              Courir pour le pays
              <br />
              de ma mère.
            </H2>
            <div className="grid max-w-[820px] grid-cols-1 gap-[18px] md:grid-cols-2 md:gap-8">
              <p className="m-0 text-[19px] leading-[1.6] text-body">
                Ma mère, Carole, est née au Mali et a été adoptée toute petite par un couple des Hautes-Alpes. En
                cherchant à retrouver sa famille biologique, j'ai retrouvé une partie de moi — et ce lien est devenu un
                projet de cœur autant qu'un projet sportif.
              </p>
              <p className="m-0 text-[19px] leading-[1.6] text-body">
                Trop tard pour viser l'élite française, mais pas pour porter le drapeau malien : à Milan-Cortina, une
                quinzaine d'athlètes seulement représentaient l'Afrique. En 2030, dans les Alpes, je veux que le Mali
                soit au portillon de départ.
              </p>
            </div>
          </div>
        </Inner>
      </Section>

      <Section tone="mist" label="Mon histoire">
        <div className="mx-auto box-border w-full max-w-[1440px] px-6 py-[72px] md:px-10 md:py-[120px]">
          <div className="mx-auto mb-16 max-w-[640px] text-center">
            <Eyebrow>Mon histoire</Eyebrow>
            <H2 tracking="tighter">
              Tout part d'un cercle&nbsp;:
              <br />
              la famille, la neige, la ligne.
            </H2>
          </div>
          <div className="grid grid-cols-1 items-center justify-items-center gap-9 lg:grid-cols-[1fr_auto_1fr] lg:justify-items-stretch lg:gap-[72px]">
            <HaloCol items={HALO_LEFT} className="order-2 text-left lg:order-none lg:text-right" />
            <div className="relative order-1 h-[280px] w-[280px] flex-none overflow-hidden bg-transparent md:h-[340px] md:w-[340px] lg:order-none lg:h-[440px] lg:w-[440px]">
              <video
                src="media/halo.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="block h-full w-full object-contain"
              />
            </div>
            <HaloCol items={HALO_RIGHT} className="order-3 lg:order-none" />
          </div>
        </div>
      </Section>

      <Section id="parcours" label="Parcours">
        <Inner desktop="md:pt-28 md:pb-32 md:gap-[72px]">
          <div className="max-w-[760px]">
            <Eyebrow>Le parcours</Eyebrow>
            <H2 tracking="tighter" className="mb-6">
              Du retour aux piquets
              <br />
              au portillon FIS.
            </H2>
            <p className="m-0 max-w-[640px] text-[19px] leading-[1.6] text-body">
              Trois saisons entre l'idée du Mali et le portillon olympique. Voilà la ligne, sans raccourci.
            </p>
          </div>

          <Parcours />

          <div className="rounded-3xl border border-line-soft bg-mist p-6 shadow-[0_4px_6px_-1px_rgba(2,44,34,0.03)] md:px-10 md:pt-9 md:pb-10">
            <div className="mb-9 flex flex-wrap items-start justify-between gap-5">
              <div>
                <div className="mb-3 flex items-center gap-[9px]">
                  <span className="h-[7px] w-[7px] flex-none rounded-full bg-moss" />
                  <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-moss">
                    Compte FIS relié
                  </span>
                </div>
                <h3 className="m-0 mb-[10px] text-[32px] font-normal leading-[1.15] tracking-[-0.025em] text-black md:text-[34px]">
                  Ma progression, en points.
                </h3>
                <p className="m-0 text-[15px] text-sage">
                  Stan Tounissont &middot; Code FIS 6192025 &middot; Club Sports de Risoul &middot; FRA
                </p>
              </div>
              <a
                href="https://www.fis-ski.com/DB/general/athlete-biography.html?sectorcode=al&competitorid=296162"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-line bg-white px-5 py-[11px] text-[15px] font-medium !text-forest transition-[background] duration-200 hover:bg-hover"
              >
                Fiche FIS officielle <span className="text-[14px] leading-none">&#8599;</span>
              </a>
            </div>
            <div className="grid grid-cols-1 items-start gap-9 nav:grid-cols-[200px_1fr] nav:gap-12">
              <div className="flex flex-col gap-[26px]">
                <div>
                  <Label className="mb-[6px]">Slalom</Label>
                  <p className="m-0 text-[40px] font-normal leading-none tracking-[-0.03em] text-black">159,98</p>
                  <p className="m-0 mt-[6px] text-[14px] text-sage">
                    2675<sup>e</sup> mondial
                  </p>
                </div>
                <div>
                  <Label className="mb-[6px]">Géant</Label>
                  <p className="m-0 text-[40px] font-normal leading-none tracking-[-0.03em] text-black">259,97</p>
                  <p className="m-0 mt-[6px] text-[14px] text-sage">
                    3224<sup>e</sup> mondial
                  </p>
                </div>
                <p className="m-0 border-t border-line-soft pt-4 text-[13px] leading-[1.5] text-muted">
                  9<sup>e</sup> liste de points FIS 2026/27. Valeurs figées&nbsp;— mise à jour manuelle.
                </p>
              </div>
              <div>
                <FisChart />
                <p className="m-0 mt-7 max-w-[560px] text-[14px] leading-[1.6] text-sage text-pretty">
                  Cinq départs, deux courses terminées, deux scores inscrits — et déjà huit points grattés entre
                  Claviere et Chamrousse. Il en reste une vingtaine à gratter pour passer sous les 120, le standard
                  olympique.
                </p>
              </div>
            </div>
          </div>
        </Inner>
      </Section>

      <CtaBand eyebrow="La suite">
        Vous savez d'où ça vient.
        <br />
        Voilà comment m'aider à y arriver.
      </CtaBand>
    </div>
  );
}
