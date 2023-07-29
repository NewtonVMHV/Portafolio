import React from "react";
import style from "./Menu.module.css";

export const NavBar = () => {
  const options = [
    { id: "1", value: "Mi stack", anchor: "#about" },
    { id: "2", value: "Sobre Mí", anchor: "#about" },
    { id: "3", value: "Educación", anchor: "#education" },
    { id: "4", value: "Proyectos", anchor: "#project" },
    { id: "5", value: "Contacto", anchor: "#contact" },
  ];

  return (
    <nav className={style.nav}>
      <ul className={style.menu}>
        {options.map((option) => (
          <li key={option.id}>
            <a className={style.link} href={option.anchor}>
              {option.value}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default NavBar;