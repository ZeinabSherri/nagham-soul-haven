
// src/utils/scrollUtils.ts

export const scrollToSection = (titleId: string) => {
  console.log(`Attempting to scroll to title: ${titleId}`);

  const element = document.getElementById(titleId);
  if (!element) {
    console.warn(`Element with ID "${titleId}" not found`);
    return;
  }

  // Default header height (desktop)
  let headerHeight = 120;
  // Use nav height if found
  const nav = document.querySelector('nav');
  if (nav) headerHeight = nav.clientHeight;

  // Mobile: set to 64px or your actual mobile header height
  const isMobile = window.innerWidth < 768;
  if (isMobile) {
    headerHeight = 64; // Adjust if your mobile nav/header is different!
  }

  // Set scroll margin for smooth anchor positioning
  element.style.scrollMarginTop = `${headerHeight}px`;

  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
