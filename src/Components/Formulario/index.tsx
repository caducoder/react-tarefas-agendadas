import React, { useState } from "react";
import { ITarefa } from "../../Types";
import Botao from "../Botao";
import style from './Formulario.module.scss';
import { v4 as uuidv4 } from 'uuid';

interface ISetTarefa {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

const Formulario = ({setTarefas}: ISetTarefa) => {
    const [values, setValues] = useState(
        {tarefa: '', tempo: '00:00:00'}
    )

    const handleTimeChange = (ev: { target: { value: string; }; }) => {
        setValues({...values, tempo: ev.target.value})
    }

    const handleTextChange = (ev: { target: { value: string; }; }) => {
        setValues({...values, tarefa: ev.target.value})
    }

    const addTarefa = (ev: React.FormEvent) => {
        ev.preventDefault();
        setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas, 
                {...values, selecionado: false, completado: false, id: uuidv4()}
            ]
        )
        setValues({tarefa: '', tempo: '00:00:00'})
    }

    
    return (
        <form className={style.novaTarefa} onSubmit={addTarefa}>
            <div className={style.inputContainer}>
                <label>Adicione uma nova tarefa</label>
                <input 
                    type="text" 
                    name='tarefa'
                    placeholder="O que você quer estudar"
                    required
                    value={values.tarefa}
                    onChange={handleTextChange}
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
                    value={values.tempo}
                    onChange={handleTimeChange}
                />
            </div>
            <Botao type="submit">Adicionar</Botao>
        </form>
    )
}

export default Formulario;