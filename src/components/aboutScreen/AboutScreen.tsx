import React from 'react';
import styles from './AboutScreen.module.scss';

const AboutScreen: React.FC = () => {
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.contentContainer}`}>
          <div className={`${styles.cardContainer}`}>
            <div className={`${styles.text1}`}>
              Welcome to Share Location Latitude & Long
              <ol style={{ listStyleType: 'initial' }} className={`${styles.pointsContainer}`}>
                <li>Get present location latitude, longitude and address and more features.</li>
                <li>Get Country,State,Locality,City,Pin code and complete address of your present location.</li>
                <li>
                  Get location address details from the GPS co-ordinates - (Select Address from Co-ordinates section
                  from the menu and enter the location latitude and longitude).
                </li>
                <li>
                  You are able to save your visited locations and see whenever you want. (Eg:-- You can save the
                  location of your parked car and you can see that whenever you want ).
                </li>
              </ol>
              <div>Regards</div>
              <div>Share Location Latitude & Long</div>
              <div>cgmacoder@gmail.com.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutScreen;
