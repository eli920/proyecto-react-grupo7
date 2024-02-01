import React from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <div >
                <Link href='/'>
                    <h1>Seven  Indumenatria</h1>
                </Link>
            </div>

            <nav>
                <ul>
                    <ul>
                        <li>
                            <Link href='nosotros'>
                                Nosotros
                            </Link>
                        </li>
                    </ul>
                    <li>
                        <Link href='mujer'>
                            Mujer
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href='hombre'>
                            Hombre
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
