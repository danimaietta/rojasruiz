'use client'

import React, { useState, useEffect } from "react";
import Image from 'next/image'
import styles from './page.module.scss'
import sliderImage1 from '@assets/aboutUs/sliderImage-1.jpg'
import sliderImage2 from '@assets/aboutUs/sliderImage-2.jpg'
import sliderImage3 from '@assets/aboutUs/sliderImage-3.jpg'

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
    <div className="slider-container">
      <Image
        className={styles['slider-item']}
        src={images[index].path} 
        alt={images[index].caption} 
      />
    </div>
  );
}
