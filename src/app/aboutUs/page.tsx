import styles from './page.module.css'

export default function AboutUs() {

  return (
    <div className={styles['aboutUs']}>
        <div>
          <h1>¿Quiénes somos?</h1>
          <p>
            Somos empresa dedicada a la construcción de proyectos 
            de ingeniería civil, con más de 15 años de experiencia 
            en el mercado.
          </p>
        </div>
        <div>
          <h1>Nuestro lema</h1>
          <p>
            Nos caracterizamos por ser una compañía que estamos en
            frecuente innovación para dar a nuestros clientes el servicio
            optimo en sus proyectos en todas las ramas electromecánicas 
          </p>
        </div>
    </div>
  )
}