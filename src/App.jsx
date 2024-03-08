import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { products as initialProducts } from "./mock/products.json";
import "./App.css";
import { useState, createContext } from "react";

function useFilters (){
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (product.category === filters.category || filters.category === "all")
      );
    });
  };

  return {setFilters, filterProducts}
}

function App() {
  const [products] = useState(initialProducts);
  const {filterProducts, setFilters} = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters}/>
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
