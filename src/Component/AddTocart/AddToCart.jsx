import { useContext } from "react"
import CartContext from "../../Context/CartContext"

export default function AddToCart( {product }) {

const { descQuantity, increaseQuantity,cart} = useContext(CartContext);

    const increase = () => {
        increaseQuantity(product)
    }
    const desc = () => {
        descQuantity(product)
    }

    console.log("AddToCart ",product.id)

    return <>
        {!cart[product.id] ? <button onClick={increase}>Add To Cart</button> : <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button onClick={increase}>+</button> {cart[product.id].quantity} <button onClick={desc}>-</button>
        </div>
        }
    </>
}