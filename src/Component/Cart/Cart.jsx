import { useContext } from "react";
import CartContext from "../../Context/CartContext";

export default function Cart() {
    const { cart } = useContext(CartContext)
    const values = Object.values(cart);

        console.log("Cart ...");
    return <>
        {values.map(product => {
            return <li key={product.title}>
                {product.title}
            </li>
        })}
        <p> This is the Cart component</p>
    </>
}