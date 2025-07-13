import { useEffect, useState, useRef } from 'react';

export const useIntersectionObserver = (options) => {
  const [element, setElement] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const observer = useRef(null);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.current.unobserve(entry.target);
      }
    }, options);

    if (element) {
      observer.current.observe(element);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [element, options]);

  return [setElement, isVisible];
};