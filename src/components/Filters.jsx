import { useContext, useState, useId } from 'react'
import { useFilters } from '../hooks/useFilters'

const Filters = () => {
  const inputMinPrice = useId()
  const inputCategory = useId()

  const [actualMinPrice, setActualMinPrice] = useState(0)
  const { filters, setFilters } = useFilters()


  const handleMinPrice = (e) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }
  const handleChangeCategory = (e) => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (
    <section>
      <div>
        <label htmlFor={inputMinPrice}>Price</label>
        <input type="range" id={inputMinPrice} min={0} max={2000}
          value={filters.minPrice}
          onChange={handleMinPrice}
        />
        <span>{filters.minPrice}</span>
        <label htmlFor={inputCategory}>Category</label>
        <select name="Category" id={inputCategory} onChange={handleChangeCategory}>
          <option value="all">Todos</option>
          <option value="home-decoration">Home decoration</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>
    </section>
  )
}

export default Filters