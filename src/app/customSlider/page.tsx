'use client'

import React, { useState, useEffect } from "react";
import Image, { StaticImageData }  from 'next/image'
import styles from './page.module.scss'

interface SliderItem{
  path: StaticImageData, 
  caption: string
}

interface CustomSliderProps{
  items: SliderItem[]
}

const CustomSlider = ({ items }: CustomSliderProps) => {
  const [index23, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);
    return () => clearInterval(interval);
  });

  return (
    <div className="slider-container">
      <Image
        className={styles['slider-item']}
        src={items[index23].path} 
        alt={items[index23].caption} 
      />
    </div>
  );
}

export default CustomSlider;
