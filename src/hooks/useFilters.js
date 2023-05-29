import { useContext } from "react"
import { FilterContext } from "../context/filters"

export function useFilters() {
  const { filters, setFilters } = useContext(FilterContext)
  const { category, minPrice } = filters

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= minPrice &&
        (category === "all" || category === product.category)
      )
    })
  }
  return { filterProducts, filters, setFilters }
}
