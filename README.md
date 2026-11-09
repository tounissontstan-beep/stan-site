# Site Stan Tounissont — Objectif JO 2030

Implémentation de la maquette Claude Design `project/Site Stan v2.dc.html`.

**Stack** : Vite + React 18 + TypeScript + Tailwind CSS v4 + Motion. Site 100 % statique, routage par hash
(`#/histoire`, `#/aider`, `#/compteur`, `#/presse`) : les liens sont partageables et le site peut être hébergé
n'importe où (Vercel, Netlify, GitHub Pages, OVH…).

```bash
npm install
npm run dev      # développement local
npm run build    # génère dist/ à mettre en ligne
```

## Pages

| URL           | Page                  |
| ------------- | --------------------- |
| `#/`          | Accueil               |
| `#/histoire`  | Derrière l'objectif   |
| `#/aider`     | Comment m'aider       |
| `#/compteur`  | Le compteur (à partager) |
| `#/presse`    | Presse & médias (pied de page) |

## Mettre à jour le compteur

Un seul fichier : **`src/data/compteur.ts`**. Modifier `reuni`, `soutiens`, `pointsFIS`, `miseAJour` et la liste
`contributions`, puis republier. L'accueil, « Comment m'aider » et « Le compteur » se mettent à jour ensemble ; le
nombre de jours avant les Jeux se calcule tout seul.

## Changer une photo

- Carrousel « Le parcours » : remplacer les fichiers de `public/photos/` (`par-avant.webp`, `par-2425.webp`,
  `par-2526.webp`, `par-2627.webp`) — format portrait 3:4.
- Photos presse : déposer les fichiers dans `public/photos/` puis renseigner `src` dans `src/pages/Presse.tsx`.
- Photo du hero : `public/media/hero-portillon.png`. Vidéos : `public/media/bamako.mp4`, `public/media/halo.mp4`.

## À compléter avant la mise en ligne

- Contributions du compteur : ce sont des **exemples inventés**.
- Date d'ouverture des Jeux (1er février 2030) : non vérifiée — `OUVERTURE_JEUX` dans `src/data/compteur.ts`.
- Adresse `contact@stantounissont.com` : `CONTACT_EMAIL` dans `src/data/compteur.ts`.
- Budget (28 000 € et sa répartition) : estimation à confirmer — `src/pages/Aider.tsx`.
- Presse : titres des retombées, liens du kit média (`href: "#"`) et les 3 photos.
- Points FIS et graphe : valeurs figées, mise à jour manuelle (`src/pages/Histoire.tsx`, `src/components/FisChart.tsx`).
