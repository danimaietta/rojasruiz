import styles from './page.module.css'
import Services from '@/services/page'

export default function Contact() {

    return (
      <>
        <h1>Contáctenos</h1>
        <p>
            Puede contactarnos a través de nuestro correo 
            electrónico o visitarnos en nuestras oficinas.
        </p>
        <form className={styles['contact-form']}>
            <p>Nombre</p>
            <input type='text' placeholder='Nombre'></input>
            <p>Correo</p>
            <input type='text' placeholder='Correo'></input>
            <p>Teléfono</p>
            <input type='text' placeholder='Teléfono'></input>
            <p>Que servicio necesita?</p>
            <select>
                <option value="construcción">Instalación</option>
                <option value="remodelación">Remodelación</option>
                <option value="asesoría">Asesoría</option>
                <option value="verificación">Verificación Eléctrica</option>
                <option value="mantenimiento">Mantenimiento</option>
                <option value="diseño">Diseño Eléctrico</option>
                <option value="mantenimiento">Red Cableado</option>
            </select>
            <p>Mensaje</p>
            <textarea placeholder='Dejenos un mensaje'></textarea>
            <button onClick={e => e.preventDefault()}>Enviar</button>
            <Services />
        </form>
      </>
    )
  }