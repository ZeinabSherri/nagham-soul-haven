// src/utils/scrollUtils.ts

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (!element) return;

  // Scroll so the heading is exactly at the top
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;

  window.scrollTo({
    top: elementPosition,
    behavior: 'smooth'
  });

  // Fallback correction (some browsers need a second scroll)
  setTimeout(() => {
    const currentScroll = window.pageYOffset;
    if (Math.abs(currentScroll - elementPosition) > 10) {
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  }, 400);
};
