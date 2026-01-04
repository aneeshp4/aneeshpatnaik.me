import { useScroll, useTransform, MotionValue } from 'motion/react';
import { useRef } from 'react';

interface ScrollProgressReturn {
  scrollYProgress: MotionValue<number>;
  scale: MotionValue<number>;
  opacity: MotionValue<number>;
}

export const useScrollProgress = (
  startScale: number = 2.5,
  endScale: number = 1,
  scrollEnd: number = 0.3
): ScrollProgressReturn => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const scale = useTransform(
    scrollYProgress,
    [0, scrollEnd],
    [startScale, endScale]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, scrollEnd / 2, scrollEnd],
    [0.5, 0.8, 1]
  );

  return { scrollYProgress, scale, opacity };
};

export const useScrollScale = () => {
  const { scrollYProgress } = useScroll();
  
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [0.95, 1]
  );

  return { scrollYProgress, scale };
};

