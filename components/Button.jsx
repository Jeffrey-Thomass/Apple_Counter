import React from 'react'
import styles from "./Button.module.css"
export default function Button({imageUrl , title , clickHandler , children}) {
  return (
    <>
    <button className={styles.button} onClick={clickHandler}>
        <img src={imageUrl} alt=""  title={title}/>
    </button>
    <span>{children}</span>
    </>
  )
}
