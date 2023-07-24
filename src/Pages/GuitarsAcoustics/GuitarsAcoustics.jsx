import { Link } from 'react-router-dom'
import styles from './GuitarsAcoustics.module.css'

import { acousticGuitars } from '../../data/guitars'
import Footer from '../../Components/Footer/Footer'

const GuitarAcoustics = () => {

  return (
    <main className={styles.main}>
      <span className={styles.titles}>
        <h2>Violões</h2>
        <p>Violões com cordas de Nylon ou de Aço</p>
      </span>
      <div className={styles.container}>
        <ul className={styles.guitarsList}>
          {acousticGuitars.map((guitar, id) => (
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

export default GuitarAcoustics