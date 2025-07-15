
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
    console.log('Mobile device: Positioning title directly below navbar with balanced margin');
    
    // Get the actual mobile navbar height dynamically
    const navbar = document.querySelector('nav');
    const actualNavbarHeight = navbar ? navbar.offsetHeight : 100;
    
    // Add a small visual margin below the navbar (8px for balance)
    const visualMargin = 8;
    const totalOffset = actualNavbarHeight + visualMargin;
    
    console.log(`Mobile: Navbar height: ${actualNavbarHeight}px, total offset: ${totalOffset}px`);
    
    // Calculate the exact scroll position
    const elementRect = element.getBoundingClientRect();
    const currentScrollY = window.pageYOffset;
    const elementTop = elementRect.top + currentScrollY;
    const targetScrollPosition = elementTop - totalOffset;
    
    console.log(`Mobile: Element absolute top: ${elementTop}px, scrolling to: ${targetScrollPosition}px`);
    
    // Scroll to the calculated position
    window.scrollTo({
      top: targetScrollPosition,
      behavior: 'smooth'
    });
    
    // Precision correction after scroll completes
    setTimeout(() => {
      const newRect = element.getBoundingClientRect();
      const actualDistanceFromTop = newRect.top;
      const expectedDistance = totalOffset;
      
      console.log(`Mobile verification: Element is ${actualDistanceFromTop}px from top (expected: ${expectedDistance}px)`);
      
      // If there's a significant difference, apply correction
      if (Math.abs(actualDistanceFromTop - expectedDistance) > 3) {
        const correction = actualDistanceFromTop - expectedDistance;
        const correctedScrollY = window.pageYOffset + correction;
        
        console.log(`Mobile: Applying precision correction: ${correction}px, new scroll: ${correctedScrollY}px`);
        
        window.scrollTo({
          top: correctedScrollY,
          behavior: 'auto' // Instant for precision
        });
        
        // Final verification
        setTimeout(() => {
          const finalRect = element.getBoundingClientRect();
          console.log(`Mobile: Final position: ${finalRect.top}px from top (target: ${expectedDistance}px)`);
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
