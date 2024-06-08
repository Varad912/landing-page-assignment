import React from 'react';
import styles from './Home.module.css';
import { getImageUrl } from '../../utils'

function Home() {
  return (
    <section className={styles.container} id='homePage'>
      <div className={styles.leftContent}>
        <h1 className={styles.heading}>Make The Best Financial Decisions </h1>
        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aperiam distinctio nihil doloremque! Porro temporibus asperiores fugiat quae.</p>
        <div className={styles.buttons}>
          <button className={styles.btn1}>Get Started →</button>
          <img src={getImageUrl('Home/Group 3.png')} alt='vid icon' className={styles.btnImg} />
          <button className={styles.btn2}>Watch Video</button>
        </div>
        <img src={getImageUrl('Home/Group 35924.png')} alt='design1' className={styles.design1}/>
      </div>
      <div className={styles.rightContent}>
        <img src = {getImageUrl('Home/mobile1.png')} alt='mob1' className={styles.mob1} />
        <img src = {getImageUrl('Home/mobile2.png')} alt='mob2' className={styles.mob2}/>
        <img src = {getImageUrl('Home/mobile3.png')} alt='mob3' className={styles.mob3}/>
      </div>
    </section>
  )
}

export default Home