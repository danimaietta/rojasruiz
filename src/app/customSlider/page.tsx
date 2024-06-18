'use client'

import React, { useState, useEffect } from "react";
import Image from 'next/image'
import styles from './page.module.scss'
import { StaticImageData } from "next/image";

interface SliderItem {
  path: StaticImageData;
  caption: string;
}

interface CustomSliderProps {
  items: SliderItem[];
}

const CustomSlider: React.FC<CustomSliderProps> = ({ items }) => {
  const [index, setIndex] = useState(0);

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
        src={items[index].path} 
        alt={items[index].caption} 
      />
    </div>
  );
}

export default CustomSlider;
