import { useEffect, useState } from 'react';
import Porta from '../../../components/Porta';
import styles from '../../../styles/Jogo.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';

import { atualizarPortas, criarPortas } from '../../../functions/portas';

export default function Jogo() {

    const router = useRouter();
    const [portas, setPortas] = useState([]);

    useEffect(() => {
        const quantPortas = +router.query.quantPortas;
        const temPresente = +router.query.temPresente;

        setPortas(criarPortas(quantPortas, temPresente));
    }, [router?.query])

    return (
        <div className="tela">

        <div className={styles.portas}>
            {
            portas.map(porta => (
                <Porta porta={porta} key={porta.numero} onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
            )) 
            }
        </div>

        <div className={styles.botao}>
            <Link href="../../.././">
            <button type="button"><span>◀</span> Reiniciar Jogo</button>
            </Link>
        </div>

        </div>
    )
}
