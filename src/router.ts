import { useEffect, useState } from "react";

export type Page = "home" | "histoire" | "aider" | "presse" | "compteur" | "mentions-legales" | "don";
const PAGES: Page[] = ["histoire", "aider", "presse", "compteur", "mentions-legales", "don"];

function readPage(): Page {
  const h = (window.location.hash || "").replace(/^#\/?/, "").split("?")[0];
  return (PAGES as string[]).includes(h) ? (h as Page) : "home";
}

/** Routage par hash (#/aider, #/compteur…) : liens partageables, hébergement statique. */
export function useHashPage(onChange?: () => void) {
  const [page, setPage] = useState<Page>(readPage);
  useEffect(() => {
    const onHash = () => {
      setPage(readPage());
      onChange?.();
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [onChange]);
  return page;
}

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export function useTypewriter(text: string, speed = 38, startDelay = 600) {
  const reduce = prefersReducedMotion();
  const [displayed, setDisplayed] = useState(reduce ? text : "");
  const [done, setDone] = useState(reduce);
  useEffect(() => {
    if (reduce) return;
    let iv: ReturnType<typeof setInterval>;
    const t = setTimeout(() => {
      let i = 0;
      iv = setInterval(() => {
        i += 1;
        if (i >= text.length) {
          clearInterval(iv);
          setDisplayed(text);
          setDone(true);
        } else {
          setDisplayed(text.slice(0, i));
        }
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(t);
      clearInterval(iv);
    };
  }, [text, speed, startDelay, reduce]);
  return { displayed, done };
}
