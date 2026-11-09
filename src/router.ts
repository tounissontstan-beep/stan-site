import { useEffect, useState } from "react";

export type Page = "home" | "histoire" | "aider" | "presse" | "compteur";
const PAGES: Page[] = ["histoire", "aider", "presse", "compteur"];

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

export function useTypewriter(text: string, speed = 38, startDelay = 600) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
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
  }, [text, speed, startDelay]);
  return { displayed, done };
}
