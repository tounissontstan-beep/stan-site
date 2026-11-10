/** Graphe statique de progression FIS (slalom, saison 2025–2026). Échelle : 120 en haut (y=40), 170 en bas (y=200). */
export function FisChart() {
  const races = [
    { x: 120, y: 200, score: null, date: "08 févr.", lieu: "Les 7 Laux" },
    { x: 260, y: 144, score: "152,61", date: "20 mars", lieu: "Claviere" },
    { x: 400, y: 200, score: null, date: "21 mars", lieu: "Claviere" },
    { x: 540, y: 118, score: "144,47", date: "28 mars", lieu: "Chamrousse" },
    { x: 680, y: 200, score: null, date: "29 mars", lieu: "Chamrousse" },
  ];
  return (
    <svg
      viewBox="0 0 760 250"
      width="100%"
      role="img"
      aria-label="Progression des points FIS en slalom sur la saison 2026"
      className="block overflow-visible"
    >
      <line x1="60" y1="40" x2="740" y2="40" stroke="#4D6D47" strokeWidth="1" strokeDasharray="4 4" />
      <text x="60" y="28" fontSize="15" fontWeight="600" fill="#4D6D47" letterSpacing="0.06em">
        CIBLE 120 PTS — STANDARD OLYMPIQUE
      </text>
      <line x1="60" y1="104" x2="740" y2="104" stroke="#EEF1EC" strokeWidth="1" />
      <line x1="60" y1="168" x2="740" y2="168" stroke="#E3E8E1" strokeWidth="1" strokeDasharray="2 4" />
      <text x="740" y="162" fontSize="15" fill="#6B776B" textAnchor="end">
        points de liste 159,98
      </text>
      <line x1="60" y1="200" x2="740" y2="200" stroke="#EEF1EC" strokeWidth="1" />
      <text x="46" y="45" fontSize="15" fill="#6B776B" textAnchor="end">120</text>
      <text x="46" y="109" fontSize="15" fill="#6B776B" textAnchor="end">140</text>
      <text x="46" y="205" fontSize="15" fill="#6B776B" textAnchor="end">170</text>
      <line x1="60" y1="215" x2="740" y2="215" stroke="#E3E8E1" strokeWidth="1" />
      <path
        d="M120 168 C 178 166, 216 152, 260 144 S 424 138, 540 118"
        fill="none"
        stroke="#1C2E1E"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="500"
        strokeDashoffset="500"
        style={{ animation: "drawPath 1.4s cubic-bezier(0.4,0,0.2,1) 0.2s forwards" }}
      />
      <path
        d="M540 118 C 598 104, 650 66, 700 40"
        fill="none"
        stroke="#4D6D47"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="5 7"
        opacity="0.55"
        style={{ animation: "fadeIn 0.6s ease-out 1.5s both" }}
      />
      <circle cx="700" cy="40" r="4" fill="#4D6D47" style={{ animation: "fadeIn 0.6s ease-out 1.7s both" }} />
      {races.map((r, k) => (
        <g key={k} style={{ animation: `fadeIn 0.5s ease-out ${(0.35 + k * 0.12).toFixed(2)}s both` }}>
          {r.score ? (
            <>
              <circle cx={r.x} cy={r.y} r="6" fill="#1C2E1E" stroke="#1C2E1E" strokeWidth="2" />
              <text x={r.x} y={r.y - 18} fontSize="16" fontWeight="500" fill="#1C2E1E" textAnchor="middle">
                {r.score}
              </text>
            </>
          ) : (
            <>
              <circle cx={r.x} cy={r.y} r="4" fill="#ffffff" stroke="#C9D2C7" strokeWidth="2" />
              <text x={r.x} y="184" fontSize="15" fontWeight="500" fill="#6B776B" textAnchor="middle">
                DNF
              </text>
            </>
          )}
          <text x={r.x} y="235" fontSize="15" fill="#6B776B" textAnchor="middle">
            {r.date}
          </text>
          <text x={r.x} y="252" fontSize="14" fill="#6B776B" textAnchor="middle">
            {r.lieu}
          </text>
        </g>
      ))}
    </svg>
  );
}
