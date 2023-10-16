import React, {memo, useRef, useState} from 'react';
import styles from './Gallery.module.scss';
import {Button} from 'components/commons/buttons/Button/Button';
import {ClippedImage} from 'components/commons/rest/ClippedImage/ClippedImage';
import {AnimateOpacity} from 'components/commons/motions/AnimateOpacity';
import {useElementIntersection} from 'utils';

export const Gallery = memo(({}) => {
  const triggerRef = useRef(null),
    {current: triggerElem} = triggerRef;
  const [doShow, setDoShow] = useState(false);

  useElementIntersection(triggerRef, x => setDoShow(true), {
    triggerThreshold: 1,
  });

  return (
    <section className={styles.gallery}>
      <ClippedImage src='/assets/images/gallery.jpeg'>
        <Button>View Gallery</Button>
      </ClippedImage>
      <AnimateOpacity doShow={doShow} duration={1}>
        <div ref={triggerRef} className={styles.about}>
          <div className={styles.left}>About us</div>
          <div className={styles.right}>
            Motivated by our core values – art, form, sound – exceptional sound quality and design
            is at the heart of what we do. At Pantheone, we create sound systems, packaged into
            handmade sculptures using unique materials, that integrate seamlessly into your
            lifestyle.
          </div>
        </div>
      </AnimateOpacity>
    </section>
  );
});
