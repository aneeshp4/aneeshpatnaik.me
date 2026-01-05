import { motion } from 'motion/react';
import { useScopeScroll } from '@/hooks/useScopeScroll';

export const ScopeOverlay = () => {
  const { circleRadius, overlayOpacity } = useScopeScroll();

  return (
    <motion.div
      className='fixed inset-0 pointer-events-none scope-hero'
      style={{
        opacity: overlayOpacity,
        zIndex: 50,
      }}
    >
      <svg
        className='absolute inset-0 w-full h-full'
        style={{ display: 'block' }}
      >
        <defs>
          <mask id='scope-mask'>
            {/* White everywhere = show the black */}
            <rect width='100%' height='100%' fill='white' />
            {/* Black circle = hide the black, creating cutout */}
            <motion.circle
              cx='50%'
              cy='50%'
              r={circleRadius}
              fill='black'
            />
          </mask>
        </defs>
        {/* Black rectangle with mask applied */}
        <rect
          width='100%'
          height='100%'
          fill='#000000'
          mask='url(#scope-mask)'
        />
      </svg>
    </motion.div>
  );
};
