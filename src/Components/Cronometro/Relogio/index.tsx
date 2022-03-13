import { segundosParaMinutos } from '../../../Common/utils/time'
import style from './Relogio.module.scss'

interface IProps {
    tempo: number | undefined
}

export const Relogio = ({ tempo = 0 }: IProps) => {
    const [minDezena, minUnidade, segDezena, segUnidade] = segundosParaMinutos(tempo);
    return (
        <>
            <span className={style.relogioNumero}>{minDezena}</span>
            <span className={style.relogioNumero}>{minUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segDezena}</span>
            <span className={style.relogioNumero}>{segUnidade}</span>
        </>
    )
}