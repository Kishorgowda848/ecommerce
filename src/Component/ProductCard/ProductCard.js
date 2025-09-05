import useWindowSize from '../../hooks/useWindowSize'
import AddToCart from '../AddTocart'
import Rating from '../Rating'
import './index.css'
export default function ProductCard({ product }) {
    const widthHeight = useWindowSize();

    console.log("ProductCard " + product.id);
    return <div className="card">
        <div>
            <img src={product.images[0]} />
        </div>
        <div className='proudct-title'>
            <a>{product.title}</a>
        </div>
        {/* <Rating rating={product.rating.value} /> */}
        <h3><b>₹ {product.price.value}</b></h3>
        <AddToCart product={product} />
        {/* <p>{widthHeight.width}</p> */}
    </div>
};