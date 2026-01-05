import { useScroll, useTransform, MotionValue } from 'motion/react';

interface ScopeScrollReturn {
  scrollYProgress: MotionValue<number>;
  circleRadius: MotionValue<number>;
  overlayOpacity: MotionValue<number>;
  sectionsOpacity: MotionValue<number>;
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

  // Fade in sections right as intro fades out
  const sectionsOpacity = useTransform(
    scrollYProgress,
    [0.03, 0.08],
    [0, 1]
  );

  return {
    scrollYProgress,
    circleRadius,
    overlayOpacity,
    sectionsOpacity
  };
};
