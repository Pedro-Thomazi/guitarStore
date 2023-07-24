import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <input type="checkbox" name="" id="toggle" />
            <div className={styles.listContainer}>
                <ul className={styles.listLinks}>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/acoustics'>Acústicos</NavLink>
                    </li>
                    <li>
                        <NavLink to='/eletrics'>Elétricas</NavLink>
                    </li>
                    <li className={styles.ourStores}>
                        <NavLink to='/ourStores'>Nossas Lojas</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar