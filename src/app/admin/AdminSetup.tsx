import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";

/**
 * Écran affiché quand l'administration n'est pas encore configurée.
 *
 * Plutôt qu'une erreur, il détaille précisément ce qui manque et comment
 * l'obtenir — c'est cette page que l'on consulte lors de la mise en service.
 */
export function AdminSetup({ missing }: { missing: string[] }) {
  return (
    <main className="min-h-svh bg-ink-950 py-16 text-white">
      <Container className="max-w-2xl">
        <Logo tone="light" height={52} />

        <h1 className="mt-10 text-[1.75rem] leading-tight sm:text-[2rem]">
          Administration à configurer
        </h1>
        <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/60">
          Ajoutez les variables d&apos;environnement ci-dessous, puis
          redéployez. Sur Vercel : <strong className="text-white">Settings</strong> ›{" "}
          <strong className="text-white">Environment Variables</strong>.
        </p>

        <ul className="mt-8 space-y-3">
          {VARIABLES.map((variable) => {
            const isMissing = missing.includes(variable.name);
            return (
              <li
                key={variable.name}
                className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-5"
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className={
                      isMissing
                        ? "inline-flex size-5 items-center justify-center rounded-full bg-white/10 text-white/40"
                        : "inline-flex size-5 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"
                    }
                  >
                    <Icon name={isMissing ? "close" : "check"} className="size-3" strokeWidth={3} />
                  </span>
                  <code className="font-mono text-sm font-semibold text-white">
                    {variable.name}
                  </code>
                  <span className="ml-auto text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-white/35">
                    {isMissing ? "manquante" : "définie"}
                  </span>
                </div>
                <p className="mt-3 text-[0.8125rem] leading-relaxed text-white/55">
                  {variable.help}
                </p>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 rounded-xl border border-brand-500/25 bg-brand-500/[0.07] p-5">
          <h2 className="text-sm font-bold text-brand-300">Créer le jeton GitHub</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-[0.8125rem] leading-relaxed text-white/60">
            <li>
              Sur GitHub : <strong className="text-white/85">Settings</strong> ›{" "}
              <strong className="text-white/85">Developer settings</strong> ›{" "}
              <strong className="text-white/85">
                Personal access tokens › Fine-grained tokens
              </strong>{" "}
              › <strong className="text-white/85">Generate new token</strong>.
            </li>
            <li>
              Sous <em>Repository access</em>, choisissez{" "}
              <strong className="text-white/85">Only select repositories</strong> et ne
              cochez que ce dépôt.
            </li>
            <li>
              Sous <em>Permissions › Repository permissions</em>, réglez{" "}
              <strong className="text-white/85">Contents</strong> sur{" "}
              <strong className="text-white/85">Read and write</strong>. Rien
              d&apos;autre n&apos;est nécessaire.
            </li>
            <li>Copiez le jeton — il ne sera plus affiché ensuite.</li>
          </ol>
        </div>
      </Container>
    </main>
  );
}

const VARIABLES = [
  {
    name: "ADMIN_PASSWORD",
    help: "Le mot de passe qui protège cette page. Choisissez-en un long et unique : c'est la seule barrière avant l'envoi de fichiers dans le dépôt.",
  },
  {
    name: "GITHUB_TOKEN",
    help: "Jeton d'accès personnel GitHub, avec l'autorisation « Contents : Read and write » sur ce seul dépôt. Voir la marche à suivre ci-dessous.",
  },
  {
    name: "GITHUB_REPOSITORY",
    help: "Le dépôt visé, au format proprietaire/depot — par exemple MoustafaMKCL/Claude-.",
  },
  {
    name: "GITHUB_BRANCH",
    help: "La branche sur laquelle publier les photos, celle que votre hébergeur déploie — par exemple main.",
  },
] as const;
