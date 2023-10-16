import React, {memo, useRef, useState} from 'react';
import styles from './ArtForm.module.scss';
import {AnimateImageFromBottom} from 'components/commons/motions/AnimateImageFromBottom';
import {Button} from 'components/commons/buttons/Button/Button';
import {useElementIntersection, useElementScroll} from 'utils';
import {AnimateHeight} from 'components/commons/motions/AnimateHeight';
import {ClippedImage} from 'components/commons/rest/ClippedImage/ClippedImage';
import {AnimateOpacity} from 'components/commons/motions/AnimateOpacity';

export const ArtForm = memo(({className = '', style}) => {
  const triggerRef = useRef(null),
    {current: triggerElem} = triggerRef;
  const imageRef = useRef(null),
    {current: imageElem} = imageRef;
  const [showContent, setShowContent] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useElementIntersection(triggerRef, () => setShowContent(true), {
    triggerThreshold: 0.3,
  });

  useElementIntersection(triggerRef, () => setShowImage(true), {
    triggerThreshold: 0.8,
  });

  useElementScroll(document?.body, y => {
    imageElem?.style.setProperty('--scroll-inc', Math.floor(y / 2) + 'px');
  });

  return (
    <div className={`${styles.art_form} ${className}`} style={style}>
      <AnimateImageFromBottom src='/assets/images/artform-1.jpeg'>
        <div className={styles.title}>Art</div>
      </AnimateImageFromBottom>
      <AnimateImageFromBottom src='/assets/images/artform-2.jpeg'>
        <div className={styles.title}>Form</div>
      </AnimateImageFromBottom>
      <AnimateImageFromBottom src='/assets/images/artform-3.jpeg'>
        <div className={styles.title}>Sound</div>
      </AnimateImageFromBottom>
      <section className={styles.bottom} ref={triggerRef}>
        <AnimateOpacity doShow={showContent} duration={1}>
          <div className={styles.content}>
            <div className={styles.text}>
              Our speakers blend the beauty of art and nature with exceptional sound by using the
              latest technology to create excellent acoustic qualities to create sound systems
              uniquely suited to you.
            </div>
            <Button className={styles.button} mixBlendMode='difference'>
              Read More
            </Button>
          </div>
        </AnimateOpacity>
        <div className={styles.image} ref={imageRef}>
          <AnimateHeight isHidden={!showImage} delay={0.3} duration={.3} type='tween'>
            <img alt='artform' src='/assets/images/artform-4.jpeg' height={250} />
          </AnimateHeight>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>BRAND VIDEO</div>
          <div className={styles.right}>01:03:2021</div>
        </div>
      </section>
      <ClippedImage src='/assets/images/enter.jpeg' isRounded />
    </div>
  );
});
