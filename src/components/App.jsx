import React, {useCallback, useState} from 'react';
import styles from './App.module.scss';
import {Landing} from './complex/sections/Landing/Landing';
import {Navbar} from './complex/sections/Navbar/Navbar';
import {Manifest} from './complex/sections/Manifest/Manifest';
import {Gallery} from './complex/sections/Gallery/Gallery';
import {TopMenu} from './complex/sections/TopMenu/TopMenu';
import {AnimateDarken} from './commons/motions/AnimateDarken';
import { ArtForm } from './complex/sections/ArtForm/ArtForm';
import { ClippedImage } from './commons/rest/ClippedImage/ClippedImage';
import { Footer } from './complex/sections/Footer/Footer';

export const App = ({}) => {
  const [isOpenTop, setIsOpenTop] = useState(false);

  const handleNavbarButtonClick = useCallback(() => {
    setIsOpenTop(isOpenTop => !isOpenTop);
  }, [setIsOpenTop]);

  return (
    <div className={styles.app}>
      <TopMenu isOpen={isOpenTop} setIsOpen={setIsOpenTop} />
      <Navbar onButtonClick={handleNavbarButtonClick} />
      <AnimateDarken originalBackground="#f1f0ec" isHidden={isOpenTop}>
        <Landing />
        <Manifest />
        <Gallery />
        <ArtForm />
        <Footer />
      </AnimateDarken>
    </div>
  );
};