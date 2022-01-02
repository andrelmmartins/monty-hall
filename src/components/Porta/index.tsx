import Presente from '../Presente'
import styles from './Porta.module.css'

import PortaModel from '../../models/Porta'

interface PortaProps {
    porta: PortaModel,
    onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props : PortaProps) {

    const {porta} = props;
    const selecionada = porta.selecionada ? styles.selecionada : '';
    const aberta = porta.aberta ? styles.aberta : '';
    const presente = porta.aberta ? porta.temPresente ? (<Presente className={styles.presente}/>) : null : null;
    const alternarSelecao = e => props.onChange(porta.alternarSelecao());
    const abrir = e => {
        e.stopPropagation();
        props.onChange(porta.abrir());
    }

    return (
        <div className={`${styles.porta} ${selecionada} ${aberta}`}>
            <div className={styles.madeira} onClick={alternarSelecao}>
                <div className={styles.numero}><span>{porta.numero}</span></div>
                <div className={styles.macaneta} onClick={abrir}></div>

                {presente}
            </div>
            <div className={styles.chao}></div>
        </div>
    )

}