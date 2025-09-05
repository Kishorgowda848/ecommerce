import { useContext } from "react"
import CartContext from "../../Context/CartContext"
import './index.css'
export default function AddToCart({ product }) {

    const { descQuantity, increaseQuantity, cart } = useContext(CartContext);

    const increase = () => {
        increaseQuantity(product)
    }
    const desc = () => {
        descQuantity(product)
    }

    console.log("AddToCart ", product.id)

    return <>
        {!cart[product.id] ?
            <div className="btn">
                <button onClick={increase} className="btn-add-to-cart">Add To Cart</button>
            </div>
            :
            <div className="btn">
                <button onClick={desc}>-</button>
                <div className="no-of-tems">{cart[product.id].quantity} </div>
                <button onClick={increase}>+</button>
            </div>
        }
    </>
}