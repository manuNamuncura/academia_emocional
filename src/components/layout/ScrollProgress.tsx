import { useScrollProgress } from "../../hooks/useScrollProgress";

const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div
      id="scroll-progress"
      className="fixed top-0 left-0 h-1 z-100 bg-linear-to-r from-peach-300 via-sage-300 to-peach-300 bg-size-[200%_100%]"
      style={{ width: `${progress}%` }}
    />
  );
};

export default ScrollProgress;
