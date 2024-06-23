import { Fragment } from 'react';
import styles from './page.module.scss'
import Image from 'next/image'
import sliderImage1 from '@assets/aboutUs/sliderImage-1.jpg'
import sliderImage2 from '@assets/aboutUs/sliderImage-2.jpg'
import sliderImage3 from '@assets/aboutUs/sliderImage-3.jpg'

export default function ImageSlider(){

  const slideImages = [
    {
      path: sliderImage1,
      caption: 'Slide 1'
    },
    {
      path: sliderImage2,
      caption: 'Slide 2'
    },
    {
      path: sliderImage3,
      caption: 'Slide 3'
    },
  ];

  return (
    <div className={styles['slider-container']} >
      <div className={styles['slider-visible']} >
        {
          slideImages.map((image, index) => {
            return (
              <Fragment key={index}>
                <div className={styles['title']}>
                  <p> 
                    Este proyecto lo realizamos en el lugar X, 
                    este texto es una descripción de lo que se 
                    realizó pare estimar cual seria el resultado final
                  </p>
                </div>
                <Image 
                  className={styles['slider-image']} 
                  src={image.path} 
                  alt={image.caption} 
                />             
              </Fragment>
            )
          })
        }
      </div>
    </div>
  )
}