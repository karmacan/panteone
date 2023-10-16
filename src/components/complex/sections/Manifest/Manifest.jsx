import React, {memo, useRef, useState} from 'react';
import styles from './Manifest.module.scss';
import {useElementIntersection, useElementScroll} from 'utils';
import {AnimateParagraph} from 'components/commons/motions/AnimateParagraph';
import {AnimateOpacity} from 'components/commons/motions/AnimateOpacity';
import {AnimateHeight} from 'components/commons/motions/AnimateHeight';

export const Manifest = memo(({}) => {
  const manifestRef = useRef(null),
    {current: manifestElem} = manifestRef;
  const imageRef = useRef(null),
    {current: imageElem} = imageRef;
  const [wasIntersected, setWasIntersected] = useState(false);

  useElementIntersection(manifestRef, () => setWasIntersected(true), {
    triggerThreshold: 0.5,
  });

  useElementScroll(document?.body, y => {
    imageElem?.style.setProperty('--scroll-inc', Math.floor(y / 2) + 'px');
  });

  return (
    <section className={styles.manifest} ref={manifestRef}>
      <div className={styles.image} ref={imageRef}>
        <AnimateHeight isHidden={!wasIntersected} delay={0.5} type='tween'>
          <img alt='manifest' src='/assets/images/manifest.jpeg' height={200} />
        </AnimateHeight>
      </div>
      <div className={styles.content}>
        <AnimateParagraph
          doShow={wasIntersected}
          className={styles.paragraph}
          lines={[
            'Sound sculptured by art',
            'Uniquely crafted sound systems',
            'to elevate your lifestyle.',
          ]}
        />
        <AnimateOpacity doShow={wasIntersected} delay={1}>
          <div className={styles.subord}>
            Presenting Pantheone Audio, speakers handmade with resin to create an exceptional design
            and listening experience.
          </div>
        </AnimateOpacity>
      </div>
      <div className={styles.bottom}>
        <div className={styles.line}>Our gallery</div>
        <div className={styles.line}>©2023</div>
      </div>
    </section>
  );
});
