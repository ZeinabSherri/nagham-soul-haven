
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
  
  // Perfect alignment: title at the very top of viewport (just below header)
  const targetPosition = elementPosition - actualHeaderHeight;
  
  console.log(`Element position: ${elementPosition}, target: ${targetPosition}`);
  
  // Mobile-optimized scrolling with enhanced menu handling
  const isMobile = window.innerWidth < 768;
  
  // Add delay for mobile to ensure menu closes first
  const scrollDelay = isMobile ? 250 : 50;
  
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
        
        // Additional verification for mobile to ensure perfect positioning
        setTimeout(() => {
          const currentScroll = window.pageYOffset;
          const scrollDifference = Math.abs(currentScroll - targetPosition);
          
          if (scrollDifference > 10) {
            console.log(`Mobile: Applying final position correction for ${titleId}`);
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }, 400);
      });
    } else {
      // Desktop scrolling with precise positioning
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      // Enhanced fallback correction for desktop
      setTimeout(() => {
        const currentScroll = window.pageYOffset;
        const scrollDifference = Math.abs(currentScroll - targetPosition);
        
        console.log(`Desktop post-scroll check: current=${currentScroll}, target=${targetPosition}, difference=${scrollDifference}`);
        
        // Apply correction if the scroll position is off
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
