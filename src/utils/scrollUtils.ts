// scrollUtils.ts (REPLACEMENT CODE)

export const scrollToSection = (sectionId: string, offset: number = 0) => {
  const element = document.getElementById(sectionId);
  if (!element) return;

  // Calculate the element's position relative to the document
  const header = document.querySelector('nav');
  const headerHeight = header ? header.offsetHeight : 0;

  // scrollMarginTop on title in JSX will do the rest for responsiveness
  // We only use header height here, no extra space.
  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight - offset;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
};
