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

  const DEFAULT_OFFSETS = {
    mobile: 32,
    desktop: 10,
  };

  let offset = 0;

  if (options?.offset !== undefined) {
    offset = options.offset;
  } else if (isMobile && options?.mobileOffset !== undefined) {
    offset = options.mobileOffset;
  } else if (!isMobile && options?.desktopOffset !== undefined) {
    offset = options.desktopOffset;
  } else {
    offset = isMobile ? DEFAULT_OFFSETS.mobile : DEFAULT_OFFSETS.desktop;
  }

  if (!isMobile && id === "projekte") {
    offset -= 40;
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

export function navigateToSection(id: string) {
  if (typeof window === "undefined") return;

  if (window.location.pathname !== "/") {
    window.location.href = `/#${id}`;
    return;
  }

  scrollToSection(id);
}

export function navigateToHome() {
  if (typeof window === "undefined") return;

  if (window.location.pathname !== "/") {
    window.location.href = "/";
    return;
  }

  scrollToTop();
}
export function handleHashScroll() {
  if (typeof window === "undefined") return;

  const hash = window.location.hash;
  if (!hash) return;

  const id = hash.replace("#", "");

  // ждём пока DOM загрузится
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      scrollToSection(id);
    });
  });
}
