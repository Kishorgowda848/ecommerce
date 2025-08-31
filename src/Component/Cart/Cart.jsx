import { useSelector } from "react-redux";

export default function Cart() {

    const cart = useSelector((state)=>{
      return state.cart.items;
    })
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