import React, {memo, useRef} from 'react';
import styles from './TopMenu.module.scss';
import {AnimateFromTop} from 'components/commons/motions/AnimateFromTop';
import {Link} from 'components/commons/buttons/Link/Link';
import {ClippedImage} from 'components/commons/rest/ClippedImage/ClippedImage';
import {useElementOutsideClick} from 'utils';

export const TopMenu = memo(({isOpen = false, setIsOpen}) => {
  const hasEnteredRef = useRef(false);
  const targetRef = useRef(null),
    {current: targetElem} = targetRef;

  useElementOutsideClick(targetRef, () => {
    if (isOpen && !hasEnteredRef.current) {
      hasEnteredRef.current = true;

      return;
    }

    setIsOpen?.(() => {
      hasEnteredRef.current = false;

      return false;
    })
  });

  return (
    <AnimateFromTop className={styles.top_menu} isHidden={!isOpen}>
      <div ref={targetRef} className={styles.container}>
        <div className={styles.main}>
          <Link className={styles.link} size='l'>
            Products
          </Link>
          <Link className={styles.link} size='l'>
            About
          </Link>
          <Link className={styles.link} size='l'>
            Stores
          </Link>
          <Link className={styles.link} size='l'>
            Gallery
          </Link>
          <Link className={styles.link} size='l'>
            Press
          </Link>
          <Link className={styles.link} size='l'>
            Contact
          </Link>
        </div>
        <div className={styles.subord}>
          <Link className={styles.link}>Subscribe</Link>
          <Link className={styles.link}>Instagram</Link>
          <Link className={styles.link}>Support</Link>
          <Link className={styles.link}>Youtube</Link>
          <Link className={styles.link}>My Cart</Link>
          <Link className={styles.link}>Pinerest</Link>
          <Link className={styles.link}>Playlist</Link>
        </div>
        <ClippedImage className={styles.image} src='/assets/images/top_menu.jpeg'>
          <div className={styles.content}>
            <h1>GIVEAWAY</h1>
            <h4>Stand a chance to WIN our Obsidian</h4>
          </div>
        </ClippedImage>
      </div>
    </AnimateFromTop>
  );
});
