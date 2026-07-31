import Link from "next/link";
import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

/**
 * Palette de boutons du site.
 *
 * Chaque variante existe parce qu'un fond différent l'exige : `glass` et
 * `outlineLight` sont posés sur photo, `dark` sur fond clair, `white` sur le
 * dégradé vert. Toutes partagent le même gabarit — pilule, transition de
 * 200 ms, ombre qui se creuse au survol.
 */
type ButtonVariant =
  | "primary"
  | "dark"
  | "white"
  | "glass"
  | "outlineLight"
  | "outlineDark";

type ButtonSize = "sm" | "md" | "lg";

const base =
  "group relative inline-flex select-none items-center justify-center gap-2 " +
  "whitespace-nowrap rounded-full font-semibold " +
  "transition-[transform,box-shadow,background-color,border-color,color] duration-200 " +
  "ease-[cubic-bezier(0.22,1,0.36,1)] active:translate-y-0 active:scale-[0.985] " +
  "disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-600 text-white shadow-brand hover:-translate-y-0.5 hover:bg-brand-500 hover:shadow-brand-lg",
  dark: "bg-ink-900 text-white shadow-soft hover:-translate-y-0.5 hover:bg-ink-800 hover:shadow-card",
  white:
    "bg-white text-ink-900 shadow-soft hover:-translate-y-0.5 hover:bg-brand-50 hover:shadow-lift",
  glass:
    "glass border border-white/25 text-white hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/20",
  outlineLight:
    "border border-white/35 text-white hover:-translate-y-0.5 hover:border-white hover:bg-white/10",
  outlineDark:
    "border border-ink-900/15 text-ink-900 hover:-translate-y-0.5 hover:border-ink-900/30 hover:bg-ink-900/[0.04]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-[0.8125rem]",
  md: "h-11 px-5 text-sm",
  lg: "h-[3.25rem] px-7 text-[0.9375rem]",
};

interface CommonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Icône affichée à droite du libellé ; glisse légèrement au survol. */
  icon?: IconName;
  /** Étire le bouton sur toute la largeur disponible. */
  fullWidth?: boolean;
  className?: string;
}

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
  /** Utile pour refermer le menu mobile au clic sur un lien d'ancre. */
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  type?: never;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
    external?: never;
  };

type ButtonProps = ButtonAsLink | ButtonAsButton;

/** Rend un `<a>` quand `href` est fourni, un `<button>` sinon. */
export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    icon,
    fullWidth,
    className,
  } = props;

  const classes = cn(base, variants[variant], sizes[size], fullWidth && "w-full", className);

  const content = (
    <>
      <span>{children}</span>
      {icon ? (
        <Icon
          name={icon}
          className="size-4 shrink-0 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5"
        />
      ) : null}
    </>
  );

  if (props.href !== undefined) {
    const { href, external, onClick } = props;
    // `mailto:`, `tel:` et les URL absolues doivent rester de simples ancres :
    // `next/link` n'a rien à préparer pour elles.
    const isPlainAnchor =
      external ||
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");

    if (isPlainAnchor) {
      return (
        <a
          href={href}
          className={classes}
          onClick={onClick}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  const {
    children: _children,
    variant: _variant,
    size: _size,
    icon: _icon,
    fullWidth: _fullWidth,
    className: _className,
    href: _href,
    external: _external,
    type = "button",
    ...buttonProps
  } = props;

  return (
    <button type={type} className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
