import Image from 'next/image'
import './globals.css'
import logo from '@assets/logo.png'

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div className='header'>
                    <Image src={logo} className='logo' alt="Image" width={200} />
                    <button>Conozcanos</button>
                    <button>Servicios</button>
                    <button>Proyectos</button>
                    <button>Contactenos</button>
                </div>
                {children}
                <div className='footer'>
                    <p>© 2021 Rojas Ruiz</p>
                </div>
            </body>
        </html>
    )
}
