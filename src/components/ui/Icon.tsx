import type { LucideIcon, LucideProps } from "lucide-react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Briefcase,
  Building2,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Layers,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Mic,
  Monitor,
  Phone,
  RefreshCw,
  Sparkles,
  TrainFront,
  Users,
  Wifi,
  X,
} from "lucide-react";

/**
 * Registre d'icônes.
 *
 * Le contenu (`src/content/site.ts`) désigne une icône par son nom — jamais par
 * un composant — afin que le fichier de contenu reste du texte pur, éditable
 * sans connaître React. Pour ajouter une icône : importez-la de `lucide-react`
 * puis ajoutez une entrée ici ; l'autocomplétion la proposera aussitôt.
 */
export const icons = {
  arrowRight: ArrowRight,
  arrowUpRight: ArrowUpRight,
  award: Award,
  briefcase: Briefcase,
  building: Building2,
  calendar: CalendarDays,
  check: Check,
  chevronDown: ChevronDown,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  clock: Clock,
  layers: Layers,
  leaf: Leaf,
  mail: Mail,
  mapPin: MapPin,
  menu: Menu,
  mic: Mic,
  phone: Phone,
  presentation: Monitor,
  refresh: RefreshCw,
  sparkles: Sparkles,
  train: TrainFront,
  users: Users,
  wifi: Wifi,
  close: X,
} as const satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

interface IconProps extends Omit<LucideProps, "ref"> {
  name: IconName;
}

/** Rend une icône du registre. `aria-hidden` par défaut : purement décoratif. */
export function Icon({ name, strokeWidth = 1.75, ...props }: IconProps) {
  const Component = icons[name];
  return <Component aria-hidden strokeWidth={strokeWidth} {...props} />;
}
