import React, {memo} from 'react';
import {motion} from 'framer-motion';

export const AnimateDarken = memo(
  ({className = '', style, children, originalBackground = '#fff', isHidden = false}) => {
    return (
      <motion.div
        className={`${className}`}
        style={style}
        variants={{
          show: {
            filter: 'brightness(100%)',
            background: originalBackground
          },
          hide: {
            filter: 'brightness(50%)',
            background: '#ccc'
          },
        }}
        initial={'hide'}
        animate={isHidden ? 'hide' : 'show'}
      >
        {children}
      </motion.div>
    );
  }
);
