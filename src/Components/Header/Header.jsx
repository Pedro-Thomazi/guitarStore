import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import Search from '../Search/Search'

const Header = () => {
  return (
    <header className={styles.header}>
        <Link to='/my-shopping'><i className="bi bi-cart4"></i></Link>
        <Link to='/'>
            <h1>Guitarras Legais</h1>
        </Link>
        <div className={styles.search}>
          <Search />
        </div>
        <Link className={styles.localization} to='/ourStores'>
          <i className="bi bi-geo-alt-fill"></i>
          <p>Nossas lojas</p>
        </Link>
        <label className={styles.btnHambur} htmlFor="toggle">
            <i className="bi bi-list"></i>
        </label>
    </header>
  )
}

export default Header