'use client'

import styles from './page.module.scss'
import Image from 'next/image'
import historia from '@assets/us/historia.png'
import mision from '@assets/us/mision.png'
import vision from '@assets/us/vision.png'

export default function PdfView() {

  return (
    <div className={styles['nosotros']}>
        <Image className={styles['image']} src={historia} alt="historia"/>
        <p>
          A partir del 2023.
          ROJAS RUIZ INGENIERIA ELECTROMECANICA LTDA se fusiona con
          la compañía hermana J&E CONSULTORES ELECTROMECANICOS
          S.A. con la intención de unificar la experiencia, profesionalismo,
          recursos y sobre todo el personal humano de ambas empresas en
          beneficios de nuestros clientes.
        </p>
        <p>
          Mantener nuestro compromiso de mejora
          continua, profesionalismo y ética para
          continuar siendo el aliado ideal de nuestros
          clientes en sus proyectos
        </p>
        <Image className={styles['image']} src={mision} alt="mision"/>
        <Image className={styles['image']} src={vision} alt="vision"/>
        <p>
          Mediante una mejora continua, innovación,
          compromiso y trabajo… ofrecer a nuestros
          clientes el mejor servicio, soporte y
          eficiencia del mercado electromecánico
        </p>
    </div>
  )
}