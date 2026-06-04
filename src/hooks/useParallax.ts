import { useEffect, useRef, useState } from "react";

export const useParallax = (
  speed: number = 0.35,
  scaleSpeed: number = 0.25,
) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [heroHeight, setHeroHeight] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const updateHeroHeight = () => {
      if (containerRef.current) {
        setHeroHeight(containerRef.current.offsetHeight);
      }
    };

    updateHeroHeight();
    window.addEventListener("resize", updateHeroHeight);

    const handleScroll = () => {
      if (!containerRef.current || !imageRef.current) return;

      const scrollY = window.scrollY;

      if (scrollY <= heroHeight) {
        const progress = scrollY / heroHeight;
        const scale = 1.05 + progress * scaleSpeed;
        const translateY = scrollY * speed;

        containerRef.current!.style.transform = `translateY(${translateY}px)`;
        imageRef.current!.style.transform = `scale(${scale})`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", updateHeroHeight);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed, scaleSpeed, heroHeight]);

  return { containerRef, imageRef };
};
