import { COMPTEUR, OUVERTURE_JEUX } from "./compteur";

export const eur = (v: number) => Math.round(v).toLocaleString("fr-FR") + " €";
export const fr2 = (v: number) =>
  v.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export function compteurStats() {
  const { objectif, reuni, pointsFIS, cibleFIS } = COMPTEUR;
  const pct = Math.min(100, Math.round((reuni / objectif) * 100));
  const jours = Math.max(0, Math.ceil((OUVERTURE_JEUX.getTime() - Date.now()) / 86400000));
  return {
    pct,
    pctLabel: pct + " %",
    reuniLabel: eur(reuni),
    objectifLabel: eur(objectif),
    resteLabel: eur(Math.max(0, objectif - reuni)),
    fisLabel: fr2(pointsFIS),
    fisResteLabel: fr2(Math.max(0, pointsFIS - cibleFIS)),
    joursLabel: jours.toLocaleString("fr-FR"),
  };
}
