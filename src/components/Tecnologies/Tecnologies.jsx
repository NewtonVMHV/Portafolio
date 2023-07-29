import React from 'react'
import style from "./Tecnologies.module.css";
import HTML from '../../resources/html.png';
import CSS from '../../resources/css.png';
import JavaScript from '../../resources/javascript2.png';
import PHP from '../../resources/PHP.png';
import Laravel from '../../resources/laravel.png';
import react from '../../resources/react.png';
import MySQL from '../../resources/mysql.png';
import mongoDB from '../../resources/mongoDB.png';
import Git from '../../resources/git.png';
import Docker from '../../resources/docker.png';
import Postman from '../../resources/postman.png';
import Vue from '../../resources/vue.png';
import Java from '../../resources/java.png';
import Python from '../../resources/python.png';

const Tecnologies = () => {
    const tecnologies = [
        { id: "1", name: "HTML", image: HTML },
        { id: "2", name: "CSS", image: CSS },
        { id: "3", name: "JavaScript", image: JavaScript },
        { id: "4", name: "PHP", image: PHP },
        { id: "5", name: "Laravel", image: Laravel },
        { id: "6", name: "React", image: react },
        { id: "7", name: "MySQL", image: MySQL },
        { id: "8", name: "Mongo", image: mongoDB },
        { id: "9", name: "Git", image: Git },
        { id: "10", name: "Docker", image: Docker },
        { id: "11", name: "Postman", image: Postman },
        { id: "12", name: "Vue", image: Vue },
        { id: "13", name: "Java", image: Java },
        { id: "14", name: "Python", image: Python },
    ];
    const hiddenTech = (name) => {
        // return false;
        return ["Vue","Java","Python"].includes(name);
    };
  return (
    <div className={style.technologies}>
      {tecnologies.map((technology) => (
        <figure key={technology.id} className={`${style.logo} ${hiddenTech(technology.name) ? ` ${style.opacity}` : ""}`}>
          <img src={technology.image} alt={technology.name} style={{width: 50,height: 50,}}/>
          <figcaption className={style.logoName}>{technology.name}</figcaption>
        </figure>
      ))}
    </div>
  )
}

export default Tecnologies