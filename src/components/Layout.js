import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

function Layout({ title, keywords, description, children }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />

            </Head>
            <div className={styles.container}>
                {children}
            </div>
        </div>
    )
}

Layout.defaultProps = {
    title: 'Indumentaria',
    description: 'Seven Indumentaria para todas las edades',
    keywords: 'indumentaria, ropa, fashion'
}

export default Layout