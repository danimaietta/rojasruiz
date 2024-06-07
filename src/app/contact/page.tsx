import styles from './page.module.scss'
import React, { useState, useRef, useReducer } from 'react'
import { IoIosMail } from "react-icons/io";
import constants from '@/constants/constants'

interface State {
  isName: boolean,
  isMail: boolean,
  isPhone: boolean,
  dropdownTitle: string
}

interface Action {
  type: string, 
  inputs?: State, 
  error?: string
}

export default function Contact() {
  const [displaySuccess, setDisplaySuccess] = useState<boolean>(false)
  const dropDownClicked = useRef(false)
  const { contactDropdownOptions, maxCharacters, regexString, regexNumber, regexMail } = constants

  const checkInput = (type: string) => (e: React.ChangeEvent<HTMLInputElement>)  => {
    const { value } = e.target
    !value.match(regexString) && type === 'string' ? dispatch({ type: 'name-success' }): dispatch({ type: 'name-denied' })
    !value.match(regexNumber) && type === 'number' ? dispatch({ type: 'phone-success' }) : dispatch({ type: 'phone-denied' })
    !value.match(regexMail) && type === 'mail' ? dispatch({ type: 'mail-success' }) : dispatch({ type: 'mail-denied' })
  }

  const sendEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if(!inputs.isName && !inputs.isMail && !inputs.isPhone){
      setDisplaySuccess(true)
    }
  }

  const changeDropdownTitle = (option: string) => {
    dropDownClicked.current = true
    dispatch({ type: 'select-dropdown', inputs: { ...inputs, dropdownTitle: option } })
  }

  // useReducer

  function reducer(state: State, action: Action): State {
    switch (action.type){
      case 'name-denied': return { ...state, isName: false }
      case 'name-success': return { ...state, isName: true }
      case 'mail-denied': return { ...state, isMail: false }
      case 'mail-success': return { ...state, isMail: true }
      case 'phone-denied': return { ...state, isPhone: false }
      case 'phone-success': return { ...state, isPhone: true }
      case 'select-dropdown': return { ...state, dropdownTitle: action?.inputs?.dropdownTitle || ''}
      default: return { ...state }
    }
  }

  const [inputs, dispatch] = useReducer(reducer, {
    isName: false,
    isMail: false,
    isPhone: false,
    dropdownTitle: '¿Qué servicio necesita?'
  })

  return (
    <>
      <form className={styles['contact-form']}>
        <p>
          Si necesita de nuestros servicios puede contactarnos 
          a través de nuestro formulario y nosotros le atenderemos.
        </p>
        <input type='text' placeholder='Nombre' onChange={checkInput('string')}></input>
        { inputs.isName && <p> * nombre solo puede contener letras </p> }
        <input type='text' placeholder='Correo' onChange={checkInput('mail')}></input>
        { inputs.isMail && <p> * correo no válido </p> }
        <input type='text' placeholder='Teléfono' onChange={checkInput('number')}></input>
        { inputs.isPhone && <p> * teléfono solo puede contener números </p> }
        <li className={styles['contact-dropdown']}>
          <p 
            className={dropDownClicked.current ? styles['dropdown-selected'] : styles['dropdown-placeholder']}
          > 
            { inputs.dropdownTitle } 
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