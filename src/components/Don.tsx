import type { ReactNode } from "react";
import { cx } from "./ui";

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
