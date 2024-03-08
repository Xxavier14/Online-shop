import { useState, useId} from "react";
import "./Filters.css";
export function Filters( {onChange}) {
    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleRangePrice = (event) => {
        setMinPrice(event.target.value)
        onChange( prevState => (
            {
                ...prevState,
                minPrice: event.target.value
            }
        ))
    }

    const handleCategoryChange = (event) => {
        onChange (prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }
    return (
    <section className="filters">
      <div className="">
        <label htmlFor={minPriceFilterId}>Price from:</label>
        <input type="range" id={minPriceFilterId} min="0" max="1800" onChange={handleRangePrice}/>
        <span>{minPrice}</span>
      </div>
      <div className="">
        <label htmlFor={categoryFilterId}>Categories</label>
        <select id={categoryFilterId} onChange={handleCategoryChange}>
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
          <option value="fragrances">Fragrances</option>
          <option value="skincare">Skincare</option>
          <option value="groceries">Groceries</option>
          <option value="home-decoration">Home Decoration</option>
        </select>
      </div>
    </section>
  );
}
