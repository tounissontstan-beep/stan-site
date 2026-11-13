import { useEffect, useRef, useState, type ReactNode } from "react";
import { cx } from "./ui";

/** Ligne libellé + valeur + bouton « Copier ». */
export function CopyRow({ label, value, copyValue }: { label: string; value: string; copyValue?: string }) {
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
    <div className="flex flex-col gap-1 border-b border-line py-5">
      <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-sage">{label}</span>
      <div className="flex items-center justify-between gap-4">
        <span className="break-all text-[18px] font-medium tracking-[0.01em] text-black md:text-[20px]">{value}</span>
        <button
          type="button"
          onClick={copy}
          aria-label={`Copier : ${label}`}
          className="flex-none cursor-pointer whitespace-nowrap rounded-full border border-line bg-white px-4 py-2 text-[14px] font-medium text-forest transition-[background] duration-200 hover:bg-hover"
        >
          {copied ? "Copié ✓" : "Copier"}
        </button>
      </div>
    </div>
  );
}

/** Lien vers la page « Faire un don ». */
export function DonButton({
  children = "Faire un don",
  variant = "primary",
  className,
}: {
  children?: ReactNode;
  variant?: "primary" | "outline" | "link" | "light";
  className?: string;
}) {
  const styles = {
    primary:
      "inline-flex items-center gap-2 rounded-full bg-forest px-7 py-[15px] text-[16px] font-medium tracking-[-0.01em] !text-white shadow-[0_4px_6px_-1px_rgba(2,44,34,0.08)] hover:!opacity-85",
    outline:
      "inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-[14px] text-[16px] font-medium !text-forest hover:!opacity-100 hover:bg-hover",
    light:
      "inline-flex items-center gap-2 rounded-full border border-white/40 bg-transparent px-[30px] py-4 text-[17px] font-medium tracking-[-0.01em] !text-white hover:!opacity-100 hover:bg-white/10",
    link: "text-[15px] font-medium !text-forest underline underline-offset-[3px]",
  }[variant];
  return (
    <a href="#/don" className={cx("whitespace-nowrap transition-[opacity,background] duration-200", styles, className)}>
      {children}
    </a>
  );
}
