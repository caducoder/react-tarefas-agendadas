export const tempoParaSegundos = (tempo: string) => {
    const [horas = '0', min = '0', seg = '0'] = tempo.split(':')

    const horasEmSegundos = Number(horas) * 3600;
    const minutosEmSegundos = Number(min) * 60;
    return horasEmSegundos + minutosEmSegundos + Number(seg);
}

export const segundosParaMinutos = (seg: number) => {
    let minutos = Math.trunc(seg / 60).toString();
    let segundos = (seg % 60).toString();
    let tempo = `${minutos.padStart(2, '0')}${segundos.padStart(2, '0')}`
    return tempo;
}