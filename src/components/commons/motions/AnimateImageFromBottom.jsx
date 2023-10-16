import React, {memo, useRef, useState} from 'react';
import {motion} from 'framer-motion';

export const AnimateImageFromBottom = memo(
  ({className = '', style, children, src = '', type = 'tween', duration = .6, ease = 'circOut'}) => {
    const [state, setState] = useState('hide');
    const motionRef = useRef(null),
      {current: motionElem} = motionRef;

    const handleAnimationComplete = type => {
      if (!motionElem) return;

      // Toggle opacity of img during 'exit' and 'hide'
      if (type === 'exit') {
        motionElem.style.opacity = 0;
        setState('hide');
      } else if (type === 'hide') {
        motionElem.style.opacity = 1;
      }
    };

    return (
      <div
        className={`${className}`}
        style={{overflow: 'hidden', position: 'relative', zIndex: 100, ...style}}
        onMouseEnter={() => setState('show')}
        onMouseLeave={() => setState('exit')}
        onMouseMove={() => state !== 'show' && setState('show')}
      >
        {children}
        <motion.div
          style={{overflow: 'hidden', position: 'absolute', height: '100%'}}
          variants={{
            hide: {y: 0},
            show: {y: '-100%'},
            exit: {y: '-200%'},
          }}
          initial={'hide'}
          animate={state}
          transition={{
            type,
            duration,
            ease
          }}
          onAnimationComplete={handleAnimationComplete}
        >
          <img ref={motionRef} alt='bottom' src={src} />
        </motion.div>
      </div>
    );
  }
);
