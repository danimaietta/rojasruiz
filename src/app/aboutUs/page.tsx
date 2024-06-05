import styles from './page.module.scss'
import Image from 'next/image'
import aboutUs from '@assets/aboutUs/AboutUs.png'
import sliderImage1 from '@assets/aboutUs/sliderImage-1.jpg'
import sliderImage2 from '@assets/aboutUs/sliderImage-2.jpg'
import sliderImage3 from '@assets/aboutUs/sliderImage-3.jpg'
import CustomSlider from '@/customSlider/page'

export default function AboutUs() {

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
    <div className={styles['aboutUs']}>
        <Image
          className={styles['aboutUs-image']}
          src={aboutUs}
          alt="aboutUs" 
        />
        <div className={styles['aboutUs-container']}>
          <p>
            Somos empresa dedicada a la construcción <br/>
            de proyectos de ingeniería civil con más <br/>
            de 15 años de experiencia en el mercado en toda Costa Rica <br/>  
          </p>
          <p>
            Nos caracterizamos por ser una compañía que estamos <br/>
            en frecuente innovación para dar a nuestros clientes <br/>
            el servicio óptimo en sus proyectos en todas las ramas <br/>
            electromecánicas
          </p>
          <CustomSlider items={slideImages} />
        </div>
    </div>
  )
}