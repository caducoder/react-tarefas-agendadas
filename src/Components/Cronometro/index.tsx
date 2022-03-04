import Botao from "../Botao"
import { Relogio } from "./Relogio"
import style from './Cronometro.module.scss'
import { tempoParaSegundos } from "../../Common/utils/time"
import { ITarefa } from "../../Types"

interface IProps {
    selecionado: ITarefa | undefined
}

export const Cronometro = ({ selecionado }: IProps) => {
    console.log('conversão: ', tempoParaSegundos('01:02:01'))
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao>Começar</Botao>
        </div>
    )
}