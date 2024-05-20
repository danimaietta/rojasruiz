import styles from './page.module.css'
import Image from 'next/image'
import aboutUs from '@assets/aboutUs.png'
import CustomSlider from '@/customSlider/page'

export default function AboutUs() {

  const slideImages = [
    {
      path: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'Slide 1'
    },
    {
      path: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
      caption: 'Slide 2'
    },
    {
      path: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
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
            de 15 años de experiencia en el mercado <br/>  
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