import { createContext } from "react";

 const CartContext = createContext({
    cart: {},
    descQuantity: () => { },
    increaseQuantity: () => { }
})

export default CartContext;