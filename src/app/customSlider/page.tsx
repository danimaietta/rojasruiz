'use client'

import React, { useState, useEffect } from "react";
import Image, { StaticImageData }from 'next/image'
import styles from './page.module.scss'

export default function CustomSlider({ images }: { images: { path: StaticImageData, caption: string }[] }){
  const [index, setIndex] = useState(0);

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
