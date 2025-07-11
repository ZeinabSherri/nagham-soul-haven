
export const scrollToSection = (sectionId: string, offset: number = 120) => {
  console.log(`Attempting to scroll to section: ${sectionId}`);
  
  const element = document.getElementById(sectionId);
  if (!element) {
    console.warn(`Element with ID "${sectionId}" not found`);
    return;
  }

  // Get actual header height for precise calculations
  const header = document.querySelector('nav');
  const actualHeaderHeight = header ? header.offsetHeight : 120;
  console.log(`Actual header height: ${actualHeaderHeight}px`);

  // Apply custom offset for specific sections that need precise title visibility
  let customOffset = actualHeaderHeight + 20; // Add 20px padding
  if (sectionId === 'services-title' || sectionId === 'certifications-title' || sectionId === 'get-in-touch-title') {
    customOffset = actualHeaderHeight + 20; // Consistent offset for these critical sections
    console.log(`Using enhanced offset of ${customOffset}px for critical section: ${sectionId}`);
  }

  // Calculate the element's position relative to the document
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  console.log(`Element position: ${elementPosition}, offset: ${customOffset}`);
  
  // Subtract the offset to account for fixed header
  const offsetPosition = elementPosition - customOffset;

  // First attempt: Use native browser scrolling with CSS scroll-margin-top
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });

  // Fallback correction after a brief delay to ensure proper positioning
  setTimeout(() => {
    const currentScroll = window.pageYOffset;
    const targetScroll = elementPosition - customOffset;
    const scrollDifference = Math.abs(currentScroll - targetScroll);
    
    console.log(`Post-scroll check: current=${currentScroll}, target=${targetScroll}, difference=${scrollDifference}`);
    
    // Apply correction if the scroll position is significantly off
    if (scrollDifference > 10) {
      console.log(`Applying scroll correction for ${sectionId}`);
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    }
  }, 300); // Allow time for initial scroll to complete

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
