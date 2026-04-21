export function scrollToSection(
  id: string,
  options?: {
    offset?: number;
    mobileOffset?: number;
    desktopOffset?: number;
  },
) {
  const element = document.getElementById(id);
  if (!element) return;

  const isMobile = window.innerWidth < 768;

  // 🔥 дефолты (редактируй тут)
  const DEFAULT_OFFSETS = {
    mobile: 32,
    desktop: -10,
  };

  let offset = 0;

  // 1. если передали общий offset
  if (options?.offset !== undefined) {
    offset = options.offset;
  }
  // 2. если передали раздельные
  else if (isMobile && options?.mobileOffset !== undefined) {
    offset = options.mobileOffset;
  } else if (!isMobile && options?.desktopOffset !== undefined) {
    offset = options.desktopOffset;
  }
  // 3. иначе берем дефолт
  else {
    offset = isMobile ? DEFAULT_OFFSETS.mobile : DEFAULT_OFFSETS.desktop;
  }

  const top = element.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top,
    behavior: "smooth",
  });

  window.history.replaceState(null, "", `#${id}`);
}

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  window.history.replaceState(null, "", "#top");
}
