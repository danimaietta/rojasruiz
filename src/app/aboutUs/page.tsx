import styles from './page.module.css'
import Image from 'next/image'
import aboutUs from '@assets/AboutUS.png'

export default function AboutUs() {

  return (
    <div className={styles['aboutUs']}>
        <Image
          className={styles['ingElectromecanica']}
          src={aboutUs} 
          alt="IngElectromecanica" 
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
            el servicio optimo en sus proyectos en todas las ramas <br/>
            electromecánicas
          </p>
        </div>
    </div>
  )
}