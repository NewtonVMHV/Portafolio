import React from 'react';
import style from "./Footer.module.css";
import Wrapper from '../Wrapper/Wrapper';

export default function Footer() {
  return (
    <footer className={style.footer}>
        <Wrapper>
            <div className={style.content}>
            <p>Hecho por Victor Manuel Hernandez Vargas</p>
            </div>
        </Wrapper>
    </footer>
  )
}
