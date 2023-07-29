import React from 'react';
import style from "./About.module.css";
import Wrapper from '../Wrapper/Wrapper';
import Title from '../Title/Title';
import Tecnologies from '../Tecnologies/Tecnologies';
const About = () => {
  return (
    <section className={style.about} id="about">
        <Wrapper>
            <div className={style.content}>
                <div className={style.resume}>
                    <Title text="Sobre" highlight="Mí" />
                    <p className={style.text}>
                    Me llamo Víctor Manuel Hernandez Vargas, nací en la ciudad de Campeche
                    en la fecha 20 de diciembre de 1998.
                    <br />
                    A lo largo de mi vida me gusta aprender las diferentes tecnologías como 
                    el desarrollo web, inteligencia artificial, robótica y realidad aumentada.
                    Llevo haciendo aplicaciones y páginas web de forma profesional y activa durante
                    los últimos años. Puedo aprender nuevas tecnologías con rapidez,
                    y de hecho, me encanta hacerlo.
                    </p>
                </div>
                <div className={style.stack}>
                    <Title text="Mi" highlight="stack" />
                    <Tecnologies/>
                </div>
            </div>
        </Wrapper>
    </section>
  )
}

export default About