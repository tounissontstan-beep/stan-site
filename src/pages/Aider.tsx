import { CONTACT_EMAIL, COMPTEUR } from "../data/compteur";
import { compteurStats } from "../data/derive";
import { ServicePills } from "../components/ServicePills";
import { DonButton } from "../components/Don";
import { Eyebrow, H2, Inner, Lead, PageH1, PageHead, PrimaryLink, Section, Stat, Unit, UnderlineLink } from "../components/ui";

const mail = (subject: string) => `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;

const WAYS = [
  {
    n: "01",
    title: "Partenariat",
    text: "Votre marque sur le casque, les skis ou la combinaison, et un athlète qui raconte votre soutien à chaque dossard. Dossier partenaires détaillé sur demande.",
    cta: "Recevoir le dossier",
    href: mail("Dossier partenaires"),
  },
  {
    n: "02",
    title: "Matériel",
    text: "Skis, fartage, préparation physique, hébergement en stage : chaque poste peut être pris en charge directement, sans passer par l'argent.",
    cta: "Proposer un équipement",
    href: mail("Proposition de matériel"),
  },
  {
    n: "03",
    title: "Don libre",
    text: "À partir de 10 €. Un dossard FIS, une nuit avant une course, un aller-retour vers l'Italie : tout compte dans une saison.",
    cta: "Faire un don",
    href: "don",
  },
];

const GAINS = [
  {
    title: "Une histoire rare",
    text: "Un skieur franco-malien qui court pour le pays de sa mère, vers des Jeux à domicile. L'angle est rare, et il se raconte bien — dans vos équipes comme auprès de vos clients.",
  },
  {
    title: "Une présence visible",
    text: "Casque, skis, combinaison, chaque dossard FIS et chaque prise de parole. Photos et vidéos libres d'usage pour vos propres supports.",
  },
  {
    title: "Une transparence totale",
    text: "Budget ligne par ligne, justificatifs sur demande, fiche FIS publique. Vous savez exactement ce que votre soutien finance, et où j'en suis.",
  },
];

// Budget saison (estimation, à confirmer) — total 28 000 €.
const BUDGET = [
  { label: "Déplacements & hébergement", amount: "9 500 €", pct: 34, color: "#1C2E1E" },
  { label: "Skis, fartage & préparation", amount: "7 300 €", pct: 26, color: "#3D5A3A" },
  { label: "Stages & prépa physique", amount: "6 200 €", pct: 22, color: "#6C8768" },
  { label: "Licence, dossards & frais FIS", amount: "3 400 €", pct: 12, color: "#A3B79F" },
  { label: "Photo, vidéo & contenu", amount: "1 600 €", pct: 6, color: "#D3DCD0" },
];

export function Aider() {
  const s = compteurStats();
  return (
    <div className="relative block">
      <PageHead className="flex flex-wrap items-end justify-between gap-8">
        <div className="max-w-[820px]">
          <Eyebrow>Comment m'aider</Eyebrow>
          <PageH1>
            Vous avez peu de temps.
            <br />
            L'essentiel tient ici.
          </PageH1>
          <Lead>
            Pas de structure, pas d'intermédiaire : chaque euro et chaque paire de skis va directement aux courses. Ce
            dont j'ai besoin, comment participer, ce que vous y gagnez, où va l'argent.
          </Lead>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-[14px]">
          <PrimaryLink href={mail("Projet 2030 — échangeons")} size="md">
            Me contacter
          </PrimaryLink>
          <DonButton variant="outline" />
          <UnderlineLink href={mail("Dossier partenaires")} className="whitespace-nowrap text-[16px]">
            Recevoir le dossier partenaires
          </UnderlineLink>
        </div>
      </PageHead>

      <Section tone="mist" label="Ce dont j'ai besoin">
        <Inner desktop="md:pt-20 md:pb-24 md:gap-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12">
            <Stat label="Par saison" value={<>28&nbsp;000&nbsp;€</>}>
              Courses, matériel, stages. Aucun salaire, aucun frais de structure.
            </Stat>
            <Stat
              label="Jusqu'aux Jeux"
              value={
                <>
                  4 <Unit>saisons</Unit>
                </>
              }
            >
              Un partenaire qui s'engage sur la durée, c'est une saison qu'on prépare sereinement.
            </Stat>
            <Stat label="À partir de" value={<>10&nbsp;€</>}>
              Un dossard FIS, une nuit avant une course, un aller-retour vers l'Italie : tout compte.
            </Stat>
          </div>
          <div className="flex max-w-[820px] flex-col gap-4">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <p className="m-0 text-[15px] text-forest">
                Budget saison {COMPTEUR.saison} <span className="text-sage">&middot; où j'en suis</span>
              </p>
              <p className="m-0 text-[15px] text-sage">
                <span className="font-medium text-forest">{s.reuniLabel}</span> réunis sur {s.objectifLabel}
              </p>
            </div>
            <div className="h-[3px] w-full overflow-hidden rounded-full bg-line">
              <div className="h-full bg-forest" style={{ width: s.pct + "%" }} />
            </div>
            <p className="m-0 text-[13px] leading-[1.5] text-muted">
              Chiffres mis à jour à la main après chaque contribution.{" "}
              <a href="#/compteur" className="!text-forest underline underline-offset-[3px]">
                Voir le compteur complet
              </a>
            </p>
          </div>
        </Inner>
      </Section>

      <Section id="soutenir" label="Trois façons">
        <Inner desktop="md:pt-28 md:pb-32 md:gap-14">
          <div className="max-w-[680px]">
            <Eyebrow>Participer</Eyebrow>
            <H2 tracking="tighter" className="mb-6">
              Trois façons d'entrer
              <br />
              dans le projet.
            </H2>
            <p className="m-0 max-w-[600px] text-[19px] leading-[1.6] text-body text-pretty">
              Vous choisissez ce que vous financez. Rien n'est figé : on en parle, et on ajuste.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-9 border-t border-line-soft pt-11 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-14">
            {WAYS.map((w) => (
              <div key={w.n} className="flex flex-col items-start gap-[14px]">
                <span className="text-[13px] font-semibold tracking-[0.08em] text-faint">{w.n}</span>
                <p className="m-0 text-[26px] font-normal leading-[1.15] tracking-[-0.025em] text-black">{w.title}</p>
                <p className="m-0 text-[17px] leading-[1.65] text-body text-pretty">{w.text}</p>
                {w.href === "don" ? (
                  <DonButton variant="link" className="mt-[6px]">
                    {w.cta}
                  </DonButton>
                ) : (
                  <a
                    href={w.href}
                    className="mt-[6px] text-[15px] font-medium !text-forest underline underline-offset-[3px] transition-opacity duration-200"
                  >
                    {w.cta}
                  </a>
                )}
              </div>
            ))}
          </div>
        </Inner>
      </Section>

      <Section tone="mist" label="Ce que vous y gagnez">
        <Inner desktop="md:pt-28 md:pb-32 md:gap-14">
          <div className="max-w-[680px]">
            <Eyebrow>Pour votre entreprise</Eyebrow>
            <H2 tracking="tighter" className="mb-6">
              Ce que vous y gagnez,
              <br />
              sans détour.
            </H2>
          </div>
          <div className="grid grid-cols-1 gap-9 border-t border-line pt-11 lg:grid-cols-3 lg:gap-14">
            {GAINS.map((g) => (
              <div key={g.title} className="flex flex-col gap-[14px]">
                <p className="m-0 text-[26px] font-normal leading-[1.15] tracking-[-0.025em] text-black">{g.title}</p>
                <p className="m-0 text-[17px] leading-[1.65] text-body text-pretty">{g.text}</p>
              </div>
            ))}
          </div>
        </Inner>
      </Section>

      <Section id="budget" label="Budget">
        <Inner desktop="md:pt-28 md:pb-32 md:gap-16">
          <div className="max-w-[720px]">
            <Eyebrow>Où va votre argent</Eyebrow>
            <H2 tracking="tighter" className="mb-6">
              Une saison FIS,
              <br />
              ligne par ligne.
            </H2>
            <p className="m-0 max-w-[620px] text-[19px] leading-[1.6] text-body text-pretty">
              Voilà exactement comment se répartissent les 28&nbsp;000&nbsp;€ d'une saison de courses.
            </p>
          </div>
          <div className="flex flex-col gap-9">
            <div className="flex h-[10px] w-full gap-[2px] overflow-hidden rounded-full">
              {BUDGET.map((b) => (
                <div key={b.label} style={{ width: b.pct + "%", background: b.color }} />
              ))}
            </div>
            <div className="grid grid-cols-1 gap-y-0 lg:grid-cols-2 lg:gap-x-[72px]">
              {BUDGET.map((b) => (
                <div
                  key={b.label}
                  className="flex flex-row items-baseline justify-between gap-6 border-b border-line py-5"
                >
                  <div className="flex min-w-0 flex-row items-baseline gap-[14px]">
                    <span className="h-2 w-2 flex-none rounded-full" style={{ background: b.color }} />
                    <span className="text-[17px] text-forest">{b.label}</span>
                  </div>
                  <span className="whitespace-nowrap text-[17px] text-sage">
                    {b.amount} &middot; {b.pct}&nbsp;%
                  </span>
                </div>
              ))}
            </div>
            <p className="m-0 max-w-[620px] text-[13px] leading-[1.5] text-muted">
              Estimation saison 2026&nbsp;—&nbsp;2027, hors imprévus de matériel. Les justificatifs sont disponibles pour
              tout partenaire qui les demande.
            </p>
          </div>
        </Inner>
      </Section>

      <Section tone="mist" label="Contact">
        <Inner desktop="md:pt-28 md:pb-32 md:gap-10">
          <div className="max-w-[680px]">
            <Eyebrow>On en parle&nbsp;?</Eyebrow>
            <H2 tracking="tighter" className="mb-3">
              Comment souhaitez-vous participer&nbsp;?
            </H2>
            <p className="m-0 text-[16px] text-sage opacity-85">
              Sélectionnez tout ce qui s'applique. Je réponds moi-même, sans intermédiaire.
            </p>
          </div>
          <ServicePills />
          <p className="m-0 mt-2 text-[15px] text-sage">
            Journaliste&nbsp;?{" "}
            <a href="#/presse" className="!text-forest underline underline-offset-[3px]">
              Le kit média est ici
            </a>
            .
          </p>
        </Inner>
      </Section>
    </div>
  );
}
