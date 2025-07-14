
export const scrollToSection = (sectionId: string) => {
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

  // Calculate precise offset for perfect title positioning
  const offset = actualHeaderHeight + 8; // Small buffer for perfect alignment
  
  console.log(`Scrolling to ${sectionId} with offset: ${offset}px`);

  // Mobile-optimized scrolling with enhanced menu handling
  const isMobile = window.innerWidth < 768;
  
  // Calculate the element's position relative to the document
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const targetPosition = elementPosition - offset;
  
  // Add delay for mobile to ensure menu closes first
  const scrollDelay = isMobile ? 100 : 0;
  
  setTimeout(() => {
    // Disable scroll restoration temporarily for smoother navigation
    if ('scrollRestoration' in history) {
      const originalScrollRestoration = history.scrollRestoration;
      history.scrollRestoration = 'manual';
      
      setTimeout(() => {
        history.scrollRestoration = originalScrollRestoration;
      }, 1000);
    }
    
    // Primary scroll action
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
    
    // Correction mechanism to ensure perfect positioning
    setTimeout(() => {
      const currentScroll = window.pageYOffset;
      const scrollDifference = Math.abs(currentScroll - targetPosition);
      
      console.log(`Post-scroll check: current=${currentScroll}, target=${targetPosition}, difference=${scrollDifference}`);
      
      // Apply correction if the scroll position is off by more than 5px
      if (scrollDifference > 5) {
        console.log(`Applying scroll correction for ${sectionId}`);
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }, isMobile ? 600 : 400);
    
  }, scrollDelay);

  console.log(`Scrolled to position: ${targetPosition}`);
};

// Enhanced global handler for all internal anchor links
export const initializeScrollBehavior = () => {
  console.log('Initializing enhanced scroll behavior');
  
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

  // Enhanced touch event handling for mobile
  let touchStartY = 0;
  
  document.addEventListener('touchstart', (event) => {
    touchStartY = event.touches[0].clientY;
  }, { passive: true });

  document.addEventListener('touchend', (event) => {
    const touchEndY = event.changedTouches[0].clientY;
    const touchDistance = Math.abs(touchEndY - touchStartY);
    
    // If it's a tap (short distance), ensure smooth scrolling works
    if (touchDistance < 10) {
      const target = event.target as HTMLElement;
      const button = target.closest('button');
      
      if (button && button.onclick) {
        event.preventDefault();
        button.click();
      }
    }
  }, { passive: false });
};
