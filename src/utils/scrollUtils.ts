
export const scrollToSection = (sectionId: string, offset: number = 120) => {
  console.log(`Attempting to scroll to section: ${sectionId}`);
  
  const element = document.getElementById(sectionId);
  if (!element) {
    console.warn(`Element with ID "${sectionId}" not found`);
    return;
  }

  // Apply custom offset for specific sections that need precise title visibility
  let customOffset = offset;
  if (sectionId === 'services-title' || sectionId === 'certifications-title' || sectionId === 'get-in-touch-title') {
    customOffset = 140; // Extra offset for these specific sections to ensure titles are fully visible
  }

  // Calculate the element's position relative to the document
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  console.log(`Element position: ${elementPosition}, offset: ${customOffset}`);
  
  // Subtract the offset to account for fixed header
  const offsetPosition = elementPosition - customOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
  
  console.log(`Scrolled to position: ${offsetPosition}`);
};

// Global handler for all internal anchor links
export const initializeScrollBehavior = () => {
  console.log('Initializing scroll behavior');
  
  // Handle all anchor links that start with #
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    
    // Check if the clicked element is a link or button with data-scroll-to attribute
    const scrollTarget = target.getAttribute('data-scroll-to') || 
                        (target.closest('[data-scroll-to]') as HTMLElement)?.getAttribute('data-scroll-to');
    
    if (scrollTarget) {
      console.log(`Global scroll handler triggered for: ${scrollTarget}`);
      event.preventDefault();
      scrollToSection(scrollTarget);
    }
  });
};
