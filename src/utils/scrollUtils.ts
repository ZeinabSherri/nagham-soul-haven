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

  // Apply custom offset for section titles to ensure they're visible
  let customOffset = actualHeaderHeight + 30; // Add 30px padding for better visibility
  
  // Special handling for section titles to ensure proper positioning
  if (sectionId.includes('-section') || sectionId === 'consulting') {
    customOffset = actualHeaderHeight + 40; // Extra padding for section titles
    console.log(`Using enhanced offset of ${customOffset}px for section title: ${sectionId}`);
  }

  // Calculate the element's position relative to the document
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  console.log(`Element position: ${elementPosition}, offset: ${customOffset}`);
  
  // Mobile-optimized scrolling with enhanced menu handling
  const isMobile = window.innerWidth < 768;
  const targetPosition = elementPosition - customOffset;
  
  // Add delay for mobile to ensure menu closes first and smooth navigation
  const scrollDelay = isMobile ? 200 : 50;
  
  setTimeout(() => {
    if (isMobile) {
      // Enhanced mobile scroll behavior for better section title targeting
      console.log('Mobile device detected: Using optimized scroll behavior for section titles');
      
      // Disable scroll restoration temporarily on mobile
      if ('scrollRestoration' in history) {
        const originalScrollRestoration = history.scrollRestoration;
        history.scrollRestoration = 'manual';
        
        setTimeout(() => {
          history.scrollRestoration = originalScrollRestoration;
        }, 1000);
      }
      
      // Use requestAnimationFrame for smoother mobile scrolling to section titles
      requestAnimationFrame(() => {
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Additional verification for mobile to ensure section title is visible
        setTimeout(() => {
          const currentScroll = window.pageYOffset;
          const scrollDifference = Math.abs(currentScroll - targetPosition);
          
          if (scrollDifference > 15) {
            console.log(`Mobile: Applying final position correction for section title ${sectionId}`);
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }, 300);
      });
    } else {
      // Desktop scrolling with section title focus
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Enhanced fallback correction for section titles
      setTimeout(() => {
        const currentScroll = window.pageYOffset;
        const scrollDifference = Math.abs(currentScroll - targetPosition);
        
        console.log(`Desktop post-scroll check: current=${currentScroll}, target=${targetPosition}, difference=${scrollDifference}`);
        
        // Apply correction if the scroll position is off
        if (scrollDifference > 10) {
          console.log(`Desktop: Applying scroll correction for section title ${sectionId}`);
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }, 400);
    }
  }, scrollDelay);

  console.log(`Scrolled to section title position: ${targetPosition}`);
};

// Enhanced global handler for all internal anchor links with mobile optimization
export const initializeScrollBehavior = () => {
  console.log('Initializing scroll behavior with mobile optimization');
  
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

  // Add touch event handling for better mobile experience
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
