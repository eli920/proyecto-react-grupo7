import Link from "next/link"
import Layout from "@/components/layout"
import styles from '../styles/Home.module.css'

export default function AboutPage() {
    return (
        <Layout title='Nosotros' className='module.css'>
            <h1>AboutPage</h1>
            <Link href='/'>Home</Link>
            <p>Somos una empresa de indumenatria casual para hombre y mujer</p>
        </Layout>
    )
}