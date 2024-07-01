'use client'

import { useState, useEffect } from 'react'
import styles from './page.module.scss'
import Image from 'next/image'
import constants from '@constants/constants'
import historia from '@assets/us/historia.png'
import mision from '@assets/us/mision.png'
import vision from '@assets/us/vision.png'
import useWindowSize from '../hooks/useWindowSize'

export default function PdfView() {
  const [misionAnimation, setMisionAnimation] = useState<boolean>(false)
  const [visionAnimation, setVisionAnimation] = useState<boolean>(false)
  const { width, height } = useWindowSize();
  const { HISTORY_TITLE, HISTORY_TEXT, MISSION_TITLE, MISSION_TEXT, VISION_TITLE, VISION_TEXT } = constants.NOSOTROS

  useEffect(() => {
    document.addEventListener('scroll', () => {
      // console.log('scrollY', scrollY)
      if(scrollY <= height / 8 ){
        setMisionAnimation(true)
      } else if(scrollY <= height / 7){
        setVisionAnimation(true)
      }
    });

    return () => document.removeEventListener('scroll', () => {})
}, [])

  return (
    <div className={styles['nosotros']}>
        <Image className={styles['image']} src={historia} alt="historia"/>
        <div>
          <h1 className={styles['animation']}> { HISTORY_TITLE } </h1>
          <p className={styles['animation']}> { HISTORY_TEXT } </p>
        </div>
        <div>
          <h1 className={styles[misionAnimation ? 'animation' : '']}> { MISSION_TITLE } </h1>
          <p className={styles[misionAnimation ? 'animation' : '']}> { MISSION_TEXT } </p>
        </div>
        <Image className={styles['image']} src={mision} alt="mision"/>
        <Image className={styles['image']} src={vision} alt="vision"/>
        <div>
          <h1 className={styles[visionAnimation ? 'animation' : '']}> { VISION_TITLE } </h1>
          <p className={styles[visionAnimation ? 'animation' : '']}> { VISION_TEXT } </p>
        </div>
    </div>
  )
}