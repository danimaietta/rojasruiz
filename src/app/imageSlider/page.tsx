import styles from './page.module.css'
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image';

interface CustomSliderProps{
  images: { path: StaticImageData, caption: string }[]
}

export default function ImageSlider({images}: CustomSliderProps){

  const carousel = useRef<HTMLDivElement>(null)
  const slider = useRef<HTMLUListElement>(null)
  const buttons = useRef<HTMLButtonElement>(null)

  return (
    <div className={styles['main']}>
        <div className={styles['carousel']} ref={carousel}>
            <button type='button' className={styles['carousel_btn jsPrev']} ref={buttons} aria-label='Previous slide'>
            <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                <path d='M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z' />
            </svg>
            </button>
            <div className={styles['carousel_track-container']}>
              {
                images.map((image: {path: StaticImageData, caption: string}) => {
                  return (
                    <ul className={styles['carousel_track']} ref={slider}>
                      <li className={styles['carousel_slide is-selected']}>
                      <div className={styles['carousel_image']}>
                          <Image src={image.path} alt={image.caption}/>
                      </div>
                      <h2 className={styles['carousel_title']}>Slide 1</h2>
                      </li>
                    </ul>
                  )
                })
              }
            </div>
            <button type='button' className={styles['carousel_btn jsNext']} ref={buttons} aria-label='Next slide' onClick={() => console.log('next btn clicked')}>
            <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                <path d='M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z' />
            </svg>
            </button>
        </div>
    </div>
  )
}