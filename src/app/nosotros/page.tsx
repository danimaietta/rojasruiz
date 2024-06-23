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
  const { historyTitle, historyText, missionTitle, missionText, visionTitle, visionText } = constants.nosotros

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
          <h1 className={styles['animation']}> { historyTitle } </h1>
          <p className={styles['animation']}> { historyText } </p>
        </div>
        <div>
          <h1 className={styles[misionAnimation ? 'animation' : '']}> { missionTitle } </h1>
          <p className={styles[misionAnimation ? 'animation' : '']}> { missionText } </p>
        </div>
        <Image className={styles['image']} src={mision} alt="mision"/>
        <Image className={styles['image']} src={vision} alt="vision"/>
        <div>
          <h1 className={styles[visionAnimation ? 'animation' : '']}> { visionTitle } </h1>
          <p className={styles[visionAnimation ? 'animation' : '']}> { visionText } </p>
        </div>
    </div>
  )
}