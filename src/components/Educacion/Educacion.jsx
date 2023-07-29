import React from 'react';
import style from "./Educacion.module.css";
import Wrapper from "../Wrapper/Wrapper";
import Title from "../Title/Title";
import cetis from '../../resources/cetis.jpeg';
import oxford from '../../resources/oxford.jpg';
import itescham from '../../resources/itescham.jpeg';

export default function Educacion() {
  return (
    <section className={style.educacion} id="education">
        <Wrapper>
            <div className={style.content}>
                <div className={style.information}>
                    <Title text="Mi" highlight="Educación"/>
                    <p className={style.description}>
                    En este apartado podras encontrar la educación que se fue ejerciendo hasta la actualidad.
                    </p>
                    <hr/>
                </div>
                <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                        <img src={cetis} className="d-block w-100" style={{ width: 300,height: 600 }}/>
                        <div className="card carousel-caption d-none d-md-block">
                            <h5>Centro de Estudios Tecnologicos industrial y de servicios N. 82 "Miguel Hidalgo y Costilla"</h5>
                            <p>2013 - 2017</p>
                            <p>Técnico en Programación Informática</p>
                        </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                        <img src={oxford} class="d-block w-100" alt="..." style={{ width: 300,height: 600 }}/>
                        <div className="card carousel-caption d-none d-md-block">
                            <h5>Univerdad de Oxford</h5>
                            <p>2017 -2018</p>
                            <p>Diplomado en Física Matematica</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src={itescham} className="d-block w-100" alt="..." style={{ width: 300,height: 600 }}/>
                        <div className="card carousel-caption d-none d-md-block">
                            <h5>Tecnologico Nacional de México Campus Champotón</h5>
                            <p>2017 - 2022</p>
                            <p>Ingeniero en Sistemas Computacionales</p>
                        </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </Wrapper>
    </section>
  )
}
