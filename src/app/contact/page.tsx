'use client'

import styles from './page.module.scss'
import React, { useState, useEffect, useRef, useReducer } from 'react'
import { IoIosMail } from "react-icons/io";
import { FaSquareWhatsapp } from 'react-icons/fa6';
import { FaCopy } from "react-icons/fa";
import constants from '@app/constants/constants'

interface UserInfoState {
  name: string,
  mail: string,
  phone: string,
  isName: boolean,
  isMail: boolean,
  isPhone: boolean,
  isClicked: boolean,
  dropdownTitle: string
}

interface UserInfoAction {
  type: string,
  userInfo: UserInfoState,
  error?: string
}

interface OurInfoState {
  isNameCopied: boolean,
  isMailCopied: boolean,
  isPhoneCopied: boolean,
  isAddressCopied: boolean,
}

interface OurInfoAction {
  type: string,
  ourInfo: OurInfoState,
}

export default function Contact() {
  const [displaySuccess, setDisplaySuccess] = useState<boolean>(false)
  const dropDownClicked = useRef(false)
  const { CONTACT_DROPDOWN_OPTIONS, MAX_CHARACTERS, REGEX_STRING, REGEX_NUMBER, REGEX_MAIL, OUR_INFO } = constants

  const [ourInfo, dispatchOurInfo] = useReducer(ourInfoReducer, {
    isNameCopied: false,
    isMailCopied: false,
    isPhoneCopied: false,
    isAddressCopied: false,
  })

  const [userInfo, dispatchUserInfo] = useReducer(userInfoReducer, {
    name: '',
    mail: '',
    phone: '',
    isName: false,
    isMail: false,
    isPhone: false,
    isClicked: false,
    dropdownTitle: '¿Qué servicio necesita?'
  })

  function ourInfoReducer(state: OurInfoState, action: OurInfoAction): OurInfoState {
    switch (action.type){
      case 'name-copied': return { ...state, isNameCopied: true }
      case 'mail-copied': return { ...state, isMailCopied: true }
      case 'phone-copied': return { ...state, isPhoneCopied: true }
      case 'address-copied': return { ...state, isAddressCopied: true }
      case 'un-copied': return { ...state, isNameCopied: false, isMailCopied: false, isPhoneCopied: false, isAddressCopied: false}
      default: return { ...state }
    }
  }

  function userInfoReducer(state: UserInfoState, action: UserInfoAction): UserInfoState {
    switch (action.type){
      case 'name-update': return { ...state, name: action.userInfo.name }
      case 'name-denied': return { ...state, isName: false }
      case 'name-success': return { ...state, isName: true }
      case 'mail-update': return { ...state, mail: action.userInfo.mail }
      case 'mail-denied': return { ...state, isMail: false }
      case 'mail-success': return { ...state, isMail: true }
      case 'phone-update': return { ...state, phone: action.userInfo.phone }
      case 'phone-denied': return { ...state, isPhone: false }
      case 'phone-success': return { ...state, isPhone: true }
      case 'select-dropdown': return { ...state, dropdownTitle: action?.userInfo?.dropdownTitle || '' }
      default: return { ...state }
    }
  }

  useEffect(() => {
    if(ourInfo.isNameCopied || ourInfo.isMailCopied || ourInfo.isPhoneCopied){
      //dispatchOurInfo({ type: 'un-copied', userInfo })
    }
  })

  const sendEmail = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    if(!userInfo.isName && !userInfo.isMail && !userInfo.isPhone && 
      userInfo.name !== '' && userInfo.mail !== '' && userInfo.phone !== '' &&
      userInfo.name.length > 5 && userInfo.mail.length > 10 && userInfo.phone.length > 7){
        setDisplaySuccess(true) // send email
    }
    !userInfo.name.match(REGEX_STRING) ? dispatchUserInfo({ type: 'name-success', userInfo }) : dispatchUserInfo({ type: 'name-denied', userInfo })
    !userInfo.phone.match(REGEX_NUMBER) ? dispatchUserInfo({ type: 'phone-success', userInfo }) : dispatchUserInfo({ type: 'phone-denied', userInfo })
    !userInfo.mail.match(REGEX_MAIL) ? dispatchUserInfo({ type: 'mail-success', userInfo }) : dispatchUserInfo({ type: 'mail-denied', userInfo })
  }

  const changeDropdownTitle = (option: string): void => {
    dropDownClicked.current = true
    dispatchUserInfo({ type: 'select-dropdown', userInfo: { ...userInfo, dropdownTitle: option } })
  }

  const copyText = (text: string) => {
    navigator.clipboard.writeText(text)
    if(text === OUR_INFO.ID) dispatchOurInfo({ type: 'name-copied', ourInfo })
    if(text === OUR_INFO.MAIL) dispatchOurInfo({ type: 'mail-copied', ourInfo })
    if(text === OUR_INFO.PHONE) dispatchOurInfo({ type: 'phone-copied', ourInfo })
    if(text === OUR_INFO.ADDRESS) dispatchOurInfo({ type: 'address-copied', ourInfo })
  }

  console.count('contact renders: ')

  return (
    <div className={styles['contact']}>
      <div className={styles['our-info']}>
        <h1> {OUR_INFO.TITLE } </h1>
        <p> { OUR_INFO.INTRO } </p>
        <h2> { OUR_INFO.ID_TITLE } </h2>
        <div>
          <p> { OUR_INFO.ID } </p> 
          <FaCopy className={`${styles['copy-icon']} ${styles['icon']}`} onClick={() => copyText(OUR_INFO.ID)} />
          { ourInfo.isNameCopied && <p className={styles['copied']}> { OUR_INFO.COPIED } </p> }
        </div>
        <h2> { OUR_INFO.PHONE_TITLE } </h2>
        <div>
          <p> { OUR_INFO.PHONE } </p> 
          <FaCopy className={`${styles['copy-icon']} ${styles['icon']}`} onClick={() => copyText(OUR_INFO.PHONE)} />
          { ourInfo.isPhoneCopied && <p className={styles['copied']}> { OUR_INFO.COPIED } </p> }
        </div>
        <h2> { OUR_INFO.MAIL_TITLE } </h2>
        <div>
          <p> { OUR_INFO.MAIL } </p> 
          <FaCopy className={`${styles['copy-icon']} ${styles['icon']}`} onClick={() => copyText(OUR_INFO.MAIL)} />
          { ourInfo.isMailCopied && <p className={styles['copied']}> { OUR_INFO.COPIED } </p> }
        </div>
        <h2> { OUR_INFO.ADDRESS_TITLE } </h2>
        <div>
          <p> { OUR_INFO.ADDRESS } </p> 
          <FaCopy className={`${styles['copy-icon']} ${styles['icon']}`} onClick={() => copyText(OUR_INFO.ADDRESS)} />
          { ourInfo.isAddressCopied && <p className={styles['copied']}> { OUR_INFO.COPIED } </p> }
        </div>
        <FaSquareWhatsapp className={`${styles['icon']} ${styles['icon-whatsapp']}`} />
      </div>
      <form className={styles['contact-form']}>
        <h1> CONTÁCTENOS </h1>
        <p>
          Si necesita de nuestros servicios puede contactarnos 
          a través de nuestro formulario y nosotros le atenderemos.
        </p>
        <input 
          className={userInfo.isName ? styles['denied'] : styles['access']}
          type='text' 
          placeholder='Nombre'
          onChange={e => dispatchUserInfo({ type: 'name-update', userInfo: { ...userInfo, name: e.target.value}})} required>
        </input>
        { userInfo.isName && <p> * nombre solo puede contener letras </p> }
        <input 
         className={userInfo.isMail ? styles['denied'] : styles['access']}
         type='text' 
          placeholder='Correo'
          onChange={e => dispatchUserInfo({ type: 'mail-update', userInfo: { ...userInfo, mail: e.target.value}})} required></input>
        { userInfo.isMail && <p> * correo no válido </p> }
        <input 
         className={userInfo.isPhone ? styles['denied'] : styles['access']}
         type='text' 
          placeholder='Teléfono'
          onChange={e => dispatchUserInfo({ type: 'phone-update', userInfo: { ...userInfo, phone: e.target.value}})} required></input>
        { userInfo.isPhone && <p> * teléfono solo puede contener números </p> }
        <li className={styles['contact-dropdown']}>
          <p 
            className={dropDownClicked.current ? styles['dropdown-selected'] : styles['dropdown-placeholder']}
          > 
            { userInfo.dropdownTitle } 
          </p>
          <ul className={styles['dropdown-items']}>
            {
              CONTACT_DROPDOWN_OPTIONS.map((option, index) => {
                return (
                  <li key={index} onClick={() => changeDropdownTitle(option)} className={styles['']}> 
                    { option } 
                  </li>
                )
              })
            }
          </ul>
        </li>
        <textarea placeholder='Dejenos un mensaje' maxLength={MAX_CHARACTERS}></textarea>
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