import React, { useState } from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.navItems}>
          <div className={styles.responsive}>
            <div className={styles.permanent}>
              <a href='#hero'>
                <img src={getImageUrl('Hero/Frame.png')} alt='frame' className={styles.frameIcon} />
              </a>
              <a href='#hero' className={styles.title}>uifry</a>
              <img src={getImageUrl('Hero/TM.png')} className={styles.tmIcon} alt='tm' />
              <a href='#homePage' className={styles.home} onClick={() => setMenuOpen(false)}>Home</a>
            </div>
            <img
              className={styles.menuBtn}
              src={menuOpen ? getImageUrl('Hero/closeIcon.png') : getImageUrl('Hero/menuIcon.png')}
              alt='menu-btn'
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
          <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}>
            <li>
              <a href='#testimonial' onClick={() => setMenuOpen(false)}>About Us</a>
            </li>
            <li>
              <a href='#pricing' onClick={() => setMenuOpen(false)}>Pricing</a>
            </li>
            <li>
              <a href='#features' onClick={() => setMenuOpen(false)}>Features</a>
            </li>
            <li>
              <button className={styles.downloadBtn}>Download</button>
            </li>                                    
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
