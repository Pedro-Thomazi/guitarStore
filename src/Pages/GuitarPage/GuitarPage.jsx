import styles from './GuitarPage.module.css'

import image from '../../Images/guitar1.jpg'
import { Link } from 'react-router-dom'

import Footer from '../../Components/Footer/Footer'

const GuitarPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.principal}>
        <span>
          <h2 className={styles.title}>Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo</h2>
          <span className={styles.stars}>
            <i className="bi bi-star"></i>
            <i className="bi bi-star"></i>
            <i className="bi bi-star"></i>
            <i className="bi bi-star"></i>
            <i className="bi bi-star"></i>
            <p>( Avalie agora! )</p>
          </span>
        </span>
        <img className={styles.imageGuitar} src={image} alt="Guitarra" />
      </div>
      <hr />
      <div className={styles.price}>
        <p>Aproveite, ainda temos <span>1 item</span> no estoque</p>
        <p className={styles.oldPrice}>R$X,XXX.XX</p>
        <p className={styles.newPrice}>R$X,XXX.XX</p>
        <p>10 x de R$XXX.XX sem juros</p>
        <label className={styles.amount}>
          <p>Quantidade</p>
          <select id="quantidade">
            <option selected>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>Mais...</option>
          </select>
        </label>
        <button className={styles.buy}>COMPRAR</button>

        <input className={styles.input} type="checkbox" id="inputMore" />
        <label className={styles.more} htmlFor="inputMore">
          <i className="bi bi-caret-right-fill"></i>
          <p>Consulte opções de parcelamento</p>
        </label>
        <ul className={styles.listInstallments}>
          <li>1 x sem juros de R$X,XXX.XX (DESCONTO DE X%)</li>
          <li>2 x sem juros de R$XXX.XX</li>
          <li>3 x sem juros de R$XXX.XX</li>
          <li>4 x sem juros de R$XXX.XX</li>
          <li>5 x sem juros de R$XXX.XX</li>
          <li>6 x sem juros de R$XXX.XX</li>
          <li>7 x sem juros de R$XXX.XX</li>
          <li>8 x sem juros de R$XXX.XX</li>
          <li>9 x sem juros de R$XXX.XX</li>
          <li>10 x sem juros de R$XXX.XX</li>
        </ul>
      </div>
      <hr />
      <div className={styles.naoSei}>
        <p><i className="bi bi-upc-scan"></i><span className={styles.__price__}>R$ X,XXX.XX</span> à vista <span className={styles.__green__}>(com 10% de desconto no Pix / Boleto Bancário / 1 x no Cartão de Crédito.)</span></p>
      </div>
      <hr />
      <div className={styles.simuleFrete}>
        <p>Simule o frete e o prazo de entrega:</p>
        <input type="number" placeholder='Informe seu CEP' />
        <Link to='https://buscacepinter.correios.com.br/app/endereco/index.php' target='blank'>Não sabe o CEP?</Link>
      </div>
      <hr />
      <div className={styles.suggestions}>
        <h3>Sugestões de compra</h3>
        <ul className={styles.listSuggestions}>
          <li>
            <div className={styles.imageSuggestions}></div>
            <p className={styles.titleSuggestions}>Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo</p>
            <span className={`${styles.stars} ${styles.starsSuggestions}`}>
              <i className="bi bi-star"></i>
              <i className="bi bi-star"></i>
              <i className="bi bi-star"></i>
              <i className="bi bi-star"></i>
              <i className="bi bi-star"></i>
            </span>
            <p className={styles.priceSuggestions}><span>R$XXX.XX</span> à vista</p>
            <p className={styles.priceInstallmentsSuggestions}>10 x de <span>R$XX.XX</span> sem juros</p>
          </li>
          <li>
            <div className={styles.imageSuggestions}></div>
            <p className={styles.titleSuggestions}>Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo</p>
            <span className={`${styles.stars} ${styles.starsSuggestions}`}>
              <i className="bi bi-star"></i>
              <i className="bi bi-star"></i>
              <i className="bi bi-star"></i>
              <i className="bi bi-star"></i>
              <i className="bi bi-star"></i>
            </span>
            <p className={styles.priceSuggestions}><span>R$XXX.XX</span> à vista</p>
            <p className={styles.priceInstallmentsSuggestions}>10 x de <span>R$XX.XX</span> sem juros</p>
          </li>
        </ul>
      </div>
      <hr />
      <div className={styles.details}>
        <h3>Detalhes do produto</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam in ex labore repellendus esse eos debitis accusantium dignissimos consectetur. Velit perferendis corporis deleniti. Doloremque sapiente, dignissimos natus molestias rem ratione accusantium aperiam quod? Harum quia maiores vitae at reiciendis consequatur, modi ipsum dolorem doloribus temporibus iusto dolore, inventore eaque nostrum! Laborum, labore hic atque, autem dolores laudantium aut facilis quod voluptatum aliquid ipsum distinctio necessitatibus quidem quibusdam dolor fuga voluptatibus expedita? Saepe consectetur, provident inventore amet ab ex numquam ad suscipit. Possimus deserunt, error optio modi dignissimos, consequatur deleniti quam cupiditate consequuntur voluptas saepe qui fugiat eum minima magnam, eaque ipsa mollitia impedit in ipsum illum quaerat temporibus odio iste? Tempore voluptas laboriosam nam at nulla asperiores earum, labore quisquam eius repudiandae distinctio, dignissimos eveniet. Reprehenderit iste ex magni voluptatibus ipsum doloremque, facilis amet recusandae eveniet, voluptatum unde! Ea dicta quam odit molestiae, natus tempore id, assumenda consectetur ipsa sequi voluptate ex totam illo? Quasi ipsa doloribus vero fugit quae dolore cupiditate ab facere voluptatibus deserunt, accusantium ipsum ducimus numquam voluptate consequuntur doloremque. Asperiores, sapiente. Ut accusamus vel explicabo assumenda exercitationem facilis facere architecto debitis incidunt! Totam, dolorem tempora nihil quis mollitia laborum ea, ex excepturi labore temporibus quod voluptate commodi a atque dolores animi delectus nam quae quibusdam expedita. Nulla nam asperiores repellat accusamus veritatis dolorum. Adipisci, expedita corporis?</p>
      </div>
      <hr />
      <div className={styles.usersOpnions}>
        <h3>Opiniões dos consumidores</h3>
        <textarea cols="30" rows="10" placeholder='Deixe sua opinião...'></textarea>

        <input className={styles.inputCommetshide} type="checkbox" name="" id="commentsUsers" />
        <label className={styles.moreHideComments} htmlFor="commentsUsers">
          <p className={styles.moreCommets}>Mostrar comentários</p>
          <p className={styles.hideCommets}>Ocutar comentários</p>
        </label>
        <ul className={styles.listComments}>
          <li className={styles.usersComments}>
            <span>
              <p className={styles.nameUser}>Arivaldinho</p>
              <p className={styles.userComment}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A libero asperiores dolorum illum error, sunt perferendis maiores earum odio culpa, quas nihil placeat nisi provident doloremque reiciendis? Recusandae nostrum fugiat dolores distinctio. Libero id eveniet eius. Dignissimos illum vel nihil. Incidunt veritatis quos ab consequatur esse repellendus natus. Modi quas, quo ea beatae doloremque totam sunt asperiores ut accusantium consectetur voluptatem molestias eum sint sed commodi rem optio possimus, nobis in minima sit facere inventore iste nostrum? At pariatur ut soluta eos sit! Ad explicabo odit cum laboriosam, sapiente iste quae, blanditiis saepe deserunt itaque, aut fugit consequuntur ut in!</p>
            </span>
          </li>
          <li className={styles.usersComments}>
            <span>
              <p className={styles.nameUser}>Cruzisvalda</p>
              <p className={styles.userComment}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A libero asperiores dolorum illum error, sunt perferendis maiores earum odio culpa, quas nihil placeat nisi provident doloremque reiciendis? Recusandae nostrum fugiat dolores distinctio. Libero id eveniet eius. Dignissimos illum vel nihil. Incidunt veritatis quos ab consequatur esse repellendus natus. Modi quas, quo ea beatae doloremque totam sunt asperiores ut accusantium consectetur voluptatem molestias eum sint sed commodi rem optio possimus, nobis in minima sit facere inventore iste nostrum? At pariatur ut soluta eos sit! Ad explicabo odit cum laboriosam, sapiente iste quae, blanditiis saepe deserunt itaque, aut fugit consequuntur ut in!</p>
            </span>
          </li>
          <li className={styles.usersComments}>
            <span>
              <p className={styles.nameUser}>Chitos</p>
              <p className={styles.userComment}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A libero asperiores dolorum illum error, sunt perferendis maiores earum odio culpa, quas nihil placeat nisi provident doloremque reiciendis? Recusandae nostrum fugiat dolores distinctio. Libero id eveniet eius. Dignissimos illum vel nihil. Incidunt veritatis quos ab consequatur esse repellendus natus. Modi quas, quo ea beatae doloremque totam sunt asperiores ut accusantium consectetur voluptatem molestias eum sint sed commodi rem optio possimus, nobis in minima sit facere inventore iste nostrum? At pariatur ut soluta eos sit! Ad explicabo odit cum laboriosam, sapiente iste quae, blanditiis saepe deserunt itaque, aut fugit consequuntur ut in!</p>
            </span>
          </li>
        </ul>

      </div>


      <Footer />
    </div>
  )
}

export default GuitarPage