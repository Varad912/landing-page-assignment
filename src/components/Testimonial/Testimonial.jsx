import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Testimonial.module.css';

function Testimonial() {
  return (
    <section className={styles.container} id='testimonial'>
        <div className={styles.content1}>
            <h6 className={styles.title}>TESTIMONIAL</h6>
            <h1 className={styles.heading}>What Our Users Say About Us?</h1>
        </div>

        <div className={styles.content2}>
            <img src={getImageUrl('Testimonial/testimonial.png')} className={styles.testimonialImg}/>
            <div className={styles.content3}>
               <h1 className={styles.testimonialHeading}>"The Best Financial Accounting App Ever!</h1>
               <p className={styles.testimonialDetails}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quibusdam consequuntur minima unde temporibus aperiam assumenda ad iusto nisi. Laboriosam, eos corrupti iste praesentium unde quam, dolorem magni autem cupiditate facere aliquam dolore animi adipisci ratione sequi commodi, alias molestiae!"</p>
               <img src={getImageUrl('Testimonial/people.png')} className={styles.testimonialPeopleImg}/>
               <p>Nick Jonas</p>
            </div>
        </div>
    </section>
  )
}

export default Testimonial