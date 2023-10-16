import React, {memo} from 'react';
import styles from './Link.module.scss';

export const Link = memo(
  ({
    className = '',
    style,
    children,
    size = 's', // 's' | 'l'
    isInactive = true,
  }) => {
    return (
      <div
        className={`${styles.link} ${styles[`size-${size}`]} ${
          isInactive ? styles.inactive : ''
        } ${className}`}
        style={style}
      >
        {children}
      </div>
    );
  }
);
