
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
    console.log('Mobile device: Positioning title with compact margin below navbar');
    
    // Dynamically get the actual mobile header height
    const header = document.querySelector('nav');
    const actualHeaderHeight = header ? header.offsetHeight : 100;
    const compactMargin = 16; // 16px visual margin for mobile
    
    // Get the current scroll position and element position
    const elementRect = element.getBoundingClientRect();
    const currentScrollY = window.pageYOffset;
    const elementTop = elementRect.top + currentScrollY;
    
    // Calculate target position: element position minus header height minus compact margin
    const targetPosition = elementTop - actualHeaderHeight - compactMargin;
    
    console.log(`Mobile: Header height: ${actualHeaderHeight}px, target position: ${targetPosition}px`);
    
    // Scroll to position the title just below the navbar with compact margin
    window.scrollTo({
      top: Math.max(0, targetPosition), // Ensure we don't scroll to negative position
      behavior: 'smooth'
    });
    
    // Precision correction after scroll completes
    setTimeout(() => {
      const newRect = element.getBoundingClientRect();
      const actualTop = newRect.top;
      const expectedTop = actualHeaderHeight + compactMargin;
      
      console.log(`Mobile verification: Element top: ${actualTop}px, expected: ${expectedTop}px`);
      
      // If the element is not in the expected position (allowing 3px tolerance), apply correction
      if (Math.abs(actualTop - expectedTop) > 3) {
        const correction = actualTop - expectedTop;
        const correctedScrollY = window.pageYOffset + correction;
        
        console.log(`Mobile: Applying precision correction: ${correction}px, new scroll: ${correctedScrollY}px`);
        
        window.scrollTo({
          top: Math.max(0, correctedScrollY),
          behavior: 'auto' // Instant for precision
        });
        
        // Final verification
        setTimeout(() => {
          const finalRect = element.getBoundingClientRect();
          console.log(`Mobile: Final position: ${finalRect.top}px from top (target: ${expectedTop}px)`);
        }, 50);
      }
    }, 700); // Wait for smooth scroll animation
    
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
