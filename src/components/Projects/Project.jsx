import React from "react";
import style from "./Projects.module.css";
import Wrapper from "../Wrapper/Wrapper";
import Title from "../Title/Title";
import { FaGithub, FaLaravel, FaBootstrap, FaJava, FaAndroid, FaHtml5, FaCss3} from "react-icons/fa";
import {SiJavascript, SiMysql} from "react-icons/si";
import e from '../../resources/e.png';
import d from '../../resources/d.png';
import icono from '../../resources/icono.jpg';
import OIP from '../../resources/OIP.jpeg';
import perfil from '../../resources/perfil.jpg';

export const Projects = () => {
  return (
    <section className={style.projects} aria-label="My Projects" id="project">
      <Wrapper>
        <div className={style.content}>
            <div className={style.information}>
                <Title text="Mis" highlight="Proyectos"/>
                <p className={style.description}>
                Estos son los proyectos de mi portafolio. Tú puedes revisar
                algunos de los proyectos en los que he estado trabajando.
                </p>
                <hr/>
                <div className="album py-5 bg-light text-black">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img src={OIP} className="bd-placeholder-img card-img-top" width="100%" height="225"/>
                                    <div className="card-body">
                                        <p className="card-text">Gunnibu es una aplicación móvil, que ayuda para la educación y aumentar nuestra curiosidad científica.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <a href="https://github.com/NewtonVMHV/Gunnibu" target="_blank" className="btn btn-sm btn-outline-secondary"><FaGithub/></a>
                                            </div>
                                            <small className="text-muted"><FaJava/><FaAndroid/></small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img src={e} className="bd-placeholder-img card-img-top" width="100%" height="225"/>
                                    <div className="card-body">
                                        <p className="card-text">El sistema de Elecciones para llevar a cabo todas las capturas de las diferentes personas y manejar las solicitudes.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <a href="https://github.com/NewtonVMHV/Sistema-Elecciones-V2" target="_blank" className="btn btn-sm btn-outline-secondary"><FaGithub/></a>
                                            </div>
                                            <small className="text-muted"><FaLaravel/><FaBootstrap/><SiJavascript/><SiMysql/></small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img src={d} className="bd-placeholder-img card-img-top" width="100%" height="225"/>
                                    <div className="card-body">
                                        <p className="card-text">La Descerción es una herramienta que permita el acompañamiento de los estudiantes, bajar los índices y deserción.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <a href="https://github.com/NewtonVMHV/Desercion" target="_blank" className="btn btn-sm btn-outline-secondary"><FaGithub/></a>
                                            </div>
                                            <small className="text-muted"><FaLaravel/><FaBootstrap/><SiJavascript/><SiMysql/></small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img src={icono} className="bd-placeholder-img card-img-top" width="100%" height="225"/>
                                    <div className="card-body">
                                        <p className="card-text">La Palapa de Champotón es una página web para el restaurante y obtener un mayor alcance con sus clientes.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <a href="https://github.com/NewtonVMHV/LaPalapaChampoton/tree/main" target="_blank" className="btn btn-sm btn-outline-secondary"><FaGithub/></a>
                                                <a href="https://lapalapadechampoton.netlify.app/" target="_blank" className="btn btn-sm btn-outline-secondary">Demo</a>
                                            </div>
                                            <small className="text-muted"><FaHtml5/><FaCss3/><SiJavascript/></small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
      </Wrapper>
    </section>
  );
};