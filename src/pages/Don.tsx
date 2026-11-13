import { CONTACT_EMAIL, COMPTEUR } from "../data/compteur";
import { compteurStats } from "../data/derive";
import { Eyebrow, H2, Inner, Lead, PageH1, PageHead, Section } from "../components/ui";

const mailto =
  `mailto:${CONTACT_EMAIL}?subject=` +
  encodeURIComponent("Je veux faire un don — projet 2030") +
  "&body=" +
  encodeURIComponent(
    "Bonjour Stan,\n\nJe souhaite faire un don de … € pour ton projet 2030.\n\nJ'accepte / Je n'accepte pas que mon nom apparaisse sur le compteur.\n",
  );

const ETAPES = [
  {
    n: "01",
    titre: "Écrivez-moi",
    texte: "Un e-mail suffit, avec le montant que vous avez en tête — à partir de 10 €.",
  },
  {
    n: "02",
    titre: "Je vous réponds moi-même",
    texte: "Je vous envoie les informations pour faire votre don, sans intermédiaire.",
  },
  {
    n: "03",
    titre: "Vous entrez dans le compteur",
    texte: "Si vous êtes d'accord, votre nom apparaît sur le compteur. Sinon : « Anonyme ».",
  },
];

export function Don() {
  const s = compteurStats();
  return (
    <div className="relative block">
      <PageHead>
        <Eyebrow>Faire un don</Eyebrow>
        <PageH1>
          Un don,
          <br />
          et vous êtes dans l'aventure.
        </PageH1>
        <Lead>
          Chaque euro part directement dans les courses. Un dossard FIS, une nuit avant une course, un aller-retour vers l'Italie : tout compte.
        </Lead>
      </PageHead>

      <Section tone="mist" label="Coordonnées bancaires">
        <Inner desktop="md:pt-20 md:pb-24 md:gap-14">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            <div className="box-border rounded-3xl border border-line-soft bg-white p-6 shadow-[0_4px_6px_-1px_rgba(2,44,34,0.03)] md:p-10">
              <p className="m-0 mb-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-moss">
                Le don en ligne arrive bientôt
              </p>
              <p className="m-0 text-[26px] font-normal leading-[1.2] tracking-[-0.02em] text-black">
                En attendant, un e-mail suffit.
              </p>
              <p className="m-0 mt-3 text-[16px] leading-[1.6] text-body text-pretty">
                Le paiement par carte sera bientôt disponible ici. Si vous voulez donner dès maintenant, écrivez-moi :
                je vous réponds moi-même avec la marche à suivre.
              </p>
              <a
                href={mailto}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-forest px-7 py-[15px] text-[16px] font-medium tracking-[-0.01em] !text-white shadow-[0_4px_6px_-1px_rgba(2,44,34,0.08)] transition-opacity duration-200 hover:!opacity-85"
              >
                Je veux faire un don <span className="text-[15px] leading-none">&rarr;</span>
              </a>
            </div>

            <div className="flex flex-col gap-8">
              {ETAPES.map((e) => (
                <div key={e.n} className="flex flex-col gap-2 border-t border-line pt-6">
                  <span className="text-[13px] font-semibold tracking-[0.08em] text-faint">{e.n}</span>
                  <p className="m-0 text-[24px] font-normal leading-[1.2] tracking-[-0.02em] text-black">{e.titre}</p>
                  <p className="m-0 text-[16px] leading-[1.6] text-body text-pretty">{e.texte}</p>
                </div>
              ))}
            </div>
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
              <a href="#/compteur" className="!text-forest underline underline-offset-[3px]">
                Voir le compteur complet
              </a>{" "}
              &middot;{" "}
              <a href="#/aider" className="!text-forest underline underline-offset-[3px]">
                Où va l'argent
              </a>
            </p>
          </div>
        </Inner>
      </Section>

      <Section label="Bon à savoir">
        <Inner desktop="md:pt-24 md:pb-28 md:gap-12">
          <H2 tracking="tighter">Bon à savoir.</H2>
          <div className="grid grid-cols-1 gap-9 border-t border-line pt-10 lg:grid-cols-3 lg:gap-14">
            <div className="flex flex-col gap-3">
              <p className="m-0 text-[22px] font-normal tracking-[-0.02em] text-black">Pas de réduction d'impôt</p>
              <p className="m-0 text-[16px] leading-[1.6] text-body text-pretty">
                Je suis un particulier, pas une association : votre don n'ouvre pas droit à un reçu fiscal.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="m-0 text-[22px] font-normal tracking-[-0.02em] text-black">Votre nom, si vous voulez</p>
              <p className="m-0 text-[16px] leading-[1.6] text-body text-pretty">
                Sans votre accord, votre don apparaît comme « Anonyme » sur le compteur. Vous pouvez changer d'avis
                à tout moment.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="m-0 text-[22px] font-normal tracking-[-0.02em] text-black">Vous êtes une entreprise&nbsp;?</p>
              <p className="m-0 text-[16px] leading-[1.6] text-body text-pretty">
                Pour un partenariat avec visibilité ou un don de matériel,{" "}
                <a href="#/aider" className="!text-forest underline underline-offset-[3px]">
                  voyez les autres façons d'aider
                </a>
                .
              </p>
            </div>
          </div>
        </Inner>
      </Section>
    </div>
  );
}
