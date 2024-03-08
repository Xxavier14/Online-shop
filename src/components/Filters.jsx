import { useState } from "react";
import "./Filters.css";
export function Filters( {onChange}) {
    const [minPrice, setMinPrice] = useState(0)

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
        <label htmlFor="price">Price from:</label>
        <input type="range" id="price" min="0" max="3000" onChange={handleRangePrice}/>
        <span>{minPrice}</span>
      </div>
      <div className="">
        <label htmlFor="category">Categories</label>
        <select id="category" onChange={handleCategoryChange}>
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