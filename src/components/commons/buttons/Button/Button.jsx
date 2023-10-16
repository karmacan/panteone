import React, {memo} from 'react';
import styles from './Button.module.scss';

export const Button = memo(({className = '', style, children, mixBlendMode = ''}) => {
  return (
    <div
      className={`${styles.button} ${
        mixBlendMode === 'difference' ? styles.difference : ''
      } ${className}`}
      style={style}
    >
      {children}
    </div>
  );
});
