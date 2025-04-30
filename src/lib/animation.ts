/**
 * Animation utility functions
 * These functions are only used on the client side to prevent hydration mismatches
 */

// Function to create a marquee/auto-scroll effect
export const createMarqueeEffect = (
  containerRef: React.RefObject<HTMLElement>,
  speed: number = 1,
  direction: 'up' | 'down' = 'up'
) => {
  if (!containerRef.current) return;
  
  const container = containerRef.current;
  const scrollHeight = container.scrollHeight;
  const clientHeight = container.clientHeight;
  
  // Only scroll if content is taller than container
  if (scrollHeight <= clientHeight) return;
  
  let currentPosition = direction === 'up' ? 0 : scrollHeight - clientHeight;
  
  const scroll = () => {
    if (!containerRef.current) return;
    
    if (direction === 'up') {
      currentPosition += speed;
      if (currentPosition >= scrollHeight) {
        currentPosition = 0;
      }
    } else {
      currentPosition -= speed;
      if (currentPosition <= 0) {
        currentPosition = scrollHeight - clientHeight;
      }
    }
    
    containerRef.current.scrollTop = currentPosition;
  };
  
  return setInterval(scroll, 50);
};

// Function to create a simple fade-in effect
export const fadeIn = (element: HTMLElement, duration: number = 300) => {
  if (!element) return;
  
  element.style.opacity = '0';
  element.style.transition = `opacity ${duration}ms ease-in-out`;
  
  setTimeout(() => {
    element.style.opacity = '1';
  }, 10);
};

// Function to create a simple fade-out effect
export const fadeOut = (element: HTMLElement, duration: number = 300) => {
  if (!element) return;
  
  element.style.opacity = '1';
  element.style.transition = `opacity ${duration}ms ease-in-out`;
  
  setTimeout(() => {
    element.style.opacity = '0';
  }, 10);
};
