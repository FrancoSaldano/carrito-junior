import { AddToCartIcon, CartIcon, ClearCartIcon } from './Icons'
import { useId } from 'react'
import { useCart } from '../hooks/useCart'

const CartItem = ({ thumbnail, title, quantity, addToCart }) => {
  return (
    <li >
      <img src={thumbnail} alt={title} />
      <strong>{title} </strong>
      <footer>
        <small>{quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

const Cart = () => {
  const cartCheckBoxId = useId()
  const { cart, cleanCart, addToCart } = useCart()
  return (
    <>
      <label htmlFor={cartCheckBoxId} className='cart-button'>
        <CartIcon />
      </label>
      <input type="checkbox" name="cartCheckBox" id={cartCheckBoxId} hidden />
      <aside className='cart'>
        <ul>
          {
            cart.map((product) => (
              <CartItem
                key={product.id}
                addToCart={() => addToCart(product)}
                {...product} />
            )
            )
          }

        </ul>
        <button onClick={() => cleanCart()}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}

export default Cart