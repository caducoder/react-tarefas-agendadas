import React from "react";
import style from './Lista.module.scss';

const Lista = () => {
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                <li className="item">
                    <h3>React</h3>
                    <span>02:00:00</span>
                </li>
                <li>
                    <h3>Javascript</h3>
                    <span>01:00:00</span>
                </li>
            </ul>
        </aside>
    )
}

export default Lista;