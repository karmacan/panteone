import React, { memo } from 'react';
import styles from './Navbar.module.scss';
import {NavButton} from 'components/commons/buttons/NavButton/NavButton';
import {Link} from 'components/commons/buttons/Link/Link';
import {AnimateOpacity} from 'components/commons/motions/AnimateOpacity';
import {SECOND_DELAY} from 'consts';

export const Navbar = memo(({onButtonClick}) => {
  return (
    <AnimateOpacity className={styles.navbar} delay={SECOND_DELAY} replacedParent='div.navbar'>
      <NavButton onClick={onButtonClick} />
      <div className={styles.logo}>
        <span>Panteone</span>
      </div>
      <Link className={styles.link} isInactive={false}>Shop</Link>
    </AnimateOpacity>
  );
});
