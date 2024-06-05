import styles from './page.module.scss'
import React, { useState, useRef } from 'react'
import { IoIosMail } from "react-icons/io";
import constants from '@/constants/constants'

export default function Contact() {
  const [isName, setDisplayName] = useState<boolean>(false)
  const [isMail, setDisplayMail] = useState<boolean>(false)
  const [isPhone, setDisplayPhone] = useState<boolean>(false)
  const [displaySuccess, setDisplaySuccess] = useState<boolean>(false)
  const [dropdownTitle, setDropdownTitle] = useState<string>('Que servicio necesita?')
  const dropDownClicked = useRef(true)
  const { contactDropdownOptions, maxCharacters, regexString, regexNumber, regexMail } = constants

  const checkInput = (type: string) => (e: React.ChangeEvent<HTMLInputElement>)  => {
    const { value } = e.target
    !value.match(regexString) && type === 'string' ? setDisplayName(true) : setDisplayName(false)
    !value.match(regexNumber) && type === 'number' ? setDisplayPhone(true) : setDisplayPhone(false)
    !value.match(regexMail) && type === 'mail' ? setDisplayMail(true) : setDisplayMail(false)
  }

  const sendEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if(!isName && !isMail && !isPhone){
      setDisplaySuccess(true)
    }
  }

  const changeDropdownTitle = (option: string) => {
    dropDownClicked.current = true
    setDropdownTitle(option)
  }

  return (
    <>
      <form className={styles['contact-form']}>
        <p>
          Si necesita de nuestros servicios puede contactarnos 
          a través de nuestro formulario y nosotros le atenderemos.
        </p>
        <input type='text' placeholder='Nombre' onChange={checkInput('string')}></input>
        { isName && <p> * nombre solo puede contener letras </p> }
        <input type='text' placeholder='Correo' onChange={checkInput('mail')}></input>
        { isMail && <p> * correo no válido </p> }
        <input type='text' placeholder='Teléfono' onChange={checkInput('number')}></input>
        { isPhone && <p> * teléfono solo puede contener números </p> }
        <li className={styles['contact-dropdown']}>
          <p 
            className={dropDownClicked.current ? styles['dropdown-selected'] : styles['dropdown-placeholder']}
          > 
            { dropdownTitle } 
          </p>
          <ul className={styles['dropdown-items']}>
            {
              contactDropdownOptions.map((option, index) => {
                return (
                  <li key={index} onClick={() => changeDropdownTitle(option)} className={styles['']}> 
                    { option } 
                  </li>
                )
              })
            }
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