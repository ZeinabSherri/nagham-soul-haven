
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

  // Mobile detection
  const isMobile = window.innerWidth < 768;
  
  // Calculate offset - use CSS scroll-margin-top approach for consistency
  // The titles have scroll-mt-32 (128px), so we ensure proper alignment
  const scrollOffset = isMobile ? actualHeaderHeight + 10 : actualHeaderHeight + 5;
  
  console.log(`${isMobile ? 'Mobile' : 'Desktop'} scroll to ${sectionId} with offset: ${scrollOffset}px`);

  // Close mobile menu if open
  if (isMobile) {
    const mobileMenuButtons = document.querySelectorAll('[aria-label="Close menu"], [aria-label="Open menu"]');
    mobileMenuButtons.forEach(button => {
      const buttonElement = button as HTMLElement;
      if (buttonElement.getAttribute('aria-label') === 'Close menu') {
        buttonElement.click();
      }
    });
  }

  // Calculate target position
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const targetPosition = elementPosition - scrollOffset;

  // Add delay for mobile menu closing
  const scrollDelay = isMobile ? 300 : 50;

  setTimeout(() => {
    // Primary scroll action
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

    // Correction mechanism - ensure perfect alignment
    setTimeout(() => {
      const currentScroll = window.pageYOffset;
      const scrollDifference = Math.abs(currentScroll - targetPosition);
      
      console.log(`Post-scroll check: current=${currentScroll}, target=${targetPosition}, difference=${scrollDifference}`);
      
      // Apply correction if needed (tolerance of 10px)
      if (scrollDifference > 10) {
        console.log(`Applying scroll correction for ${sectionId}`);
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }, isMobile ? 600 : 400);
  }, scrollDelay);

  console.log(`Initiated scroll to ${sectionId} at position: ${targetPosition}`);
};

// Initialize scroll behavior for the application
export const initializeScrollBehavior = () => {
  console.log('Initializing enhanced scroll behavior for perfect navigation');
  
  // Handle all navigation clicks with data-scroll-to attribute
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    
    // Check if clicked element or its parent has scroll target
    const scrollTarget = target.getAttribute('data-scroll-to') || 
                        (target.closest('[data-scroll-to]') as HTMLElement)?.getAttribute('data-scroll-to');
    
    if (scrollTarget) {
      console.log(`Navigation click detected for: ${scrollTarget}`);
      event.preventDefault();
      scrollToSection(scrollTarget);
    }
  }, { passive: false });

  // Enhanced mobile touch handling
  let touchStartY = 0;
  let touchStartTime = 0;
  
  document.addEventListener('touchstart', (event) => {
    touchStartY = event.touches[0].clientY;
    touchStartTime = Date.now();
  }, { passive: true });

  document.addEventListener('touchend', (event) => {
    const touchEndY = event.changedTouches[0].clientY;
    const touchEndTime = Date.now();
    const touchDistance = Math.abs(touchEndY - touchStartY);
    const touchDuration = touchEndTime - touchStartTime;
    
    // Detect tap vs swipe (short distance and duration = tap)
    if (touchDistance < 15 && touchDuration < 200) {
      const target = event.target as HTMLElement;
      const button = target.closest('button[data-scroll-to]');
      
      if (button) {
        const scrollTarget = button.getAttribute('data-scroll-to');
        if (scrollTarget) {
          event.preventDefault();
          scrollToSection(scrollTarget);
        }
      }
    }
  }, { passive: false });

  console.log('Enhanced scroll behavior initialized successfully');
};
