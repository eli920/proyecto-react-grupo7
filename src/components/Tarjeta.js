import React from 'react';
import style from '../styles/tarjetas.module.css';

const Tarjeta = ({descripcion}) => {

    // Destructurar las propiedades de descripcion
    const {image, title, text, bgColor} = descripcion; //Un objeto

    return (
        <>
        <section className={style.section}>
        <figure className={style.figure}>
            <img className={style.image} src={style.image} alt={style.text} />
            <div className={style.div}>
                <h2 className={style.h2}>{title}</h2>
                <figcaption className={style.figcaption}>{text}</figcaption>
            </div>
        </figure>
        </section>
        </>
    )
}

export default Tarjeta