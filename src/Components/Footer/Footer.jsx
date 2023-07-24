import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.assessments}>
                <h3>Avaliações</h3>
                <span className={styles.stars}>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                </span>
            </div>
            <div className={styles.formForEmail}>
                <p>Cadastre seu E-mail para receber promoções!</p>
                <label>
                    <input type="text" placeholder='Nome' />
                </label>
                <label>
                    <input type="email" placeholder='E-mail' />
                </label>
                <input type="submit" value='Enviar' />
            </div>
            <div className={styles.makeForMe}>
                <p>Feito por <span>Pedro T</span></p>
            </div>
        </footer>
    )
}

export default Footer