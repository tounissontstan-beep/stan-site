import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CONTACT_EMAIL } from "../data/compteur";
import { cx } from "./ui";

const OPTIONS = ["Sponsoring", "Matériel", "Médias", "Autre"];

export function ServicePills() {
  const [selected, setSelected] = useState<string[]>([]);
  const toggle = (name: string) =>
    setSelected((s) => (s.includes(name) ? s.filter((n) => n !== name) : [...s, name]));
  const mailto =
    `mailto:${CONTACT_EMAIL}?subject=` + encodeURIComponent("Projet 2030 — " + selected.join(", "));

  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
        {OPTIONS.map((name) => {
          const active = selected.includes(name);
          return (
            <motion.button
              key={name}
              onClick={() => toggle(name)}
              aria-pressed={active}
              whileTap={{ scale: 0.97 }}
              className={cx(
                "inline-flex cursor-pointer items-center gap-2 rounded-full border px-[26px] py-[13px] text-[17px] font-medium tracking-[-0.01em] transition-[background,color,box-shadow] duration-[250ms]",
                active
                  ? "border-forest bg-forest text-white shadow-[0_4px_6px_-1px_rgba(2,44,34,0.05),0_2px_4px_-2px_rgba(2,44,34,0.05)]"
                  : "border-line bg-white text-forest hover:bg-hover",
              )}
            >
              <AnimatePresence initial={false}>
                {active && (
                  <motion.svg
                    key="check"
                    initial={{ opacity: 0, scale: 0.3, width: 0 }}
                    animate={{ opacity: 1, scale: 1, width: 16 }}
                    exit={{ opacity: 0, scale: 0.3, width: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </motion.svg>
                )}
              </AnimatePresence>
              {name}
            </motion.button>
          );
        })}
      </div>
      <div className="min-h-[52px] max-w-[720px]">
        <AnimatePresence mode="wait" initial={false}>
          {selected.length === 0 ? (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="m-0 text-[13px] italic text-forest"
            >
              Cliquez pour choisir votre façon d'aider ci-dessus — ou écrivez-moi directement à {CONTACT_EMAIL}.
            </motion.p>
          ) : (
            <motion.div
              key="banner"
              initial={{ opacity: 0, y: 10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: 10, height: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              className="overflow-hidden"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-line-soft bg-white px-5 py-[14px]">
                <span className="text-[15px] text-forest">
                  Prêt à échanger sur&nbsp;: <span className="font-medium">{selected.join(", ")}</span>
                </span>
                <a
                  href={mailto}
                  className="inline-flex items-center gap-[6px] px-[2px] py-1 text-[12px] font-semibold uppercase tracking-[0.08em] !text-moss transition-opacity duration-200"
                >
                  C'est parti <span className="text-[14px] leading-none">&rarr;</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
