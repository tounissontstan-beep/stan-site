import type { ReactNode } from "react";
import { CONTACT_EMAIL } from "../data/compteur";
import { Eyebrow, Lead, PageH1, PageHead, Section } from "../components/ui";

/*
 * Mentions légales (art. 6-III de la loi n° 2004-575 du 21 juin 2004, LCEN)
 * et information sur les données personnelles (art. 13 du RGPD).
 * ⚠️ Champs marqués « à compléter » : voir README, rubrique « Conformité ».
 */
const EDITEUR = {
  nom: "Stan Tounissont",
  statut: "Particulier, site personnel non commercial",
  // Un particulier peut ne pas publier son adresse (art. 6-III-2 LCEN) : ses
  // coordonnées sont alors transmises à l'hébergeur. Laisser vide dans ce cas.
  adresse: "",
};
const MAJ = "13 novembre 2026";

function Bloc({ titre, children }: { titre: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-3 border-t border-line pt-8">
      <h2 className="m-0 text-[24px] font-normal tracking-[-0.02em] text-black">{titre}</h2>
      <div className="flex flex-col gap-3 text-[16px] leading-[1.65] text-body [&_a]:!text-forest [&_a]:underline [&_a]:underline-offset-[3px] [&_li]:ml-5 [&_p]:m-0 [&_ul]:m-0 [&_ul]:list-disc [&_ul]:p-0">
        {children}
      </div>
    </div>
  );
}

export function MentionsLegales() {
  return (
    <div className="relative block">
      <PageHead>
        <Eyebrow>Informations légales</Eyebrow>
        <PageH1>Mentions légales &amp; confidentialité</PageH1>
        <Lead>Qui publie ce site, qui l'héberge, et ce qu'il fait (ou ne fait pas) de vos données.</Lead>
      </PageHead>

      <Section>
        <div className="mx-auto box-border flex w-full max-w-[820px] flex-col gap-10 px-6 pt-12 pb-24 md:pt-16 md:pb-32">
          <Bloc titre="Éditeur du site">
            <p>
              {EDITEUR.nom} — {EDITEUR.statut}.
              {EDITEUR.adresse && <> Adresse : {EDITEUR.adresse}.</>}
            </p>
            <p>
              Contact : <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
            <p>Directeur de la publication : {EDITEUR.nom}.</p>
          </Bloc>

          <Bloc titre="Hébergement">
            <p>
              Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis —{" "}
              <a href="https://vercel.com" target="_blank" rel="noopener">
                vercel.com
              </a>
              .
            </p>
          </Bloc>

          <Bloc titre="Indépendance">
            <p>
              Ce site est le site personnel d'un athlète. Il n'est ni édité, ni approuvé, ni sponsorisé par le Comité
              international olympique, le Comité national olympique et sportif français, le comité d'organisation des
              Jeux de 2030, la Fédération internationale de ski (FIS) ou le Comité national olympique et sportif du
              Mali. Les termes « Jeux Olympiques » et « JO » sont employés uniquement pour décrire l'objectif sportif
              de l'athlète. Les données FIS affichées proviennent de la fiche publique de la FIS et sont mises à jour à
              la main.
            </p>
          </Bloc>

          <Bloc titre="Propriété intellectuelle">
            <p>
              Les textes, photos et vidéos de ce site appartiennent à {EDITEUR.nom}, sauf mention contraire. Les
              éléments du kit média peuvent être utilisés par la presse et les partenaires pour parler du projet, avec
              mention du crédit indiqué. Toute autre réutilisation nécessite un accord écrit.
            </p>
          </Bloc>

          <Bloc titre="Données personnelles">
            <p>Ce site ne comporte ni formulaire, ni compte, ni paiement en ligne : les dons se font par virement bancaire, en dehors du site. Les seules données traitées sont :</p>
            <ul>
              <li>
                <strong>Les journaux techniques de l'hébergeur</strong> (adresse IP, page consultée, date) : conservés
                par Vercel pour assurer la sécurité et le fonctionnement du site (intérêt légitime). Vercel étant
                établi aux États-Unis, ces données peuvent y être transférées, dans le cadre des garanties prévues
                par le RGPD (Data Privacy Framework UE–États-Unis ou clauses contractuelles types).
              </li>
              <li>
                <strong>Les e-mails que vous m'envoyez</strong> : utilisés uniquement pour vous répondre et suivre
                votre soutien, conservés le temps de notre échange puis au maximum 3 ans après le dernier contact. Ils
                ne sont jamais vendus ni cédés.
              </li>
              <li>
                <strong>Les dons par virement</strong> : je reçois de ma banque le nom du donateur, le montant et
                le motif. Ces informations servent uniquement à tenir le compteur et ma comptabilité, et sont
                conservées le temps exigé par la loi.
              </li>
              <li>
                <strong>Le compteur des contributions</strong> : le nom d'un contributeur n'y apparaît qu'avec son
                accord. Sans accord, il figure comme « Anonyme ». Vous pouvez demander le retrait de votre nom à tout
                moment.
              </li>
            </ul>
            <p>
              Vous disposez d'un droit d'accès, de rectification, d'effacement, d'opposition et de limitation sur vos
              données. Pour l'exercer : <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Vous pouvez aussi
              adresser une réclamation à la CNIL (
              <a href="https://www.cnil.fr" target="_blank" rel="noopener">
                cnil.fr
              </a>
              ).
            </p>
          </Bloc>

          <Bloc titre="Cookies">
            <p>
              Ce site ne dépose aucun cookie et n'utilise aucun outil de mesure d'audience ou de publicité. Les polices
              de caractères et les vidéos sont hébergées avec le site : aucune donnée n'est envoyée à un service tiers
              lors de votre visite. C'est pourquoi aucun bandeau de consentement ne vous est présenté.
            </p>
          </Bloc>

          <p className="m-0 text-[13px] text-muted">Dernière mise à jour : {MAJ}.</p>
        </div>
      </Section>
    </div>
  );
}
