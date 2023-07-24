import styles from './MyShopping.module.css'
import { Link } from 'react-router-dom'

const MyShopping = () => {
    return (
        <div className={styles.container}>
            <span className={styles.btns}>
                <Link className={styles.continue} to='/'>Continuar comprando</Link>
                <Link className={styles.finalize} to='/'>Finalizar compra</Link>
            </span>
            <p>Seu carrinho está vazio, <Link to='/'>clique aqui</Link> e continue comprando</p>
            <span className={styles.listContainer}>
                <ul className={styles.list}>
                    <li>
                        <i className="bi bi-telephone-fill"></i>
                        <p>(11) 9999-9999</p>
                    </li>
                    <li>
                        <i className="bi bi-shield-fill-check"></i>
                        <p>Ambiente 100% seguro</p>
                    </li>
                </ul>
                <hr />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id deleniti a recusandae hic harum sit porro fugit eum, atque perferendis quidem enim qui, dolores praesentium dolorum excepturi officia laudantium accusamus assumenda sed distinctio adipisci libero. Sapiente sunt culpa quos optio nam tenetur incidunt laboriosam nostrum quod eos, similique animi ex.</p>
            </span>
        </div>
    )
}

export default MyShopping