
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
    console.log('Mobile device: Positioning title at top of viewport');
    
    // Get the mobile navigation header
    const header = document.querySelector('nav');
    const headerHeight = header ? header.offsetHeight : 0;
    
    // Calculate the exact position to place the title just below the header
    const elementRect = element.getBoundingClientRect();
    const currentScrollY = window.pageYOffset;
    const elementTop = elementRect.top + currentScrollY;
    const targetPosition = elementTop - headerHeight;
    
    console.log(`Mobile: Header height: ${headerHeight}px, Element top: ${elementTop}px, Target scroll: ${targetPosition}px`);
    
    // Scroll to position the title just below the mobile header
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
    
    // Precision correction after scroll completes
    setTimeout(() => {
      const newRect = element.getBoundingClientRect();
      const actualDistanceFromTop = newRect.top;
      const expectedDistanceFromTop = headerHeight;
      
      console.log(`Mobile verification: Element is ${actualDistanceFromTop}px from top, should be ${expectedDistanceFromTop}px`);
      
      // If not positioned correctly (allowing 5px tolerance), apply correction
      if (Math.abs(actualDistanceFromTop - expectedDistanceFromTop) > 5) {
        const correction = actualDistanceFromTop - expectedDistanceFromTop;
        const correctedScrollY = window.pageYOffset + correction;
        
        console.log(`Mobile: Applying correction: ${correction}px, new scroll: ${correctedScrollY}px`);
        
        window.scrollTo({
          top: correctedScrollY,
          behavior: 'auto'
        });
        
        // Final verification
        setTimeout(() => {
          const finalRect = element.getBoundingClientRect();
          console.log(`Mobile: Final position: ${finalRect.top}px from top (target: ${headerHeight}px)`);
        }, 50);
      }
    }, 700);
    
  } else {
    // Desktop behavior remains unchanged - it's already perfect
    const header = document.querySelector('nav');
    const actualHeaderHeight = header ? header.offsetHeight : 120;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const targetPosition = elementPosition - actualHeaderHeight;
    
    console.log(`Desktop: Scrolling to position ${targetPosition}`);
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

    // Desktop fallback correction (unchanged)
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
