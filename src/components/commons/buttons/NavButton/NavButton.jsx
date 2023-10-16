import React, {memo} from 'react';
import styles from './NavButton.module.scss';

export const NavButton = memo(({className = '', style, onClick}) => {
  return (
    <div className={`${styles.nav_button} ${className}`} style={style} onClick={onClick}>
      <div className={styles.top} />
      <div className={styles.bottom} />
    </div>
  );
});
