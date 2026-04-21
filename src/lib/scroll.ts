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

  let offset = 0;

  if (options?.offset !== undefined) {
    offset = options.offset;
  } else if (isMobile && options?.mobileOffset !== undefined) {
    offset = options.mobileOffset;
  } else if (!isMobile && options?.desktopOffset !== undefined) {
    offset = options.desktopOffset;
  } else {
    offset = isMobile ? 32 : 48;
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
