import PortaModel from '../models/Porta';

export function criarPortas(quantidade: number, selecionada: number): PortaModel[] {
    return Array.from({ length: quantidade}, (_, i) => {
        const numero = i + 1;
        const temPresente = numero === selecionada;
        return new PortaModel(numero, temPresente, false, false);
    })
}

export function atualizarPortas(portas: PortaModel[], modificada: PortaModel): PortaModel[] {
    return portas.map(porta => {
        if (porta.numero === modificada.numero) {
            return modificada;
        } else {
            return modificada.aberta ? porta : porta.desselecionar()
        }
    })
}