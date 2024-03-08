import React from 'react';
import styles from './HomeScreen.module.scss';
import { slPlayStoreUrl } from '../../constants';

const HomeScreen: React.FC = () => {
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.contentContainer}`}>
          <div className={`${styles.cardContainer}`}>
            <img className={`${styles.appLogo}`} src="/assets/logos/slLogo.png" alt="slLogo" />
            <div className={`${styles.title}`}>Share Location Latitude & Long</div>
            <div className={`${styles.description}`}>
              Now you can easily share your location and track your visited places
            </div>
            <div className={`${styles.actionsContainer}`}>
              <a href={slPlayStoreUrl} target="_blank" rel="noreferrer">
                <img className={`${styles.playStoreImg}`} src="/assets/images/playstore.png" alt="slLogo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
