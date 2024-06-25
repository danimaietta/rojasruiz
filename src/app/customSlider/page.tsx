'use client'

import React, { useState, useEffect } from "react";
import Image from 'next/image'
import styles from './page.module.scss'
import sliderImage1 from '@assets/aboutUs/sliderImage-1.jpg'
import sliderImage2 from '@assets/aboutUs/sliderImage-2.jpg'
import sliderImage3 from '@assets/aboutUs/sliderImage-3.jpg'
import sliderImage4 from '@assets/aboutUs/sliderImage-4.jpg'
import sliderImage5 from '@assets/aboutUs/sliderImage-5.jpg'
import sliderImage6 from '@assets/aboutUs/sliderImage-6.jpg'
import sliderImage7 from '@assets/aboutUs/sliderImage-7.jpg'

export default function CustomSlider(){
  const [index, setIndex] = useState(0);

  const images = [
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
    {
      path: sliderImage4,
      caption: 'Slide 4'
    },
    {
      path: sliderImage5,
      caption: 'Slide 5'
    },
    {
      path: sliderImage6,
      caption: 'Slide 6'
    },
    {
      path: sliderImage7,
      caption: 'Slide 7'
    }
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);
    return () => clearInterval(interval);
  });

  return (
    <div className={styles['slider-container']}>
      <Image
        className={styles['slider-item']}
        src={images[index].path} 
        alt={images[index].caption} 
      />
    </div>
  );
}
