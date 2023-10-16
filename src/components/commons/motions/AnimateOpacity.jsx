import React, {memo} from 'react';
import {motion} from 'framer-motion';

export const AnimateOpacity = memo(
  ({
    className = '',
    children,
    reanimateOn,
    doOnlyOnExit = false,
    duration = 0.2, // s
    delay = 0,
    doShow = true
  }: TMotionProps) => (
    <motion.div
      className={className}
      key={reanimateOn}
      variants={{hide: {opacity: doOnlyOnExit ? 1 : 0}, show: {opacity: 1}}}
      initial={'hide'}
      animate={doShow ? 'show' : 'hide'}
      exit={{opacity: 0}}
      transition={{duration, delay}}
    >
      {children}
    </motion.div>
  )
);


