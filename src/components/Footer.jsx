import { useCart } from '../hooks/useCart'

const Footer = () => {
  const { cart } = useCart()

  return (
    <footer className='footer-data'>
      <span>
        {/* <p>{JSON.stringify(cart, null, 2)}</p> */}
      </span>
    </footer>
  )
}

export default Footer