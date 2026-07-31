"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

interface MapFrameProps {
  /** URL d'intégration Google Maps (`contact.mapEmbedUrl`). */
  src: string;
  /** Titre accessible de l'iframe — décrit le lieu affiché. */
  title: string;
}

type Status = "idle" | "checking" | "ready" | "unavailable";

/**
 * Plan Google Maps, chargé seulement s'il est réellement joignable.
 *
 * Une iframe en échec affiche l'icône d'erreur du navigateur, et son événement
 * `load` se déclenche malgré tout : impossible de s'y fier. On sonde donc
 * l'URL avant de monter l'iframe. Trois conséquences :
 *
 *  1. bloqueur de traceurs, réseau d'entreprise ou hors ligne → le visiteur
 *     voit un plan stylisé, jamais un cadre cassé ;
 *  2. la sonde n'est lancée qu'à l'approche du champ de vision, ce qui
 *     préserve le bénéfice du chargement différé ;
 *  3. aucune requête vers Google tant que la section n'est pas atteinte.
 */
export function MapFrame({ src, title }: MapFrameProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    let cancelled = false;

    const probe = async () => {
      setStatus("checking");
      try {
        // `no-cors` : la réponse est opaque, on ne cherche pas à la lire —
        // seule compte la distinction « le réseau a répondu » / « il a échoué ».
        await fetch(src, { mode: "no-cors", cache: "no-store" });
        if (!cancelled) setStatus("ready");
      } catch {
        if (!cancelled) setStatus("unavailable");
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          void probe();
        }
      },
      { rootMargin: "300px" },
    );

    observer.observe(node);

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [src]);

  return (
    <div ref={containerRef} className="absolute inset-0">
      {/* Repli : trame de plan et épingle, toujours rendu sous l'iframe. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-sand-100
                   [background-image:linear-gradient(rgb(11_17_28/0.05)_1px,transparent_1px),linear-gradient(90deg,rgb(11_17_28/0.05)_1px,transparent_1px)]
                   [background-size:38px_38px]"
      >
        <span className="absolute left-1/2 top-[42%] flex size-12 -translate-x-1/2 items-center justify-center rounded-full bg-brand-500/15 text-brand-600">
          <Icon name="mapPin" className="size-5" />
        </span>
      </div>

      {status === "ready" ? (
        <iframe
          src={src}
          title={title}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className={cn(
            "absolute inset-0 size-full border-0 grayscale-[0.15] contrast-[1.05]",
            "animate-map-in",
          )}
        />
      ) : null}
    </div>
  );
}
