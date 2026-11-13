import { AnimatePresence, motion } from "motion/react";
import type { Page } from "../router";
import { CONTACT_EMAIL } from "../data/compteur";
import { cx } from "./ui";

const NAV: { href: string; label: string; page: Page }[] = [
  { href: "#/histoire", label: "Derrière l'objectif", page: "histoire" },
  { href: "#/aider", label: "Comment m'aider", page: "aider" },
  { href: "#/compteur", label: "Le compteur", page: "compteur" },
  { href: "#/don", label: "Faire un don", page: "don" },
];

export function Header({
  page,
  menuOpen,
  setMenuOpen,
}: {
  page: Page;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}) {
  const home = page === "home";
  const bar = "h-[2px] w-6 bg-black transition-all duration-300";
  return (
    <>
      <header
        className={cx(
          "fixed inset-x-0 top-0 z-10 flex flex-row items-center justify-between px-5 py-4 transition-[background] duration-300 md:px-8 md:py-5",
          home ? "bg-transparent" : "bg-white/90 backdrop-blur-[10px]",
        )}
      >
        <a href="#/" className="flex flex-row items-center gap-3">
          <span className="select-none text-[21px] font-medium tracking-[-0.02em] text-black md:text-[26px]">
            Stan Tounissont
          </span>
          <span className="mb-1 select-none text-[25px] font-medium leading-none tracking-[-0.02em] text-black md:text-[30px]">
            &#10033;
          </span>
        </a>
        <nav className="mx-8 hidden flex-row whitespace-nowrap text-[23px] text-black nav:flex">
          {NAV.map((n, k) => (
            <span key={n.href}>
              <a
                href={n.href}
                className={cx(
                  "transition-opacity duration-200 underline-offset-4",
                  page === n.page ? "underline" : "no-underline",
                )}
              >
                {n.label}
              </a>
              {k < NAV.length - 1 && <span className="opacity-40">,&nbsp;</span>}
            </span>
          ))}
        </nav>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="hidden whitespace-nowrap text-[23px] text-black underline underline-offset-2 transition-opacity duration-200 nav:inline"
        >
          Me contacter
        </a>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
          className="flex cursor-pointer flex-col gap-[5px] border-none bg-transparent p-2 nav:hidden"
        >
          <span className={cx(bar, menuOpen && "translate-y-[7px] rotate-45")} />
          <span className={cx(bar, menuOpen && "opacity-0")} />
          <span className={cx(bar, menuOpen && "-translate-y-[7px] -rotate-45")} />
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9] flex flex-col justify-center gap-7 bg-white/95 px-10 backdrop-blur-sm nav:hidden"
          >
            {[{ href: "#/", label: "Accueil" }, ...NAV].map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMenuOpen(false)}
                className="text-[34px] tracking-[-0.02em]"
              >
                {n.label}
              </a>
            ))}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              onClick={() => setMenuOpen(false)}
              className="mt-3 text-[20px] underline underline-offset-2"
            >
              Me contacter
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
