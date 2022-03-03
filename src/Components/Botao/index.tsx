import React from "react";
import style from './Botao.module.scss';

interface Props {
    children: string,
    type?: "button" | "submit" | "reset" | undefined
}

const Botao = ({children, type}: Props) => {

    return (
        <button type={type ? type : 'button'} className={style.botao}>
            {children}
        </button>
    )
}

export default Botao;