import { useScroll, useTransform, MotionValue } from 'motion/react';

interface ScopeScrollReturn {
  scrollYProgress: MotionValue<number>;
  circleRadius: MotionValue<number>;
  overlayOpacity: MotionValue<number>;
}

export const useScopeScroll = (): ScopeScrollReturn => {
  // Track window scroll (not a specific container)
  const { scrollYProgress } = useScroll();

  // Transform scroll progress to circle radius in pixels
  // Start at 350 and expand to 3000 (large enough to cover any viewport)
  const circleRadius = useTransform(
    scrollYProgress,
    [0, 0.15],
    [350, 3000]
  );

  // Fade out the overlay once circle is large enough
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0.12, 0.15],
    [1, 0]
  );

  return {
    scrollYProgress,
    circleRadius,
    overlayOpacity
  };
};
