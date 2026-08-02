"use client";

import { useCallback, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import type { ImageSlot } from "@/lib/image-slots";
import { cn } from "@/lib/utils";

interface AdminClientProps {
  authenticated: boolean;
  groups: { section: string; slots: ImageSlot[] }[];
  repository: string;
  branch: string;
}

/**
 * Interface d'administration des photos.
 *
 * Un état par emplacement plutôt qu'un état global : deux envois peuvent donc
 * se dérouler en parallèle sans que l'un écrase le retour visuel de l'autre.
 */
export function AdminClient({ authenticated, groups, repository, branch }: AdminClientProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(authenticated);

  if (!isAuthenticated) {
    return <LoginScreen onSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <main className="min-h-svh bg-sand-50 pb-24 pt-12">
      <Container className="max-w-5xl">
        <header className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <Logo tone="dark" height={52} />
            <div>
              <h1 className="text-xl font-bold text-ink-900">Photos du site</h1>
              <p className="mt-1 text-[0.8125rem] text-ink-900/50">
                {repository} · branche {branch}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button href="/" variant="outlineDark" size="sm" icon="arrowUpRight">
              Voir le site
            </Button>
            <LogoutButton onDone={() => setIsAuthenticated(false)} />
          </div>
        </header>

        <p className="mt-8 rounded-xl border border-brand-500/20 bg-brand-50 p-5 text-[0.8125rem] leading-relaxed text-ink-900/70">
          Chaque photo envoyée est <strong className="font-semibold text-ink-900">recadrée
          automatiquement</strong> aux dimensions de son emplacement, puis publiée dans le
          dépôt. Le site se reconstruit alors tout seul :{" "}
          <strong className="font-semibold text-ink-900">comptez environ une minute</strong>{" "}
          avant de voir le changement en ligne. Les aperçus ci-dessous montrent la version
          actuellement déployée.
        </p>

        <div className="mt-12 space-y-14">
          {groups.map((group) => (
            <section key={group.section}>
              <h2 className="text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-brand-600">
                {group.section}
              </h2>
              <ul className="mt-5 grid items-start gap-4 sm:grid-cols-2">
                {group.slots.map((slot) => (
                  <li key={slot.file}>
                    <SlotCard slot={slot} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Container>
    </main>
  );
}

/* ─────────────────────────────────  Connexion  ──────────────────────────── */

function LoginScreen({ onSuccess }: { onSuccess: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsPending(true);
    setError(null);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        onSuccess();
        return;
      }

      const data = (await response.json().catch(() => null)) as { error?: string } | null;
      setError(data?.error ?? "Connexion impossible.");
    } catch {
      setError("Le serveur n'a pas répondu.");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <main className="flex min-h-svh items-center justify-center bg-ink-950 px-5 py-16">
      <div className="w-full max-w-sm">
        <div className="flex justify-center">
          <Logo tone="light" height={64} />
        </div>

        <h1 className="mt-10 text-center text-xl font-bold text-white">
          Administration des photos
        </h1>

        <form onSubmit={handleSubmit} className="mt-8">
          <label htmlFor="password" className="sr-only">
            Mot de passe
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
            autoFocus
            required
            placeholder="Mot de passe"
            className="w-full rounded-full border border-white/15 bg-white/[0.06] px-5 py-3.5 text-sm text-white
                       placeholder:text-white/35 focus:border-brand-500/50 focus:outline-none"
          />

          {error ? (
            <p role="alert" className="mt-4 text-center text-[0.8125rem] text-red-300">
              {error}
            </p>
          ) : null}

          <div className="mt-6">
            <Button type="submit" variant="primary" size="lg" fullWidth disabled={isPending}>
              {isPending ? "Vérification…" : "Se connecter"}
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}

function LogoutButton({ onDone }: { onDone: () => void }) {
  return (
    <Button
      variant="outlineDark"
      size="sm"
      onClick={async () => {
        await fetch("/api/admin/logout", { method: "POST" });
        onDone();
      }}
    >
      Se déconnecter
    </Button>
  );
}

/* ──────────────────────────  Carte d'un emplacement  ────────────────────── */

type SlotState =
  | { status: "idle" }
  | { status: "sending" }
  | { status: "done"; preview: string }
  | { status: "error"; message: string };

function SlotCard({ slot }: { slot: ImageSlot }) {
  const [state, setState] = useState<SlotState>({ status: "idle" });
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const upload = useCallback(
    async (file: File) => {
      setState({ status: "sending" });

      const body = new FormData();
      body.append("file", file);
      body.append("slot", slot.file);

      try {
        const response = await fetch("/api/admin/upload", { method: "POST", body });
        const data = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;

        if (!response.ok) {
          setState({
            status: "error",
            message: data?.error ?? "Envoi impossible.",
          });
          return;
        }

        // L'aperçu montre le fichier choisi : le déploiement n'est pas encore
        // terminé, l'image en ligne serait donc encore l'ancienne.
        setState({ status: "done", preview: URL.createObjectURL(file) });
      } catch {
        setState({ status: "error", message: "Le serveur n'a pas répondu." });
      }
    },
    [slot.file],
  );

  const isSending = state.status === "sending";

  return (
    <div
      onDragOver={(event) => {
        event.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={(event) => {
        event.preventDefault();
        setIsDragging(false);
        const file = event.dataTransfer.files[0];
        if (file) void upload(file);
      }}
      className={cn(
        "flex flex-col rounded-2xl border bg-white p-5 shadow-soft transition-colors duration-200",
        isDragging ? "border-brand-500 bg-brand-50" : "border-ink-900/[0.07]",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-[0.875rem] font-bold text-ink-900">{slot.label}</h3>
          <p className="mt-1 font-mono text-[0.6875rem] text-ink-900/40">{slot.file}</p>
        </div>
        <span className="shrink-0 rounded-full bg-sand-100 px-2.5 py-1 text-[0.625rem] font-bold text-ink-900/50">
          {slot.width} × {slot.height}
        </span>
      </div>

      {/* Aperçu — image déployée, ou fichier tout juste envoyé. */}
      <div
        className="relative mt-4 w-full overflow-hidden rounded-xl bg-sand-100"
        style={{ aspectRatio: `${slot.width} / ${slot.height}` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element --
            Aperçu d'administration : l'optimisation `next/image` n'a pas de sens
            sur une image locale qui change à chaque envoi. */}
        <img
          src={state.status === "done" ? state.preview : `/images/${slot.file}`}
          alt=""
          className={cn(
            "size-full object-cover transition-opacity duration-300",
            isSending && "opacity-40",
          )}
        />

        {isSending ? (
          <span className="absolute inset-0 flex items-center justify-center bg-white/60 text-[0.75rem] font-semibold text-ink-900">
            Envoi en cours…
          </span>
        ) : null}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/avif"
        className="sr-only"
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) void upload(file);
          // Permet de renvoyer le même fichier après une correction.
          event.target.value = "";
        }}
      />

      <div className="mt-4 flex items-center justify-between gap-3">
        <Button
          variant="dark"
          size="sm"
          icon="arrowUpRight"
          disabled={isSending}
          onClick={() => inputRef.current?.click()}
        >
          Remplacer
        </Button>

        {state.status === "done" ? (
          <p className="flex items-center gap-1.5 text-[0.75rem] font-semibold text-brand-700">
            <Icon name="check" className="size-3.5" strokeWidth={3} />
            Publié — en ligne d&apos;ici une minute
          </p>
        ) : null}

        {state.status === "error" ? (
          <p role="alert" className="text-right text-[0.75rem] font-medium text-red-600">
            {state.message}
          </p>
        ) : null}
      </div>
    </div>
  );
}
