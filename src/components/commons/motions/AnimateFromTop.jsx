import React, {memo} from 'react';
import {motion} from 'framer-motion';

export const AnimateFromTop = memo(
  ({className = '', style, children, isHidden = false, duration = 0.8, ease="circIn"}) => {
    return (
      <motion.div
        className={`${className}`}
        style={style}
        variants={{
          hide: {
            y: '-100%',
          },
          show: {
            y: 0,
          },
        }}
        initial={'hide'}
        animate={isHidden ? 'hide' : 'show'}
        transition={{
          type: 'tween',
          duration,
          ease
        }}
      >
        {children}
      </motion.div>
    );
  }
);
