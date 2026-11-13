import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CONTACT_EMAIL, DON } from "../data/compteur";
import { cx } from "./ui";

function CopyRow({ label, value, copyValue }: { label: string; value: string; copyValue?: string }) {
  const [copied, setCopied] = useState(false);
  const t = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => clearTimeout(t.current), []);
  const copy = () => {
    const v = copyValue ?? value;
    const done = () => {
      setCopied(true);
      clearTimeout(t.current);
      t.current = setTimeout(() => setCopied(false), 2000);
    };
    if (navigator.clipboard) navigator.clipboard.writeText(v).then(done, () => window.prompt("Copiez :", v));
    else window.prompt("Copiez :", v);
  };
  return (
    <div className="flex flex-col gap-1 border-b border-line py-4">
      <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-sage">{label}</span>
      <div className="flex items-center justify-between gap-4">
        <span className="font-medium break-all text-[17px] tracking-[0.01em] text-black">{value}</span>
        <button
          type="button"
          onClick={copy}
          className="flex-none cursor-pointer whitespace-nowrap rounded-full border border-line bg-white px-4 py-2 text-[14px] font-medium text-forest transition-[background] duration-200 hover:bg-hover"
        >
          {copied ? "Copié ✓" : "Copier"}
        </button>
      </div>
    </div>
  );
}

/** Fenêtre de don par virement (IBAN). */
export function DonModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      prev?.focus();
    };
  }, [open, onClose]);

  const mailto =
    `mailto:${CONTACT_EMAIL}?subject=` +
    encodeURIComponent("Mon don pour le projet 2030") +
    "&body=" +
    encodeURIComponent(
      "Bonjour Stan,\n\nJe viens de faire un virement de … €.\n\nJ'accepte / Je n'accepte pas que mon nom apparaisse sur le compteur.\n",
    );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[30] flex items-end justify-center bg-black/40 backdrop-blur-[2px] md:items-center md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="don-titre"
            className="box-border max-h-[92vh] w-full max-w-[560px] overflow-y-auto rounded-t-3xl bg-white p-6 md:rounded-3xl md:p-10"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-2 flex items-start justify-between gap-4">
              <p className="m-0 text-[12px] font-semibold uppercase tracking-[0.14em] text-moss">Don libre</p>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Fermer"
                className="-mt-2 -mr-2 flex h-9 w-9 flex-none cursor-pointer items-center justify-center rounded-full border-none bg-transparent text-[22px] leading-none text-forest hover:bg-chip"
              >
                &times;
              </button>
            </div>
            <h2 id="don-titre" className="m-0 mb-3 text-[30px] font-normal leading-[1.15] tracking-[-0.025em] text-black">
              Faire un don par virement.
            </h2>
            <p className="m-0 mb-4 text-[16px] leading-[1.6] text-body text-pretty">
              Depuis l'application de votre banque, ajoutez ce compte comme bénéficiaire. À partir de 10&nbsp;€, chaque
              montant compte : un dossard, une nuit avant une course, un aller-retour vers l'Italie.
            </p>
            <div className="border-t border-line">
              <CopyRow label="Bénéficiaire" value={DON.titulaire} />
              <CopyRow label="IBAN" value={DON.iban} copyValue={DON.iban.replace(/\s/g, "")} />
              <CopyRow label="Motif du virement" value={DON.motif} />
            </div>
            <p className="m-0 mt-5 text-[15px] leading-[1.6] text-body text-pretty">
              Un petit mot après votre virement me permet de vous remercier et de vous ajouter au compteur — seulement
              si vous le souhaitez.{" "}
              <a href={mailto} className="font-medium !text-forest underline underline-offset-[3px]">
                Me prévenir de mon don
              </a>
            </p>
            <p className="m-0 mt-4 text-[13px] leading-[1.5] text-muted">
              Don à un particulier : il n'ouvre pas droit à une réduction d'impôt. Entreprises : pour un partenariat
              avec facture, <a href="#/aider" onClick={onClose} className="!text-muted underline underline-offset-[3px]">écrivez-moi</a>.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** Bouton qui ouvre la fenêtre de don. */
export function DonButton({
  children = "Faire un don",
  variant = "primary",
  className,
}: {
  children?: ReactNode;
  variant?: "primary" | "outline" | "link" | "light";
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const styles = {
    primary:
      "inline-flex items-center gap-2 rounded-full bg-forest px-7 py-[15px] text-[16px] font-medium tracking-[-0.01em] text-white shadow-[0_4px_6px_-1px_rgba(2,44,34,0.08)] hover:opacity-85",
    outline:
      "inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-[14px] text-[16px] font-medium text-forest hover:bg-hover",
    light:
      "inline-flex items-center gap-2 rounded-full border border-white/40 bg-transparent px-[30px] py-4 text-[17px] font-medium tracking-[-0.01em] text-white hover:bg-white/10",
    link: "border-none bg-transparent p-0 text-[15px] font-medium text-forest underline underline-offset-[3px] hover:opacity-60",
  }[variant];
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cx("cursor-pointer whitespace-nowrap transition-[opacity,background] duration-200", styles, className)}
      >
        {children}
      </button>
      <DonModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
