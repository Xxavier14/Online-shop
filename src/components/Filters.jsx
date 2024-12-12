import { useState, useId } from "react";
import "./Filters.css";
import { useFilters } from "../hooks/useFilters";

export function Filters() {
  const { filters, setFilters } = useFilters()
  const [minPrice, setMinPrice] = useState(0);
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleRangePrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleCategoryChange = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">

      <div className="">
        <label htmlFor={minPriceFilterId}>Price from:</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1800"
          onChange={handleRangePrice}
          value={filters.minPrice}
        />
        <span>{filters.minPrice}</span>
      </div>
      
      <div className="">
        <label htmlFor={categoryFilterId}>Categories:</label>
        <select id={categoryFilterId} onChange={handleCategoryChange}>
          <option value="all">All</option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">Fragrances</option>
          <option value="furniture">Furniture</option>
          <option value="groceries">Groceries</option>
        </select>
      </div>
    </section>
  );
}
