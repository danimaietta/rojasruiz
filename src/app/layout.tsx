'use client'

import React, { useState, useEffect } from 'react'
import styles from './page.module.scss'
import Link from 'next/link'
import { FaSquareWhatsapp } from 'react-icons/fa6';
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
    const { headerOptions, headerTexts, numColegioIngenieros } = constants
    const totalHeight = height * headerOptions.length

    useEffect(() => {
        document.addEventListener('scroll', () => {
            console.log(scrollY)
            if(scrollY < height - height * 0.10){
                setSelected('aboutus')
            } else if(scrollY <= totalHeight - (height) - (height * 0.10)){
                setSelected('services')
            } else if(scrollY <= totalHeight - (height * 0.10)){
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
        if(section === 'services') scrollPosition = totalHeight - height * 3.1
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
                    <p className={styles['numColIng']}> { numColegioIngenieros } </p>
                    <div className={styles["menu-container"]}>
                        <IoMenuSharp 
                            className={styles['icon-menu']}
                            onClick={toggleMobileMenu}
                        />
                    </div>
                    <div className={`${styles['options']} ${showMobileMenu ? styles['mobileMenu'] : styles['']}`}>
                        {
                            headerOptions.map((option, index) => {
                                return (
                                    <span 
                                        className={`${styles['option']} ${option === selected && styles['active']}`} 
                                        onClick={scrollWindow(option)} key={index}
                                    >
                                        {headerTexts[index]}
                                    </span> 
                                )
                            })
                        }
                    </div>
                </div>
                {children}
                <div className={styles['footer']}>
                <FaSquareWhatsapp className={`${styles['icon']} ${styles['icon-whatsapp']}`} />
                    <p>© 2021 Rojas Ruiz</p>
                </div>
            </body>
        </html>
    )
}
