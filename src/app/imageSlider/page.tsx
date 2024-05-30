import styles from './page.module.css'
import Image from 'next/image'
import { StaticImageData } from 'next/image';

interface CustomSliderProps{
  images: { path: StaticImageData, caption: string }[]
}

export default function ImageSlider({ images }: CustomSliderProps){

  return (
    <div className={styles['slider-container']} >
      <div className={styles['slider-visible']} >
        {
          images.map((image) => {
            return (
              <>
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
              </>
            )
          })
        }
      </div>
    </div>
  )
}