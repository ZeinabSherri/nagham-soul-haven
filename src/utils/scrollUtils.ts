export const scrollToSection = (titleId: string) => {
  console.log(`Attempting to scroll to title: ${titleId}`);
  
  const element = document.getElementById(titleId);
  if (!element) {
    console.warn(`Element with ID "${titleId}" not found`);
    return;
  }

  // Get actual header height for precise calculations
  const header = document.querySelector('nav');
  const actualHeaderHeight = header ? header.offsetHeight : 120;
  console.log(`Actual header height: ${actualHeaderHeight}px`);

  // Calculate the element's position relative to the document
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  
  // Mobile-specific offset calculation for perfect alignment
  const isMobile = window.innerWidth < 768;
  let targetPosition;
  
  if (isMobile) {
    // On mobile, add a small additional offset to ensure title is fully visible and flush at top
    // This accounts for any mobile browser UI quirks and ensures perfect positioning
    targetPosition = elementPosition - actualHeaderHeight - 2; // 2px buffer for perfect alignment
    console.log(`Mobile: Element position: ${elementPosition}, header: ${actualHeaderHeight}, target: ${targetPosition}`);
  } else {
    // Desktop positioning remains unchanged
    targetPosition = elementPosition - actualHeaderHeight;
    console.log(`Desktop: Element position: ${elementPosition}, target: ${targetPosition}`);
  }
  
  // Mobile-optimized scrolling with enhanced menu handling
  const scrollDelay = isMobile ? 300 : 50; // Slightly longer delay for mobile menu close
  
  setTimeout(() => {
    if (isMobile) {
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
        
        // Enhanced mobile verification with multiple correction attempts
        setTimeout(() => {
          const currentScroll = window.pageYOffset;
          const scrollDifference = Math.abs(currentScroll - targetPosition);
          
          if (scrollDifference > 5) {
            console.log(`Mobile: First correction for ${titleId}, difference: ${scrollDifference}px`);
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
            
            // Final verification for stubborn mobile browsers
            setTimeout(() => {
              const finalScroll = window.pageYOffset;
              const finalDifference = Math.abs(finalScroll - targetPosition);
              
              if (finalDifference > 3) {
                console.log(`Mobile: Final correction for ${titleId}`);
                window.scrollTo({
                  top: targetPosition,
                  behavior: 'auto' // Use instant scroll for final correction
                });
              }
            }, 300);
          }
        }, 500);
      });
    } else {
      // Desktop scrolling remains unchanged - it's already perfect
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      // Desktop fallback correction (unchanged)
      setTimeout(() => {
        const currentScroll = window.pageYOffset;
        const scrollDifference = Math.abs(currentScroll - targetPosition);
        
        console.log(`Desktop post-scroll check: current=${currentScroll}, target=${targetPosition}, difference=${scrollDifference}`);
        
        if (scrollDifference > 5) {
          console.log(`Desktop: Applying scroll correction for ${titleId}`);
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }, 500);
    }
  }, scrollDelay);

  console.log(`Scrolled to title position: ${targetPosition}`);
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
