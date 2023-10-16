import React, {memo} from 'react';
import styles from './ClippedImage.module.scss';

export const ClippedImage = memo(({className = '', style, children, src = '', isRounded = false}) => {
  return (
    <div className={`${styles.clipped_image} ${isRounded ? styles.rounded : ''} ${className}`} style={style}>
      <img alt={src} src={src} />
      <div className={styles.centered}>{children}</div>
    </div>
  );
});
