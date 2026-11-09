// ─────────────────────────────────────────────────────────────
//  COMPTEUR — les seuls chiffres à modifier à la main.
//  Après chaque contribution : changer les valeurs, enregistrer,
//  puis republier le site. Toutes les pages (Accueil, Comment m'aider,
//  Le compteur) se mettent à jour automatiquement.
//  Le nombre de jours avant les Jeux se calcule tout seul.
// ─────────────────────────────────────────────────────────────

export type Contribution = {
  date: string;
  nom: string;
  type: "Don" | "Matériel" | "Partenariat";
  montant: number; // en euros (le matériel est compté à sa valeur)
};

export const COMPTEUR = {
  saison: "2026 — 2027",
  objectif: 28000, // budget de la saison, en euros
  reuni: 6200, // montant réuni à ce jour, en euros
  soutiens: 14, // nombre de personnes et entreprises
  pointsFIS: 144.47, // meilleurs points FIS actuels
  cibleFIS: 120, // standard olympique
  miseAJour: "9 novembre 2026",

  // ⚠️ EXEMPLES À REMPLACER par les vraies contributions avant la mise en ligne.
  // Les plus récentes en premier.
  contributions: [
    { date: "6 nov. 2026", nom: "Boulangerie du Guil", type: "Partenariat", montant: 1500 },
    { date: "28 oct. 2026", nom: "Anonyme", type: "Don", montant: 50 },
    { date: "21 oct. 2026", nom: "Ski-club de Guillestre", type: "Matériel", montant: 800 },
    { date: "15 oct. 2026", nom: "Claire M.", type: "Don", montant: 30 },
    { date: "2 oct. 2026", nom: "Famille Tounissont", type: "Don", montant: 500 },
  ] as Contribution[],
};

// Date d'ouverture des Jeux (à vérifier) — mois 0-indexé : 1 = février.
export const OUVERTURE_JEUX = new Date(2030, 1, 1);

export const CONTACT_EMAIL = "contact@stantounissont.com";
