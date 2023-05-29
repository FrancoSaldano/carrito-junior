import { AddToCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

const Products = ({ products }) => {

  const { addToCart } = useCart()

  return (
    <main>
      <ul>
        {products.map(product => {
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <p>{product.title}</p> <p>${product.price}</p>
              </div>
              <button onClick={() => addToCart(product)}>
                <AddToCartIcon />
              </button>
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export default Products