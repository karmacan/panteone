import React, {memo, useEffect, useState} from 'react';
import styles from './Landing.module.scss';
import {Button} from 'components/commons/buttons/Button/Button';
import {useElementScroll} from 'utils';
import {AnimateOpacity} from 'components/commons/motions/AnimateOpacity';
import {AnimateFromBottom} from 'components/commons/motions/AnimateFromBottom';
import {FIRST_DELAY, SECOND_DELAY} from 'consts';

export const Landing = memo(({}) => {
  const [slidingElem, setSlidingElem] = useState(null);
  const VIDEOS_SCREENS_COUNT = 3;
  const [activeVideo, setActiveVideo] = useState(VIDEOS_SCREENS_COUNT - 1);

  const handleAnimationComplete = ev => {
    ev.target.parentElement.style.overflow = 'visible';
  };

  useElementScroll(document?.body, y => {
    // Slow element scroll
    slidingElem?.style.setProperty('--scroll-inc', Math.floor(y / 2) + 'px');
  });

  // On mount
  useEffect(() => {
    const id = setInterval(() => {
      setActiveVideo(activeVideo => {
        return (activeVideo + 1) % VIDEOS_SCREENS_COUNT;
      });
    }, 2000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <section className={styles.landing}>
      <AnimateOpacity className={styles.videos} duration={0.5} replacedParent='div.overlay'>
        <div className={styles.overlay} />
        <div className={`${styles.video} ${activeVideo === 0 ? styles.active : ''}`}>
          <video autoPlay muted loop>
            <source src='/assets/videos/sea_wave_splashing_on_sand_6891997.mp4' />
          </video>
        </div>
        <div className={`${styles.video} ${activeVideo === 1 ? styles.active : ''}`}>
          <video autoPlay muted loop>
            <source src='/assets/videos/sunflower_tree_swinging_in_breeze_6892380.mp4' />
          </video>
        </div>
        <div className={`${styles.video} ${activeVideo === 2 ? styles.active : ''}`}>
          <video autoPlay muted loop>
            <source src='/assets/videos/colorful_butterfly_moving_on_rocky_ground_6892030.mp4' />
          </video>
        </div>
        <div className={`${styles.video} ${activeVideo === 2 ? styles.active : ''}`}>
          <video autoPlay muted loop>
            <source src='/assets/videos/of_natural_plant_moving_in_storm_6892137.mp4' />
          </video>
        </div>
      </AnimateOpacity>
      <div ref={setSlidingElem} className={styles.sliding}>
        <div className={styles.slogan}>
          <div className={styles.line}>
            <AnimateFromBottom
              delay={FIRST_DELAY + 0.5}
              onAnimationComplete={handleAnimationComplete}
            >
              <span className={styles.text} id={styles.nature}>
                nature,
              </span>
            </AnimateFromBottom>
          </div>
          <div className={styles.flex_l}>
            <div className={styles.line}>
              <AnimateFromBottom
                delay={FIRST_DELAY + 0.6}
                onAnimationComplete={handleAnimationComplete}
              >
                <span className={styles.text} id={styles.harnessed}>
                  harnessed{' '}
                </span>
              </AnimateFromBottom>
            </div>
            <div className={styles.line}>
              <AnimateFromBottom
                delay={FIRST_DELAY + 0.7}
                onAnimationComplete={handleAnimationComplete}
              >
                <span className={styles.text} id={styles.by}>
                  by{' '}
                </span>
              </AnimateFromBottom>
            </div>
          </div>
          <div className={styles.line}>
            <AnimateFromBottom
              delay={FIRST_DELAY + 0.7}
              onAnimationComplete={handleAnimationComplete}
            >
              <span className={styles.text} id={styles.hand}>
                hand.
              </span>
            </AnimateFromBottom>
          </div>
        </div>
        <AnimateOpacity className={styles.button_container} delay={SECOND_DELAY}>
          <Button>Our Shop</Button>
        </AnimateOpacity>
      </div>
    </section>
  );
});
