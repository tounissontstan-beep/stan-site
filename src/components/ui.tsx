import type { ReactNode } from "react";

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");

/** Sur-titre vert, capitales espacées. */
export function Eyebrow({ children, className, light }: { children: ReactNode; className?: string; light?: boolean }) {
  return (
    <p
      className={cx(
        "m-0 mb-4 text-[12px] font-semibold uppercase tracking-[0.14em]",
        light ? "text-pale" : "text-moss",
        className,
      )}
    >
      {children}
    </p>
  );
}

/** Petit libellé de chiffre-clé (gris, capitales). */
export function Label({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cx("m-0 text-[12px] font-semibold uppercase tracking-[0.1em] text-sage", className)}>{children}</p>
  );
}

/** Libellé vert de bloc de texte (Guillestre, Retombées…). */
export function Kicker({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cx("m-0 mb-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-moss", className)}>
      {children}
    </p>
  );
}

/** Titre de section : 44px desktop, 32px sous 768px. */
export function H2({
  children,
  className,
  tracking = "tight",
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  tracking?: "tight" | "tighter";
  as?: "h2" | "h3" | "p";
}) {
  return (
    <Tag
      className={cx(
        "m-0 text-[32px] font-normal leading-[1.1] text-black md:text-[44px]",
        tracking === "tight" ? "tracking-[-0.025em]" : "tracking-[-0.03em]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Titre de page (h1) : 64px desktop, 38px sous 768px. */
export function PageH1({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h1
      className={cx(
        "m-0 mb-6 text-[38px] font-normal leading-[1.05] tracking-[-0.03em] text-black md:text-[64px]",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export function Lead({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cx("m-0 max-w-[640px] text-[20px] leading-[1.6] text-body text-pretty", className)}>{children}</p>;
}

export function Arrow({ children = "→" }: { children?: ReactNode }) {
  return <span className="text-[15px] leading-none">{children}</span>;
}

/** Bouton plein vert foncé (lien). */
export function PrimaryLink({
  href,
  children,
  size = "lg",
  className,
}: {
  href: string;
  children: ReactNode;
  size?: "lg" | "md";
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cx(
        "inline-flex items-center gap-2 rounded-full bg-forest font-medium tracking-[-0.01em] !text-white shadow-[0_4px_6px_-1px_rgba(2,44,34,0.08)] transition-opacity duration-200 hover:!opacity-85",
        size === "lg" ? "px-[30px] py-4 text-[17px]" : "px-7 py-[15px] text-[16px]",
        className,
      )}
    >
      {children} <Arrow />
    </a>
  );
}

/** Lien souligné vert foncé. */
export function UnderlineLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={cx(
        "font-medium !text-forest underline underline-offset-4 transition-opacity duration-200",
        className,
      )}
    >
      {children}
    </a>
  );
}

/** Chiffre-clé avec filet au-dessus. */
export function Stat({ label, value, children }: { label: ReactNode; value: ReactNode; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-[10px] border-t border-line pt-6">
      <Label>{label}</Label>
      <p className="m-0 text-[44px] font-normal leading-none tracking-[-0.03em] text-black">{value}</p>
      <p className="m-0 text-[16px] leading-[1.55] text-body">{children}</p>
    </div>
  );
}

export function Unit({ children }: { children: ReactNode }) {
  return <span className="text-[20px] tracking-normal text-sage">{children}</span>;
}

/** Conteneur 1280px. */
export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cx("mx-auto box-border w-full max-w-[1280px] px-6", className)}>{children}</div>;
}

/**
 * Bloc intérieur de section (.mf-inner) : sous 768px, padding 64/24/80 et gap 48.
 * `desktop` contient les classes ≥768px (padding-y et gap).
 */
export function Inner({ children, desktop, className }: { children: ReactNode; desktop: string; className?: string }) {
  return (
    <div
      className={cx(
        "mx-auto box-border flex w-full max-w-[1280px] flex-col gap-12 px-6 pt-16 pb-20",
        desktop,
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Section({
  children,
  tone = "white",
  border = true,
  className,
  id,
  label,
}: {
  children: ReactNode;
  tone?: "white" | "mist" | "forest";
  border?: boolean;
  className?: string;
  id?: string;
  label?: string;
}) {
  return (
    <section
      id={id}
      aria-label={label}
      className={cx(
        "relative z-[1] w-full",
        tone === "white" && "bg-white",
        tone === "mist" && "bg-mist",
        tone === "forest" && "bg-forest",
        border && tone !== "forest" && "border-t border-line-soft",
        className,
      )}
    >
      {children}
    </section>
  );
}

/** En-tête de page (.mf-page-head). */
export function PageHead({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cx(
        "mx-auto box-border w-full max-w-[1280px] px-6 pt-[108px] pb-14 md:pt-[168px] md:pb-[72px]",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Bandeau vert d'appel à l'action en bas de page. */
export function CtaBand({ eyebrow, children }: { eyebrow: string; children: ReactNode }) {
  return (
    <Section tone="forest">
      <Container className="flex flex-wrap items-center justify-between gap-8 py-[88px]">
        <div className="max-w-[640px]">
          <Eyebrow light className="!mb-[14px]">
            {eyebrow}
          </Eyebrow>
          <p className="m-0 text-[32px] font-normal leading-[1.15] tracking-[-0.025em] text-white md:text-[38px]">
            {children}
          </p>
        </div>
        <a
          href="#/aider"
          className="inline-flex items-center gap-2 rounded-full bg-white px-[30px] py-4 text-[17px] font-medium tracking-[-0.01em] !text-forest transition-opacity duration-200 hover:!opacity-85"
        >
          Comment m'aider <Arrow />
        </a>
      </Container>
    </Section>
  );
}

/** Photo portrait, ou emplacement vide si pas encore de fichier. */
export function Photo({ src, alt, placeholder }: { src?: string; alt: string; placeholder: string }) {
  if (src) return <img src={src} alt={alt} className="block h-full w-full rounded-[20px] object-cover" />;
  return (
    <div className="flex h-full w-full items-center justify-center rounded-[20px] bg-ash p-6 text-center text-[14px] text-muted">
      {placeholder}
    </div>
  );
}

export { cx };
