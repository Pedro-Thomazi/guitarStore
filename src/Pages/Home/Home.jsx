import { Link } from 'react-router-dom'
import styles from './Home.module.css'

import { allGuitars } from '../../data/guitars'
import Footer from '../../Components/Footer/Footer'

import SlideBack from '../../Components/SlideBack/SlideBack'

// const url = 'http://localhost:9001/allGuitars'

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.slideImages}>
        <SlideBack />
      </div>
      <span className={styles.title}>
        <h2>Destaques do mês!</h2>
      </span>
      <div className={styles.container}>
        <ul className={styles.guitarsList}>
          {allGuitars.map((guitar, id) => (
            <Link to={`/${guitar.name}`}>
              <li key={id} >
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

export default Main