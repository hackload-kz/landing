import { useEffect, useState, useRef } from 'react';

export const useScrollAnimation = (options = { threshold: 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      { threshold: options.threshold }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options.threshold]);

  return { isVisible, elementRef };
};

export const fadeInAnimation = (isVisible: boolean) => 
  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';

export const scaleInAnimation = (isVisible: boolean) => 
  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95';

// Do nothing, since it introduce white gap on the right side on mobile devices
export const slideInFromRightAnimation = (isVisible: boolean) => 
  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-0';

export const slideInFromLeftAnimation = (isVisible: boolean) => 
  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-0';