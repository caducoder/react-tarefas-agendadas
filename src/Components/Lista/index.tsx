import { ITarefa } from "../../Types";
import Item from "./Item";
import style from './Lista.module.scss';

interface IProps {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

const Lista = ({tarefas, selecionaTarefa}: IProps) => {
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item 
                        selecionaTarefa={selecionaTarefa}
                        key={index} 
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;