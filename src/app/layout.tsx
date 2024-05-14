'use client'

import Image from 'next/image'
import './globals.css'
import logo from '@assets/logo.png'

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const scrollWindow = (section: string) => () => {
        const totalHeight = window.innerHeight * 4;
        let scrollPosition
        if(section === 'aboutus') scrollPosition = 0
        if(section === 'services') scrollPosition = totalHeight - window.innerHeight * 3
        if(section === 'projects') scrollPosition = totalHeight - window.innerHeight * 2
        if(section === 'contact' ) scrollPosition = totalHeight
        window.scrollTo({top: scrollPosition, behavior: 'smooth'});
    }

    return (
        <html lang="es">
            <body>
                <div className='header'>
                    <Image src={logo} className='logo' alt="Image" width={200} />
                    <span onClick={scrollWindow('aboutus')}>Conózcanos</span>
                    <span onClick={scrollWindow('services')}>Servicios</span>
                    <span onClick={scrollWindow('projects')}>Proyectos</span>
                    <span onClick={scrollWindow('contact')}>Contáctenos</span>
                </div>
                {children}
                <div className='footer'>
                    <p>© 2021 Rojas Ruiz</p>
                </div>
            </body>
        </html>
    )
}
