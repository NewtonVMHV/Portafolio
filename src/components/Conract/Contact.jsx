import React from 'react'
import style from "./Contact.module.css";
import Title from '../Title/Title';
import Wrapper from '../Wrapper/Wrapper';
import Socials from '../Socials/Socials';
import profil from '../../resources/profil.jpg';

const Contact = () => {
  return (
    <section id='contact'>
        <Wrapper>
            <Title highlight="Contactame"/>
            <div className={style.content}>
                <div className={style.resume}>
                    <p className={style.text}>
                    Estoy disponible en casi todas 
                    las redes sociales. Puede enviarme un mensaje,
                    le responderé dentro de las 24 horas. Siempre puedes contactarme
                    por los siguientes medios.
                    </p>
                    <p className={style.social}>
                    <Socials/>
                    </p>
                </div>
                <div className={style.stack}>
                    <img src={profil}  style={{
                        width: 300,
                        height: 300,
                        borderRadius:'50%',
                        }}></img>
                </div>
            </div>
        </Wrapper>
    </section>
  )
}

export default Contact