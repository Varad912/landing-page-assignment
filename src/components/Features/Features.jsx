import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Features.module.css';
import data from '../../data/features.json';
import data2 from '../../data/advantages.json';
import data3 from '../../data/advantages2.json';

function Features() {
    return (
        <section className={styles.container} id='features'>
          <div className={styles.features}>
            <img src={getImageUrl('Features/Group 35933.png')} alt='img1' className={styles.img1} />
            <div className={styles.content}>
              <h6 className={styles.title}>FEATURES</h6>
              <h1 className={styles.heading}>Uifry Premium</h1>
              {data.map((item, index) => (
                <div className={styles.featureDetails}>
                   <div key={index} className={styles.point}>
                     <img src={getImageUrl(item.featureIcon)} alt={`icon-${index}`} />
                     <h4 className={styles.itemFeature}>{item.feature}</h4>
                   </div>
                   <p className={styles.featureDescription}>{item.description}</p>
                </div>
               
              ))}
            </div>
          </div>

             <div className={styles.advantages}>
                <div className={styles.content}>
                <h6 className={styles.title}>ADVANTAGES</h6>
                <h1 className={styles.heading}>Why Choose Uifry?</h1>
                {data2.map((item2, index2) => (
                <div className={styles.featureDetails}>
                   <div key={index2} className={styles.point2}>
                     <img src={getImageUrl(item2.advantageIcon)} alt={`icon-${index2}`}  />
                     <h4 className={styles.itemFeature}>{item2.advantage}</h4>
                   </div>
                   <p className={styles.featureDescription}>{item2.details}</p>
                </div>
               
              ))}
                </div>
              <img src={getImageUrl('Features/Group 35935.png')} alt='img2' className={styles.img1} />
             </div>


             <div className={styles.advantages}>
                <img src={getImageUrl('Features/Group 35935.png')} alt='img2' className={styles.img1} />
                <div className={styles.content}>
                {data3.map((item3, index3) => (
                <div className={styles.featureDetails}>
                   <div key={index3} className={styles.point3}>
                     <img src={getImageUrl(item3.advantageIcon2)} alt={`icon-${index3}`} />
                     <h4 className={styles.itemFeature}>{item3.advantage2}</h4>
                   </div>
                   <p className={styles.featureDescription}>{item3.details2}</p>
                </div>
               
              ))}
                </div>
             </div>
             
        </section>
      )
}

export default Features