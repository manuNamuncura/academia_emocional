import { useEffect, useRef, useCallback } from "react";

export const useScrollAnimation = () => {
  const elementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    const currentElements = elementsRef.current;
    currentElements.forEach((el) => el && observer.observe(el));

    return () => {
      currentElements.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  const registerElement = useCallback((element: HTMLElement | null) => {
    if (element && !elementsRef.current.includes(element)) {
      elementsRef.current.push(element);
      element.classList.add("fade-in");
    }
  }, []);

  return { registerElement };
};
