import React from "react";
import style from './Botao.module.scss';

interface Props {
    children: string,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}

const Botao = ({ children, type, onClick }: Props) => {

    return (
        <button onClick={onClick} type={type ? type : 'button'} className={style.botao}>
            {children}
        </button>
    )
}

export default Botao;