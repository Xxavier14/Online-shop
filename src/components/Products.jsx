import { useCart } from '../hooks/useCart';
import './Products.css'
export function Products({ products }) {
  const { addToCart, cart, removeToCart} = useCart()

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
              <button style={{backgroundColor: isProductInCart ? 'rgba(180,60,66,.8)' : 'rgba(60,179,113,.5'}}
              onClick={()=> isProductInCart? removeToCart(product) : addToCart(product) }>
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
