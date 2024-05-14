import styles from './page.module.css'

export default function Home() {
    return (
        <div className={styles['main-container']}>
            <div className={styles['aboutus-container']}>
                <h1>¿Quienes somos?</h1>
                <p>
                    Una empresa dedicada a la construcción de proyectos 
                    de ingeniería civil, con más de 15 años de experiencia 
                    en el mercado.
                </p>
            </div>
            <div className={styles['services-container']}>
                <h1>Servicios</h1>
                <p>
                    Ofrecemos servicios de construcción, remodelación, 
                    mantenimiento y asesoría en proyectos de ingeniería 
                    civil.
                </p>
            </div>
            <div className={styles['projects-container']}>
                <h1>Proyectos</h1>
                <p>
                    Hemos participado en la construcción de proyectos 
                    de infraestructura en todo el país.
                </p>
            </div>
            <div className={styles['contact-container']}>
                <h1>Contactenos</h1>
                <p>
                    Puede contactarnos a través de nuestro correo 
                    electrónico o visitarnos en nuestras oficinas.
                </p>
                <form className={styles['contact-form']}>
                    <input type='text' placeholder='Nombre'></input>
                    <input type='text' placeholder='Correo'></input>
                    <input type='text' placeholder='Telefono'></input>
                    <textarea placeholder='Mensaje'></textarea>
                    <button>Enviar</button>
                </form>
            </div>
        </div>
    )
}
