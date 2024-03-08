import { useId } from "react"
import './Cart.css'
import { useCart } from "../hooks/useCart"
import {CartIcon} from '../components/Icons.jsx'

function CartItem ( { thumbnail, title, price, description, quantity, addToCart}){
    return(
        <li>
        <img src={thumbnail} alt={description} />
        <div>
            <strong>{title}</strong> - ${price}
        </div>
        <footer>
            <small >
                Amount : {quantity}
            </small>
            <button onClick={addToCart}>+</button>
        </footer>
    </li>
    )
}
export function Cart (){
    const cartCheckBoxId = useId()
    const {cart, clearCart, addToCart} = useCart()

    
    return (
        <>
            <label htmlFor={cartCheckBoxId} className="cart-button">
            <CartIcon />
            </label>
            <input id={cartCheckBoxId} type="checkbox" hidden/>

            <aside className="cart">
                <ul>
                    {cart.map(product => <CartItem key={product.id} {...product} addToCart={()=>{addToCart(product)}}/>
                    )}
                </ul>

                <button onClick={clearCart}>Limpiar carrito</button>
            </aside>
        </>
    )
}