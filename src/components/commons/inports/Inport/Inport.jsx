import React, {memo} from 'react';
import styles from './Inport.module.scss';

export const Inport = memo(({
  className = '',
  style,
  
}) => {
  return (
    <div
      className={`${styles.inport} ${className}`}
      style={style}
    >
      <input type="text" />
      <i class="fa fa-arrow-right"></i>
    </div>
  );
});