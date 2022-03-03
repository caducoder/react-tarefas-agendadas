import React from "react";
import Botao from "../Botao";

const Formulario = () => {

    return (
        <form>
            <div>
                <label>Adicione uma nova tarefa</label>
                <input 
                    type="text" 
                    name='tarefa'
                    placeholder="O que você quer estudar"
                    required
                />
            </div>
            <div>
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
            <Botao />
        </form>
    )
}

export default Formulario;