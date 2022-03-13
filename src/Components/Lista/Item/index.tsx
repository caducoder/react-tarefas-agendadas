import { ITarefa } from '../../../Types';
import style from './Item.module.scss';

interface IProps extends ITarefa {
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

const Item = ({ tarefa, tempo, selecionado, completado, id, selecionaTarefa }: IProps) => {
    return (
        <li
            className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`}
            onClick={() => !completado && selecionaTarefa({
                tarefa, tempo, selecionado, completado, id
            })}

        >
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span className={style.concluido}></span>}
        </li>
    )
}

export default Item;