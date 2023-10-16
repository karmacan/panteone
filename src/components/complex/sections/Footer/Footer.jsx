import React, { useRef, useState } from 'react';
import styles from './Footer.module.scss';
import {Link} from 'components/commons/buttons/Link/Link';
import {Inport} from 'components/commons/inports/Inport/Inport';
import {AnimateOpacity} from 'components/commons/motions/AnimateOpacity';
import { useElementIntersection } from 'utils';

export const Footer = ({}) => {
  const triggerRef = useRef(null), {current: triggerElem} = triggerRef;
  const [wasIntersected, setWasIntersected] = useState(false);
  
  useElementIntersection(triggerRef, () => setWasIntersected(true), {
    triggerThreshold: 0.4
  })
  
  return (
    <AnimateOpacity doShow={wasIntersected} duration={1}>
      <section ref={triggerRef} className={styles.footer}>
        <div className={styles.grid}>
          <div area='a1' className={styles.row_a}>
            Join our Community
          </div>
          <div area='a2' className={styles.row_a}>
            Subscribe to our Newsletter
          </div>
          <div area='b1' className={styles.row_b}>
            <Inport />
          </div>
          <div area='c1' className={styles.row_c}>
            <div className={styles.title}>Legal</div>
            <Link className={styles.link}>Terms of Use</Link>
            <Link className={styles.link}>Privacy Policy</Link>
            <Link className={styles.link}>FAQ</Link>
            <Link className={styles.link}>Support</Link>
          </div>
          <div area='c2' className={styles.row_c}>
            <div className={styles.title}>Community</div>
            <Link className={styles.link}>Trade</Link>
            <Link className={styles.link}>Playlist</Link>
            <Link className={styles.link}>Download App</Link>
            <div style={{display: 'flex'}}>
              <Link className={styles.link}>Brand Book</Link>
              <i class='fa fa-arrow-circle-right' id={styles.icon}></i>
            </div>
            <Link className={styles.link}>Connect Speakers</Link>
          </div>
          <div area='c3' className={styles.row_c} id={styles.last}>
            <div className={styles.title}>Social</div>
            <Link className={styles.link}>Instagram</Link>
            <Link className={styles.link}>Facebook</Link>
            <Link className={styles.link}>Youtube</Link>
            <Link className={styles.link}>Flickr</Link>
            <Link className={styles.link}>LinkedIn</Link>
            <Link className={styles.link}>Pinterest</Link>
          </div>
        </div>

        <div className={styles.bottom}>©2023. Pantheone Audio. All rights reserved.</div>
      </section>
    </AnimateOpacity>
  );
};
