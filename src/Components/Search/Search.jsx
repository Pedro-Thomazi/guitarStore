import styles from './Search.module.css'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Search = () => {
  const navigate = useNavigate()
  const [query, setQuery] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()

    navigate('/search?q=' + query)
  }
  return (
    <div className={styles.seachContainer}>
      <form onSubmit={handleSubmit}>
        <input type="text"
        onChange={(e) => setQuery(e.target.value)}
        placeholder='O que você procura?' />
        <input className={styles.btnSearch} type="submit" value='Buscar' />
      </form>
    </div>
  )
}

export default Search