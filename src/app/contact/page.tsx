'use client'

import styles from './page.module.scss'
import React, { useState, useRef, useReducer } from 'react'
import { IoIosMail } from "react-icons/io";
import constants from '@app/constants/constants'

interface State {
  name: string,
  mail: string,
  phone: string,
  isName: boolean,
  isMail: boolean,
  isPhone: boolean,
  isClicked: boolean,
  dropdownTitle: string
}

interface Action {
  type: string,
  inputs: State,
  error?: string
}

export default function Contact() {
  const [displaySuccess, setDisplaySuccess] = useState<boolean>(false)
  const dropDownClicked = useRef(false)
  const { contactDropdownOptions, maxCharacters, regexString, regexNumber, regexMail, ourInfo } = constants

  const [inputs, dispatch] = useReducer(reducer, {
    name: '',
    mail: '',
    phone: '',
    isName: false,
    isMail: false,
    isPhone: false,
    isClicked: false,
    dropdownTitle: '¿Qué servicio necesita?'
  })

  function reducer(state: State, action: Action): State {
    switch (action.type){
      case 'name-update': return { ...state, name: action.inputs.name }
      case 'name-denied': return { ...state, isName: false }
      case 'name-success': return { ...state, isName: true }
      case 'mail-update': return { ...state, mail: action.inputs.mail }
      case 'mail-denied': return { ...state, isMail: false }
      case 'mail-success': return { ...state, isMail: true }
      case 'phone-update': return { ...state, phone: action.inputs.phone }
      case 'phone-denied': return { ...state, isPhone: false }
      case 'phone-success': return { ...state, isPhone: true }
      case 'select-dropdown': return { ...state, dropdownTitle: action?.inputs?.dropdownTitle || '' }
      default: return { ...state }
    }
  }

  const sendEmail = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    if(!inputs.isName && !inputs.isMail && !inputs.isPhone && 
      inputs.name !== '' && inputs.mail !== '' && inputs.phone !== '' &&
      inputs.name.length > 5 && inputs.mail.length > 10 && inputs.phone.length > 7){
        setDisplaySuccess(true) // send email
    }
    !inputs.name.match(regexString) ? dispatch({ type: 'name-success', inputs }) : dispatch({ type: 'name-denied', inputs })
    !inputs.phone.match(regexNumber) ? dispatch({ type: 'phone-success', inputs }) : dispatch({ type: 'phone-denied', inputs })
    !inputs.mail.match(regexMail) ? dispatch({ type: 'mail-success', inputs }) : dispatch({ type: 'mail-denied', inputs })
  }

  const changeDropdownTitle = (option: string): void => {
    dropDownClicked.current = true
    dispatch({ type: 'select-dropdown', inputs: { ...inputs, dropdownTitle: option } })
  }

  console.count('contact renders: ')

  return (
    <div className={styles['contact']}>
      <div className={styles['our-info']}>
        <h1> {ourInfo.title } </h1>
        <p> { ourInfo.intro } </p>
        <h2> { ourInfo.idTitle } </h2>
        <p> { ourInfo.id } </p>
        <h2> { ourInfo.phoneTitle } </h2>
        <p> { ourInfo.phone } </p>
        <h2> { ourInfo.mailTitle} </h2>
        <p> { ourInfo.mail } </p>
        <h2> { ourInfo.addressTitle } </h2>
        <p> { ourInfo.address } </p>
      </div>
      <form className={styles['contact-form']}>
        <h1> CONTÁCTENOS </h1>
        <p>
          Si necesita de nuestros servicios puede contactarnos 
          a través de nuestro formulario y nosotros le atenderemos.
        </p>
        <input 
          className={inputs.isName ? styles['denied'] : styles['access']}
          type='text' 
          placeholder='Nombre'
          onChange={e => dispatch({ type: 'name-update', inputs: { ...inputs, name: e.target.value}})} required>
        </input>
        { inputs.isName && <p> * nombre solo puede contener letras </p> }
        <input 
         className={inputs.isMail ? styles['denied'] : styles['access']}
         type='text' 
          placeholder='Correo'
          onChange={e => dispatch({ type: 'mail-update', inputs: { ...inputs, mail: e.target.value}})} required></input>
        { inputs.isMail && <p> * correo no válido </p> }
        <input 
         className={inputs.isPhone ? styles['denied'] : styles['access']}
         type='text' 
          placeholder='Teléfono'
          onChange={e => dispatch({ type: 'phone-update', inputs: { ...inputs, phone: e.target.value}})} required></input>
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
    </div>
  )
}