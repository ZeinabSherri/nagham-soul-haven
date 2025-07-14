
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
  
  // Mobile-optimized scrolling with better performance
  const isMobile = window.innerWidth < 768;
  const targetPosition = elementPosition - customOffset;
  
  if (isMobile) {
    // Use a more immediate scroll for mobile to prevent iOS scroll issues
    console.log('Mobile device detected: Using optimized scroll behavior');
    
    // Disable scroll restoration temporarily on mobile
    if ('scrollRestoration' in history) {
      const originalScrollRestoration = history.scrollRestoration;
      history.scrollRestoration = 'manual';
      
      setTimeout(() => {
        history.scrollRestoration = originalScrollRestoration;
      }, 1000);
    }
    
    // Use requestAnimationFrame for smoother mobile scrolling
    requestAnimationFrame(() => {
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  } else {
    // Standard desktop scrolling
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    // Fallback correction after a brief delay to ensure proper positioning
    setTimeout(() => {
      const currentScroll = window.pageYOffset;
      const scrollDifference = Math.abs(currentScroll - targetPosition);
      
      console.log(`Post-scroll check: current=${currentScroll}, target=${targetPosition}, difference=${scrollDifference}`);
      
      // Apply correction if the scroll position is significantly off
      if (scrollDifference > 10) {
        console.log(`Applying scroll correction for ${sectionId}`);
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }, 300);
  }

  console.log(`Scrolled to position: ${targetPosition}`);
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
