import styles from './page.module.css'
import React, { useState } from 'react'
import constants from '@/constants/constants'

export default function Contact() {
  const [displayName, setDisplayName] = useState<boolean>(false)
  const [displayMail, setDisplayMail] = useState<boolean>(false)
  const [displayPhone, setDisplayPhone] = useState<boolean>(false)
  const { regexString, regexNumber, regexMail, maxCharacters } = constants

  const checkInput = (type: string) => (e: React.ChangeEvent<HTMLInputElement>)  => {
    const { value } = e.target
    if(!value.match(regexString) && type === 'string') setDisplayName(true)
    if(!value.match(regexNumber) && type === 'number') setDisplayPhone(true)
    if(!value.match(regexMail) && type === 'mail') setDisplayMail(true)
  }

  const checkInputs = () => (e: React.MouseEvent<HTMLButtonElement>) => {
    checkInput('string')
    checkInput('number')
    checkInput('mail')
    e.preventDefault()
  }

  return (
    <>
      <form className={styles['contact-form']}>
        <h1> Contáctenos </h1>
        <p>
          Puede contactarnos a través de nuestro correo 
          electrónico o visitarnos en nuestras oficinas.
          Nosotros nos estaremos comunicando con usted en los proximos 3 días hábiles.
        </p>
        <input type='text' placeholder='Nombre'></input>
        { displayName && <p> * nombre solo puede contener letras </p> }
        <input type='text' placeholder='Correo'></input>
        { displayMail && <p> * correo no válido </p> }
        <input type='text' placeholder='Teléfono'></input>
        { displayPhone && <p> * teléfono solo puede contener números </p> }
        <p> Que servicio necesita? </p>
        <select>
            <option value="construcción"> Instalación </option>
            <option value="remodelación"> Remodelación </option>
            <option value="asesoría"> Asesoría </option>
            <option value="verificación"> Verificación Eléctrica </option>
            <option value="mantenimiento"> Mantenimiento </option>
            <option value="diseño"> Diseño Eléctrico </option>
            <option value="mantenimiento"> Red Cableado </option>
        </select>
        <textarea placeholder='Dejenos un mensaje' maxLength={maxCharacters}></textarea>
        <button onClick={checkInputs}> Enviar </button>
      </form>
    </>
  )
}