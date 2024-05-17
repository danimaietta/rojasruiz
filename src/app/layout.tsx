'use client'

import React, { useState, useEffect } from 'react'
import { FaSquareWhatsapp } from 'react-icons/fa6';
import Image from 'next/image'
import './globals.css'
import logo from '@assets/logo.png'
import constants from '@constants/constants'

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [selected, setSelected] = useState<string>('aboutus')
    const { headerOptions, headerTexts } = constants
    const totalHeight = innerHeight * headerOptions.length

    useEffect(() => {
        document.addEventListener('scroll', () => {
            console.log(totalHeight - (window.innerHeight) - (window.innerHeight * 0.10));
            if(window.scrollY < window.innerHeight - window.innerHeight * 0.10){
                setSelected('aboutus')
            } else if(window.scrollY <= totalHeight - (window.innerHeight * 2) - (window.innerHeight * 0.10)){
                setSelected('services')
            } else if(window.scrollY <= totalHeight - (window.innerHeight * 1) - (window.innerHeight * 0.10)){
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
        if(section === 'services') scrollPosition = totalHeight - window.innerHeight * 3
        if(section === 'projects') scrollPosition = totalHeight - window.innerHeight * 2
        if(section === 'contact' ) scrollPosition = totalHeight
        window.scrollTo({top: scrollPosition, behavior: 'smooth'});
    }

    return (
        <html lang='es'>
            <body>
                <div className='header'>
                    <Image src={logo} className='logo' alt='Image' width={200} />
                    <div className='options'>
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
