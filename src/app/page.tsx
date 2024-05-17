'use client'

import styles from './page.module.css'
import About from './aboutUs/page'
import Services from './services/page'
import Projects from './projects/page'
import Contact from './contact/page'

export default function Home() {
    return (
        <div className={styles['main-container']}>
            <div className={styles['aboutus-container']}>
                <About />
            </div>
            <div className={styles['services-container']}>
                <Services />
            </div>
            <div className={styles['projects-container']}>
                <Projects />
            </div>
            <div className={styles['contact-container']}>
                <Contact />
            </div>
        </div>
    )
}
