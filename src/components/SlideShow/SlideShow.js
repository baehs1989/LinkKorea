import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import styles from './SlideShow.module.css'

const fadeProperties = {
    duration: 8000,
    transitionDuration:1200,
    pauseOnHover: true
};

export default function SlideShow() {
    return (
        <div className={styles.SlideContainer}>
          <Slide {...fadeProperties}>
            <div className={styles.Slide} style={{'backgroundImage': 'url(https://source.unsplash.com/random)'}}>
                <div>
                    <span>Ad 1</span>
                </div>
            </div>
            <div className={styles.Slide} style={{'backgroundImage': 'url(https://source.unsplash.com/random)'}}>
                <div>
                    <span>Ad 2</span>
                </div>
            </div>
            <div className={styles.Slide} style={{'backgroundImage': 'url(https://source.unsplash.com/random)'}}>
                <div>
                    <span>Ad 3</span>
                </div>
            </div>
          </Slide>
        </div>
    )
}
