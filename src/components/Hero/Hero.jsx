import React from 'react';
import style from "./Hero.module.css";
import Wrapper from '../Wrapper/Wrapper';
import perfil from '../../resources/perfil.jpg';
import CV from '../../resources/Curricullum - Victor Hernandez.pdf';

const Hero = () => {
  return (
    <main className={style.hero}>
        <Wrapper>
            <div className={style.content}>
                <div className={style.wrapperPhoto}>
                    <img src={perfil}  style={{
                        width: 300,
                        height: 300,
                        borderRadius:'50%',
                        }}></img>
                </div>
                <div className={style.information}>
                    <p className={style.name}>Víctor Manuel Hernández Vargas Vargas</p>
                    <h1 className={style.title}>
                        <strong className={style.highlightBlue}>Software</strong>{" "}
                        Engineer
                    </h1>
                    <p className={style.description}>
                    El Ingeniero de software desarrolla sistemas y programas
                    para empresas con productos que abarcan desde aplicaciones y juegos 
                    hasta sistemas operativos y de control de redes. 
                    </p>
                    <a className={style.button} href={CV} download>
                    Descarga CV
                    </a>
                </div>
            </div>
        </Wrapper>
    </main>
  )
}

export default Hero