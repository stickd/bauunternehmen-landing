import { scrollToSection } from "./scroll";

export function navigateToSection(id: string) {
  if (typeof window === "undefined") return;

  // если не на главной → редирект
  if (window.location.pathname !== "/") {
    window.location.href = `/#${id}`;
    return;
  }

  // если на главной → скролл
  scrollToSection(id);
}
