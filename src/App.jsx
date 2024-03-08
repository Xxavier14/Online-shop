import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { products as initialProducts } from "./mock/products.json";
import "./App.css";
import { useState } from "react";
import { Footer } from "./components/Footer";
import { IS_DEVELOPMENT } from "./config";
import { useFilters } from "./hooks/useFilters";

function App() {
  const [products] = useState(initialProducts);
  const {filters, setFilters, filterProducts} = useFilters()
  const filteredProducts = filterProducts(products)

  

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      { IS_DEVELOPMENT && <Footer filters={filters}/>}
    </>
  );
}

export default App;
