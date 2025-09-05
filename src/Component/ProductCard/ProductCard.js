import useWindowSize from '../../hooks/useWindowSize'
import AddToCart from '../AddTocart'
import Rating from '../Rating'
export default function ProductCard({ product}) {
    const widthHeight = useWindowSize();

    console.log("ProductCard "+product.id);
    return <div style={{border:'1px solid',borderRadius:'5px',margin:'50px'}}>
        <p>Product Card Name:- {product.title}</p>
        <p>Price {product.price.value}</p>
        <Rating rating={product.rating.value}/>
        <AddToCart product={product} />

        <p>{widthHeight.width}</p>
    </div>
};