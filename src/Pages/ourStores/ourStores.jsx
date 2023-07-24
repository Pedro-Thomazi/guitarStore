import styles from './ourStores.module.css'

import afeganistao from '../../Images/storesImages/loja-do-afeganistao.png'
import tokyo from '../../Images/storesImages/loja-tokyo.png'


const ourStores = () => {
    const stores = [
        {
            nome: 'LOJA AFEGANISTÃO',
            imagem: afeganistao,
            rua: 'Rua XXXX XX XXXXXXXXXX, XXXX',
            cidade: 'Takhte Waras, Afeganistão',
            cep: 'XXXXX-XXX',
            telefone: '(+93)XXXX-XXXX',
            horario: 'Segunda à Segunda: 5h às 0h',
            feriados: 'Feriados: 4h às 0h'
        },
        {
            nome: 'LOJA TÓKYO',
            imagem: tokyo,
            rua: 'Rua XXXXXX XXXXXX, XXX',
            cidade: 'Nihonbashihoridomecho, Chuo, Tóquio, Japão',
            cep: 'XXXXX-XXX',
            telefone: '(xx)XXXX-XXXX',
            horario: 'Segunda à Segunda: 4h às 21h',
            feriados: 'Feriados: 3h às 21h'
        },
    ]
  return (
    <main className={styles.container}>
        <h1 className={styles.title}>Guitarras Legais Megastore - Nossas Lojas</h1>
        <div className={styles.stores}>
            <ul>
                {stores.map((store, id) => (
                    <li key={id}>
                    <h2>{store.nome}</h2>
                    <div className={styles.storeDetails}>
                        <img src={store.imagem} alt={store.nome} />
                        <span>
                            <h2>{store.nome}</h2>
                            <p>{store.rua}</p>
                            <p>{store.cidade}</p>
                            <p>CEP: {store.cep}</p>
                            <p>Telefone Fixo: {store.telefone}</p>
                            <h3>Horário de funcionamento</h3>
                            <p>{store.horario}</p>
                            <p>{store.feriados}</p>
                        </span>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    </main>
  )
}

export default ourStores