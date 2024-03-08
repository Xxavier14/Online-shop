import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { products as initialProducts } from "./mock/products.json";
import { useState } from "react";
import { Footer } from "./components/Footer";
import { IS_DEVELOPMENT } from "./config";
import { useFilters } from "./hooks/useFilters";
import "./App.css";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/cart";

function App() {
  const [products] = useState(initialProducts);
  const {filters, filterProducts} = useFilters()
  const filteredProducts = filterProducts(products)

  

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      { IS_DEVELOPMENT && <Footer/>}
    </CartProvider>
  );
}

export default App;
