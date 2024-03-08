import { useCart } from '../hooks/useCart';
import './Products.css'
export function Products({ products }) {
  const { addToCart, cart} = useCart()

  const checkProductInCart = product => {
    return cart.some( item => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {products.slice(0, 10).map( product => {
          const isProductInCart = checkProductInCart(product)
          return(
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div className="">
              <strong>{product.title} - ${product.price}</strong>
            </div>
            <div >
              <button onClick={()=> addToCart(product) }>
                {
                  isProductInCart? 'Quitar del carrito' : 'Añadir al carrito'
                }
              </button>
            </div>
          </li>
        )})}
      </ul>
    </main>
  );
}
