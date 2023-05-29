import './App.css'
import Products from './components/Products'
import Header from './components/Header'
import Cart from './components/Cart'
import { products as initialProducts } from './mocks/products.json'
import { CartProvider } from './context/cart'
import { useFilters } from './hooks/useFilters'
import Footer from './components/Footer'

function App() {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
  )
}

export default App
