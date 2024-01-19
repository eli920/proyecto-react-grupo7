import React from 'react';
import style from '../styles/footer.module.css';


const Footer = () => {
    return (
      <footer className={style.footer}>
        <div className={style.social_media}>
          <h3 className={style.h3}>Redes Sonpmciales</h3>
          <ul className={style.ul}>
            <li className={style.li}><a className={style.a} href="https://facebook.com">Facebook</a></li>
            <li className={style.li}><a className={style.a} href="https://twitter.com">Twitter</a></li>
            <li className={style.li}><a className={style.a} href="https://instagram.com">Instagram</a></li>
            <li className={style.li}><a className={style.a} href="https://pinterest.com">Pinterest</a></li>
          </ul>
        </div>
  
        <div className={style.contact_info}>
          <h3 className={style.h3}>Información de Contacto</h3>
          <p className={style.p}>Dirección: Calle 123, Ciudad, País</p>
          <p className={style.p}>Email: info@example.com</p>
          <p className={style.p}>Teléfono: +123 456 789</p>
        </div>
  
        <div className={style.subscribe}>
          <h3 className={style.h3}>Suscríbete a nuestro boletín</h3>
          <p className={style.p}>Recibe las últimas novedades y ofertas especiales directamente en tu correo.</p>
          <form className={style.form}>
            <input className={style.input} type="email" placeholder="Tu correo electrónico" />
            <button className={style.button} type="submit">Suscribirse</button>
          </form>
        </div>
  
        <div className={style.useful_links}>
          <h3 className={style.h3}>Enlaces Útiles</h3>
          <ul className={style.ul}>
            <li className={style.li}><a className={style.a} href="/politica-de-privacidad">Política de Privacidad</a></li>
            <li className={style.li}><a className={style.a} href="/terminos-y-condiciones">Términos y Condiciones</a></li>
            <li className={style.li}><a className={style.a} href="/preguntas-frecuentes">Preguntas Frecuentes</a></li>
          </ul>
        </div>
  
        <div className={style.copyright}>
          <p className={style.p}>&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
        </div>
      </footer>
    );
  };

export default Footer;