import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeProperties = {
    duration: 5000,
    pauseOnHover: true
};

export default function SlideShow() {
    return (
        <div className="slide-container">
          <Slide {...fadeProperties}>
            <div className="each-slide">
              <div style={{width:'100%', height:'400px'}}>
                <span>Slide 1</span>
              </div>
            </div>
            <div className="each-slide">
                <div style={{width:'100%', height:'400px'}}>
                <span>Slide 2</span>
              </div>
            </div>
            <div className="each-slide">
                <div style={{width:'100%', height:'400px'}}>
                <span>Slide 3</span>
              </div>
            </div>
          </Slide>
        </div>
    )
}
