'use client'

import React, { useState, useEffect } from 'react'
import styles from './page.module.scss'
import Link from 'next/link'
import { IoMenuSharp } from "react-icons/io5";
import Image from 'next/image'
import './globals.scss'
import logo from '@assets/Rojas Ruiz Logo.jpg'
import constants from '@constants/constants'
import useWindowSize from '@hooks/useWindowSize'

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const [selected, setSelected] = useState<string>('aboutus')
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
    const { width, height } = useWindowSize();
    const { HEADER_OPTIONS, HEADER_TEXTS, NUM_COLEGIO_INGENIEROS } = constants
    const totalHeight = height * HEADER_OPTIONS.length

    useEffect(() => {
        document.addEventListener('scroll', () => {
            if(scrollY < height - height * 0.2){
                setSelected('aboutus')
            } else if(scrollY <= totalHeight - (height * 2.5)){
                setSelected('services')
            } else if(scrollY <= totalHeight - (height * 1.5)){
                setSelected('projects')
            } else {
                setSelected('contact')
            }
        });

        return () => document.removeEventListener('scroll', () => {})
    })

    const scrollWindow = (section: string) => () => {
        let scrollPosition
        if(section === 'aboutus') scrollPosition = 0
        if(section === 'services') scrollPosition = totalHeight - height * 3.12
        if(section === 'projects') scrollPosition = totalHeight - height * 2.2
        if(section === 'contact' ) scrollPosition = totalHeight - height * 1.3
        scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }

    const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu)

    return (
        <html lang='es'>
            <body>
                <div className={styles['header']}>
                    <Link href='/nosotros'>
                    <Image 
                        src={logo} 
                        className={styles['logo']}
                        alt='Image' 
                    />
                    </Link>
                    <p className={styles['numColIng']}> { NUM_COLEGIO_INGENIEROS } </p>
                    <div className={styles["menu-container"]}>
                        <IoMenuSharp 
                            className={styles['icon-menu']}
                            onClick={toggleMobileMenu}
                        />
                    </div>
                    <div className={`${styles['options']} ${showMobileMenu ? styles['mobileMenu'] : styles['']}`}>
                        {
                            HEADER_OPTIONS.map((option, index) => {
                                return (
                                    <span 
                                        className={`${styles['option']} ${option === selected && styles['active']}`} 
                                        onClick={scrollWindow(option)} key={index}
                                    >
                                        {HEADER_TEXTS[index]}
                                    </span> 
                                )
                            })
                        }
                    </div>
                </div>
                {children}
                <div className={styles['footer']}>
                    <p>© 2021 Rojas Ruiz</p>
                </div>
            </body>
        </html>
    )
}
