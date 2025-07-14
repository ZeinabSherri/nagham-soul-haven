export const scrollToSection = (titleId: string) => {
  console.log(`Attempting to scroll to title: ${titleId}`);
  
  const element = document.getElementById(titleId);
  if (!element) {
    console.warn(`Element with ID "${titleId}" not found`);
    return;
  }

  // Mobile-specific offset calculation for precise positioning
  const isMobile = window.innerWidth < 768;
  console.log(`Device type: ${isMobile ? 'Mobile' : 'Desktop'}`);

  if (isMobile) {
    console.log('Mobile device: Using scrollIntoView for perfect top alignment');
    
    // Get header height for mobile offset calculation
    const header = document.querySelector('nav');
    const headerHeight = header ? header.offsetHeight : 100;
    console.log(`Mobile header height: ${headerHeight}px`);
    
    // Use scrollIntoView to get the element to the top
    element.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start',
      inline: 'nearest'
    });
    
    // Apply correction after scroll completes to account for sticky header
    setTimeout(() => {
      const elementRect = element.getBoundingClientRect();
      const currentTop = elementRect.top;
      
      console.log(`Mobile: Element top after scrollIntoView: ${currentTop}px, header height: ${headerHeight}px`);
      
      // If the element is hidden behind header or not at the perfect position
      if (Math.abs(currentTop - headerHeight) > 1) {
        const currentScroll = window.pageYOffset;
        const adjustment = currentTop - headerHeight;
        const targetScroll = currentScroll + adjustment;
        
        console.log(`Mobile: Applying correction scroll to ${targetScroll}`);
        window.scrollTo({
          top: targetScroll,
          behavior: 'auto' // Use instant for precision
        });
        
        // Final verification
        setTimeout(() => {
          const finalRect = element.getBoundingClientRect();
          const finalTop = finalRect.top;
          console.log(`Mobile: Final element position: ${finalTop}px from top`);
          
          if (Math.abs(finalTop - headerHeight) > 2) {
            const finalAdjustment = finalTop - headerHeight;
            window.scrollTo({
              top: window.pageYOffset + finalAdjustment,
              behavior: 'auto'
            });
            console.log(`Mobile: Final pixel-perfect adjustment applied`);
          }
        }, 100);
      }
    }, 600); // Wait for smooth scroll to complete
    
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
