import { useId } from "react"
import './Cart.css'
export function Cart (){
    const cartCheckBoxId = useId()
    return (
        <>
            <label htmlFor={cartCheckBoxId} className="cart-button"></label>
            <input id={cartCheckBoxId} type="checkbox" hidden/>

            <aside className="cart">
                <ul>
                    <li>
                        <img src="https://cdn.dummyjson.com/product-images/2/thumbnail.jpg" alt="" />
                        <div>
                            <strong>iphone</strong> - $300
                        </div>
                        <footer>
                            <small>
                                qtty :1
                            </small>
                            <button>+</button>
                        </footer>
                    </li>
                </ul>

                <button>Limpiar carrito</button>
            </aside>
        </>
    )
}