import styles from './page.module.css'
import React, { useState, useEffect } from 'react'
import { IoIosMail } from "react-icons/io";
import constants from '@/constants/constants'

export default function Contact() {
  const [displayName, setDisplayName] = useState<boolean>(false)
  const [displayMail, setDisplayMail] = useState<boolean>(false)
  const [displayPhone, setDisplayPhone] = useState<boolean>(false)
  const [displaySuccess, setDisplaySuccess] = useState<boolean>(false)
  const { regexString, regexNumber, regexMail, maxCharacters } = constants

  useEffect(() => {
    
  }, [])

  const checkInput = (type: string) => (e: React.ChangeEvent<HTMLInputElement>)  => {
    const { value } = e.target
    !value.match(regexString) && type === 'string' || value === '' ? setDisplayName(true) : setDisplayName(false)
    !value.match(regexNumber) && type === 'number' ? setDisplayPhone(true) : setDisplayPhone(false)
    !value.match(regexMail) && type === 'mail' ? setDisplayMail(true) : setDisplayMail(false)
  }

  const sendEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if(!displayName && !displayMail && !displayPhone){
      setDisplaySuccess(true)
    }
  }

  return (
    <>
      <form className={styles['contact-form']}>
        <p>
          Puede contactarnos a través de nuestro formulario y nosotros le atenderemos.
        </p>
        <input type='text' placeholder='Nombre' onChange={checkInput('string')}></input>
        { displayName && <p> * nombre solo puede contener letras </p> }
        <input type='text' placeholder='Correo' onChange={checkInput('mail')}></input>
        { displayMail && <p> * correo no válido </p> }
        <input type='text' placeholder='Teléfono' onChange={checkInput('number')}></input>
        { displayPhone && <p> * teléfono solo puede contener números </p> }
        <li className={styles['contact-dropdown']}>
          <p> Que servicio necesita? </p>
          <ul className={styles['dropdown-items']}>
            <li> Instalación </li>
            <li> Remodelación </li>
            <li> Asesoría </li>
            <li> Verificación Eléctrica </li>
            <li> Mantenimiento </li>
            <li> Diseño Eléctrico </li>
            <li> Red Cableado </li>
          </ul>
        </li>
        <textarea placeholder='Dejenos un mensaje' maxLength={maxCharacters}></textarea>
        <button className={displaySuccess ? styles['button-success'] : ''} onClick={e => sendEmail(e)}>
          <IoIosMail className={displaySuccess ? styles['icon-success'] : ''}/>
        </button>
        { 
          displaySuccess && 
            <p> 
              Nosotros nos estaremos comunicando con usted en los proximos 3 días hábiles. 
            </p> 
        }
      </form>
    </>
  )
}