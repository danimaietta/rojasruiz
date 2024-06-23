'use client'

import React, { useState, useEffect } from 'react'
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
    const { headerOptions, headerTexts } = constants
    const totalHeight = height * headerOptions.length

    useEffect(() => {
        document.addEventListener('scroll', () => {
            if(scrollY < height - height * 0.10){
                setSelected('aboutus')
            } else if(scrollY <= totalHeight - (height * 2) - (height * 0.10)){
                setSelected('services')
            } else if(scrollY <= totalHeight - (height * 1) - (height * 0.10)){
                setSelected('projects')
            } else {
                setSelected('contact')
            }
        });

        return () => document.removeEventListener('scroll', () => {})
    }, [])


    const scrollWindow = (section: string) => () => {
        let scrollPosition
        if(section === 'aboutus') scrollPosition = 0
        if(section === 'services') scrollPosition = totalHeight - height * 3
        if(section === 'projects') scrollPosition = totalHeight - height * 2
        if(section === 'contact' ) scrollPosition = totalHeight
        scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }

    const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu)

    return (
        <html lang='es'>
            <body>
                <div className='header'>
                    <Link href='/nosotros'>
                    <Image 
                        src={logo} 
                        className='logo' 
                        alt='Image' 
                    />
                    </Link>
                    <div className="menu-container">
                        <IoMenuSharp 
                            className='icon-menu'
                            onClick={toggleMobileMenu}
                        />
                    </div>
                    <div className={`options ${showMobileMenu ? 'mobileMenu' : ''}`}>
                        {
                            headerOptions.map((option, index) => {
                                return (
                                    <span 
                                        className={`${option} ${option === selected && 'active'}`} 
                                        onClick={scrollWindow(option)} key={index}
                                    >
                                        {headerTexts[index]}
                                    </span> 
                                )
                            })
                        }
                        <FaSquareWhatsapp className='icon icon-whatsapp' />
                    </div>
                </div>
                {children}
                <div className='footer'>
                    <FaSquareWhatsapp className='icon icon-whatsapp' />
                    <p>© 2021 Rojas Ruiz</p>
                </div>
            </body>
        </html>
    )
}
