import { useEffect, useRef, useState } from "react";
import { COMPTEUR } from "../data/compteur";
import { compteurStats, eur } from "../data/derive";
import { CtaBand, Eyebrow, H2, Inner, Label, Lead, PageH1, PageHead, PrimaryLink, Section, Stat, Unit } from "../components/ui";

export function Compteur() {
  const s = compteurStats();
  const [barReady, setBarReady] = useState(false);
  const [copied, setCopied] = useState(false);
  const ct = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const t = setTimeout(() => setBarReady(true), 250);
    return () => {
      clearTimeout(t);
      clearTimeout(ct.current);
    };
  }, []);

  const copyLink = () => {
    const url = window.location.href.split("#")[0] + "#/compteur";
    const done = () => {
      setCopied(true);
      clearTimeout(ct.current);
      ct.current = setTimeout(() => setCopied(false), 2200);
    };
    if (navigator.clipboard) navigator.clipboard.writeText(url).then(done, () => window.prompt("Copiez le lien :", url));
    else window.prompt("Copiez le lien :", url);
  };

  return (
    <div className="relative block">
      <PageHead className="flex flex-wrap items-end justify-between gap-8">
        <div className="max-w-[820px]">
          <div className="mb-4 flex items-center gap-[9px]">
            <span className="h-[7px] w-[7px] flex-none rounded-full bg-moss" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-moss">
              Le compteur &middot; mis à jour le {COMPTEUR.miseAJour}
            </span>
          </div>
          <PageH1>
            Où en est le projet,
            <br />
            chiffres à l'appui.
          </PageH1>
          <Lead>
            Je mets ce compteur à jour moi-même après chaque contribution. Partagez-le : chaque personne qui le voit
            peut faire bouger la barre.
          </Lead>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={copyLink}
            className="inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-full border border-line bg-white px-6 py-[14px] text-[16px] font-medium text-forest transition-[background] duration-200 hover:bg-hover"
          >
            {copied ? "Lien copié ✓" : "Copier le lien"}
          </button>
          <PrimaryLink href="#/aider" size="md">
            Comment m'aider
          </PrimaryLink>
        </div>
      </PageHead>

      <Section tone="mist" label="Compteur">
        <Inner desktop="md:pt-[88px] md:pb-[104px] md:gap-[72px]">
          <div className="flex flex-col gap-5">
            <Label>Budget saison {COMPTEUR.saison}</Label>
            <p className="m-0 flex flex-wrap items-baseline gap-x-5 gap-y-2">
              <span className="text-[64px] font-normal leading-none tracking-[-0.04em] text-black lg:text-[96px]">
                {s.reuniLabel}
              </span>
              <span className="text-[24px] tracking-[-0.01em] text-sage">sur {s.objectifLabel}</span>
            </p>
            <div className="mt-3 h-[6px] w-full overflow-hidden rounded-full bg-line">
              <div
                className="h-full rounded-full bg-forest transition-[width] duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{ width: (barReady ? s.pct : 0) + "%" }}
              />
            </div>
            <div className="flex flex-wrap justify-between gap-x-6 gap-y-2">
              <p className="m-0 text-[15px] font-medium text-forest">{s.pctLabel} réunis</p>
              <p className="m-0 text-[15px] text-sage">Il reste {s.resteLabel} à trouver</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-9 lg:grid-cols-3 lg:gap-12">
            <Stat label="Soutiens" value={COMPTEUR.soutiens}>
              Personnes et entreprises déjà embarquées dans l'aventure.
            </Stat>
            <Stat
              label="Points FIS"
              value={
                <>
                  {s.fisLabel} <Unit>/ {COMPTEUR.cibleFIS}</Unit>
                </>
              }
            >
              Standard olympique à {COMPTEUR.cibleFIS}. Encore {s.fisResteLabel} points à gratter.
            </Stat>
            <Stat
              label="Avant les Jeux"
              value={
                <>
                  {s.joursLabel} <Unit>jours</Unit>
                </>
              }
            >
              Cérémonie d'ouverture le 1<sup>er</sup> février 2030, dans les Alpes françaises.
            </Stat>
          </div>
        </Inner>
      </Section>

      <Section label="Dernières contributions">
        <Inner desktop="md:pt-[104px] md:pb-[120px] md:gap-10">
          <div className="max-w-[680px]">
            <Eyebrow>Dernières contributions</Eyebrow>
            <H2 tracking="tighter">Merci à eux.</H2>
          </div>
          <div className="flex flex-col border-t border-line">
            {COMPTEUR.contributions.slice(0, 8).map((c, k) => (
              <div
                key={k}
                className="grid grid-cols-[1fr_auto] items-baseline gap-6 border-b border-line py-5 lg:grid-cols-[140px_1fr_160px_auto]"
              >
                <span className="hidden text-[15px] text-muted lg:inline">{c.date}</span>
                <span className="text-[17px] text-forest">{c.nom}</span>
                <span className="hidden text-[15px] text-sage lg:inline">{c.type}</span>
                <span className="whitespace-nowrap text-right text-[17px] text-forest">{eur(c.montant || 0)}</span>
              </div>
            ))}
          </div>
          <p className="m-0 text-[13px] leading-[1.5] text-muted">
            Les contributeurs qui le souhaitent restent anonymes. Le matériel est compté à sa valeur.
          </p>
        </Inner>
      </Section>

      <CtaBand eyebrow="La prochaine ligne">
        Chaque ligne du compteur est quelqu'un.
        <br />
        La prochaine, c'est vous&nbsp;?
      </CtaBand>
    </div>
  );
}
