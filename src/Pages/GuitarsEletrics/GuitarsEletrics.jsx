import { Link } from 'react-router-dom'
import styles from './GuitarsEletrics.module.css'

import { eletricGuitars } from '../../data/guitars'
import Footer from '../../Components/Footer/Footer'

const GuitarEletrics = () => {

  return (
    <main className={styles.main}>
      <span className={styles.titles}>
        <h2>Guitarras</h2>
        <p>Guitarras Stratocaster, Les Paul, Telecaster e Semi Acústicas</p>
      </span>
      <div className={styles.container}>
        <ul className={styles.guitarsList}>
          {eletricGuitars.map((guitar, id) => (
              <Link key={id} to={`/${guitar.name}`}>
                <li>
                  <img src={guitar.image} alt={guitar.description} />
                  <p>{guitar.name}</p>
                  <h3>R${guitar.price}</h3>
                </li>
              </Link>
          ))}
        </ul>
      </div>

      <Footer />
    </main>
  )
}

export default GuitarEletrics