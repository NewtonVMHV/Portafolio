import React from 'react'
import style from "./Title.module.css";

const Title = ({ text, highlight }) => {
  return (
    <h2 className={style.title}>{text}{" "}<strong className={style.highlight}>{highlight}</strong></h2>
  )
}

export default Title