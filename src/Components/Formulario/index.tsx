import React from "react";
import Botao from "../Botao";
import style from './Formulario.module.scss';

const Formulario = () => {

    return (
        <form className={style.novaTarefa}>
            <div className={style.inputContainer}>
                <label>Adicione uma nova tarefa</label>
                <input 
                    type="text" 
                    name='tarefa'
                    placeholder="O que você quer estudar"
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label>Tempo</label>
                <input 
                    type="time" 
                    step="1"
                    name="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>
            <Botao>Adicionar</Botao>
        </form>
    )
}

export default Formulario;