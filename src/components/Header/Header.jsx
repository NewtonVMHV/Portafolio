import React from 'react';
import style from "./Header.module.css";
import NavBar from '../Menu/Navbar';
import Socials from '../Socials/Socials';
import Wrapper from '../Wrapper/Wrapper';

const Header = () => {
  return (
    <header className={style.header} id="header">
      <Wrapper>
        <div className={style.content}>
            <div className={style.navigation}>
              <a className={style.logo} href="#">
                [Victor]
              </a>
              <NavBar/>
              <Socials/>
            </div>
          </div>
      </Wrapper>
    </header>
  )
}

export default Header