import { memo } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function AddToCart({ product }) {

    const dispatch = useDispatch();
    const quantity = useSelector((state) => state?.cart?.items[product?.id]?.quantity || 0);
    const increase = () => {
        dispatch({ type: "ADD_TO_CART", payload: product })
    }
    const desc = () => {
        dispatch({ type: "REMOVE_FROM_CART", payload: product })
    }

    console.log("AddToCart ", product.id)

    return <>
        {!quantity ? <button onClick={increase}>Add To Cart</button> : <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button onClick={increase}>+</button> {quantity} <button onClick={desc}>-</button>
        </div>
        }
    </>
}