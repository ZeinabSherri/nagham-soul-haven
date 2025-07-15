export const scrollToSection = (titleId: string) => {
  console.log(`Attempting to scroll to title: ${titleId}`);
  
  const element = document.getElementById(titleId);
  if (!element) {
    console.warn(`Element with ID "${titleId}" not found`);
    return;
  }

  const isMobile = window.innerWidth <= 767;
  console.log(`Device type: ${isMobile ? 'Mobile' : 'Desktop'}`);

  if (isMobile) {
    console.log('Mobile device: Positioning title directly below navbar with precise calculation');
    
    // Get the actual mobile navbar height dynamically at scroll time
    const navbar = document.querySelector('nav');
    const actualNavbarHeight = navbar ? navbar.offsetHeight : 100;
    
    // Add a small visual margin below the navbar for balance (matching desktop spacing)
    const visualMargin = 12;
    const totalOffset = actualNavbarHeight + visualMargin;
    
    console.log(`Mobile: Dynamic navbar height: ${actualNavbarHeight}px, total offset: ${totalOffset}px`);
    
    // Calculate the exact scroll position needed
    const elementRect = element.getBoundingClientRect();
    const currentScrollY = window.pageYOffset;
    const elementTop = elementRect.top + currentScrollY;
    const targetScrollPosition = elementTop - totalOffset;
    
    console.log(`Mobile: Element absolute top: ${elementTop}px, target scroll: ${targetScrollPosition}px`);
    
    // Perform the initial scroll
    window.scrollTo({
      top: Math.max(0, targetScrollPosition), // Ensure we don't scroll negative
      behavior: 'smooth'
    });
    
    // Apply precision correction after scroll animation completes
    setTimeout(() => {
      const newRect = element.getBoundingClientRect();
      const actualDistanceFromTop = newRect.top;
      const expectedDistance = totalOffset;
      
      console.log(`Mobile verification: Element is ${actualDistanceFromTop.toFixed(1)}px from top (expected: ${expectedDistance}px)`);
      
      // Apply correction if there's a significant difference (more than 2px)
      if (Math.abs(actualDistanceFromTop - expectedDistance) > 2) {
        const correction = actualDistanceFromTop - expectedDistance;
        const correctedScrollY = window.pageYOffset + correction;
        
        console.log(`Mobile: Applying precision correction: ${correction.toFixed(1)}px, final scroll: ${correctedScrollY}px`);
        
        window.scrollTo({
          top: Math.max(0, correctedScrollY),
          behavior: 'auto' // Instant correction for precision
        });
        
        // Final verification log
        setTimeout(() => {
          const finalRect = element.getBoundingClientRect();
          console.log(`Mobile: Final position verified: ${finalRect.top.toFixed(1)}px from top`);
        }, 50);
      } else {
        console.log('Mobile: Scroll position is accurate, no correction needed');
      }
    }, 800); // Wait for smooth scroll animation to complete
    
  } else {
    // Desktop behavior - keep exactly as it was (DO NOT CHANGE)
    console.log('Desktop: Using existing perfect scroll logic');
    
    const header = document.querySelector('nav');
    const actualHeaderHeight = header ? header.offsetHeight : 120;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const targetPosition = elementPosition - actualHeaderHeight;
    
    console.log(`Desktop: Header height: ${actualHeaderHeight}px, scrolling to position ${targetPosition}px`);
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

    // Desktop fallback correction (keep existing logic unchanged)
    setTimeout(() => {
      const currentScroll = window.pageYOffset;
      const scrollDifference = Math.abs(currentScroll - targetPosition);
      
      if (scrollDifference > 5) {
        console.log(`Desktop: Applying scroll correction`);
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }, 500);
  }

  console.log(`Scroll initiated for ${titleId}`);
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

  // Enhanced touch event handling for better mobile experience
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
