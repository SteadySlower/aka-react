import React from 'react';
import style from './Button.module.scss'

function Button({ text, onClick }) {
    return <button className={style.button} onClick={onClick}>{text}</button>;
}
export default Button;