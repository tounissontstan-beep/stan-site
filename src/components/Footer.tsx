import { CONTACT_EMAIL } from "../data/compteur";

export function Footer() {
  return (
    <footer className="relative z-[1] w-full border-t border-line-soft bg-white">
      <div className="mx-auto box-border flex w-full max-w-[1280px] flex-col items-start justify-between gap-7 px-6 pt-12 pb-14 md:flex-row md:flex-wrap md:gap-8">
        <div className="flex flex-col gap-[6px]">
          <p className="m-0 text-[17px] font-medium tracking-[-0.01em] text-black">Stan Tounissont &#10033;</p>
          <p className="m-0 text-[14px] text-muted">Skieur alpin &middot; Code FIS 6192025 &middot; Club Sports de Risoul</p>
          <p className="m-0 max-w-[420px] text-[13px] leading-[1.5] text-muted">
            Site personnel, sans lien avec le CIO, le CNOSF ou la FIS.{" "}
            <a href="#/mentions-legales" className="!text-muted underline underline-offset-[3px]">
              Mentions légales &amp; confidentialité
            </a>
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-7 gap-y-3 text-[15px] [&_a]:!text-forest">
          <a href="#/">Accueil</a>
          <a href="#/histoire">Derrière l'objectif</a>
          <a href="#/aider">Comment m'aider</a>
          <a href="#/compteur">Le compteur</a>
          <a href="#/presse">Presse &amp; médias</a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-[3px]">
            {CONTACT_EMAIL}
          </a>
        </nav>
      </div>
    </footer>
  );
}
