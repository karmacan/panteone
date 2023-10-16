import React, {memo} from 'react';
import {motion} from 'framer-motion';

export const AnimateParagraph = memo(({className = '', style, lines = [], doShow = true}) => {
  return (
    <motion.div
      className={`${className}`}
      style={style}
      variants={{hide: {}, show: {}}}
      initial='hide'
      animate={doShow ? 'show' : 'hide'}
      transition={{
        staggerChildren: 0.08,
      }}
    >
      {lines.map((line, i) => (
        <div className='line' style={{display: 'flex', gap: '12px'}}>
          {line.split(' ').map((part, j) => {
            const doBold = i !== lines.length - 1 && j !== line.split(' ').length - 1;

            return (
              <motion.div
                key={`${part}-${i}`}
                className={doBold && 'bold'}
                variants={{
                  hide: {opacity: 0, y: '100%'},
                  show: {opacity: 1, y: 0},
                }}
                transition={{type: 'tween'}}
              >
                {part + ' '}
              </motion.div>
            );
          })}
          {i !== lines.length - 1 ? <br /> : null}
        </div>
      ))}
    </motion.div>
  );
});
