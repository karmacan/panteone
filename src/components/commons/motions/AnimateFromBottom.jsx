import React, {memo, useRef} from 'react';
import {motion} from 'framer-motion';

export const AnimateFromBottom = memo(
  ({className = '', style, children, duration = 0.8, delay, onAnimationComplete}) => {
    const motionRef = useRef(null),
      {current: motionElem} = motionRef;

    return (
      <motion.div
        className={`${className}`}
        style={style}
        ref={motionRef}
        initial={{y: '100%'}}
        animate={{y: 0}}
        transition={{duration, delay}}
        onAnimationComplete={props => onAnimationComplete?.({target: motionElem, ...props})}
      >
        {children}
      </motion.div>
    );
  }
);
