import Head from 'next/head'
import styles from '../styles/Home.module.css';

import Presente from '../components/Presente';
import { useRouter } from 'next/router';

export default function Home() {

  const router = useRouter();

  function iniciarJogo(quantPortas) {
      let temPresente = Math.floor(Math.random() * (quantPortas - 1)) + 1;
      router.push(`./jogo/${quantPortas}/${temPresente}`)
  }

  return (
    <>
      <Head>
        <title>Porta Premiada</title>
      </Head>

      <div className={styles.titulo}>
        <h1>Porta Premiada</h1>
        <Presente className={styles.presente}/>
      </div>

      <div className={styles.formulario}>

        <h4>Escolha uma quantidade de portas:</h4>

        <div className={styles.botoes}>
          <button type='button' onClick={() => iniciarJogo(3)}>3</button>
          <button type='button' onClick={() => iniciarJogo(4)}>4</button>
          <button type='button' onClick={() => iniciarJogo(5)}>5</button>
          <button type='button' onClick={() => iniciarJogo(6)}>6</button>
          <button type='button' onClick={() => iniciarJogo(7)}>7</button>
          <button type='button' onClick={() => iniciarJogo(8)}>8</button>
          <button type='button' onClick={() => iniciarJogo(9)}>9</button>
          <button type='button' onClick={() => iniciarJogo(10)}>10</button>
        </div>
              
      </div>
    </>
  )
}
