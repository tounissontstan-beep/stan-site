import { useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Vidéo muette en boucle, avec un bouton pause (accessibilité : toute animation
 * de plus de 5 s doit pouvoir être arrêtée). Pas de lecture automatique si
 * l'utilisateur a demandé à réduire les animations.
 */
export function Video({ src, className, label }: { src: string; className?: string; label: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(!reduce);
  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };
  return (
    <>
      <video
        ref={ref}
        src={src}
        autoPlay={!reduce}
        muted
        loop
        playsInline
        preload="auto"
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className={className}
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Mettre la vidéo en pause" : "Lire la vidéo"}
        className="pointer-events-auto absolute right-3 bottom-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-none bg-white/85 text-forest shadow-sm backdrop-blur-sm transition-opacity duration-200 hover:opacity-90"
      >
        {playing ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M7 4.5v15a1 1 0 0 0 1.5.86l12-7.5a1 1 0 0 0 0-1.72l-12-7.5A1 1 0 0 0 7 4.5Z" />
          </svg>
        )}
      </button>
    </>
  );
}
