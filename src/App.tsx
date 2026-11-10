import { useCallback, useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useHashPage, useTypewriter } from "./router";
import { Home } from "./pages/Home";
import { Histoire } from "./pages/Histoire";
import { Aider } from "./pages/Aider";
import { Presse } from "./pages/Presse";
import { Compteur } from "./pages/Compteur";
import { MentionsLegales } from "./pages/MentionsLegales";

const HEADLINE = "Je vise les JO 2030.\nJ'ai besoin de vous.";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const page = useHashPage(closeMenu);
  // Le titre ne se tape qu'une fois par visite, même en revenant à l'accueil.
  const typed = useTypewriter(HEADLINE, 38, 600);

  return (
    <div className="relative block min-h-screen overflow-x-hidden bg-white text-neutral-900">
      <a
        href="#contenu"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("contenu")?.focus();
        }}
        className="fixed top-3 left-3 z-[20] -translate-y-24 rounded-full bg-forest px-5 py-3 text-[15px] font-medium !text-white transition-transform focus:translate-y-0"
      >
        Aller au contenu
      </a>
      <Header page={page} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main id="contenu" tabIndex={-1} className="outline-none">
        {page === "home" && <Home typed={typed} />}
        {page === "histoire" && <Histoire />}
        {page === "aider" && <Aider />}
        {page === "presse" && <Presse />}
        {page === "compteur" && <Compteur />}
        {page === "mentions-legales" && <MentionsLegales />}
      </main>
      <Footer />
    </div>
  );
}
