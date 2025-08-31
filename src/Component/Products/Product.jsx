import { memo, useEffect } from 'react';
import ProductCard from '../ProductCard';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch, useSelector } from 'react-redux';
import { loadProduct } from '../../Store/product';

export default memo(function Product() {

    const dispatch = useDispatch();
    const loading = useSelector((state) => state.products.loading);
    const list = useSelector((state) => state.products.products)

    useEffect(() => {
        dispatch(loadProduct());
    }, [])

    console.log("Product ....");
    return <>
        <Link to="/cart">View Cart</Link>
        {loading ? <p>Loading ...</p> : list.map(product => {
            return <ProductCard product={product} key={product.title} />
        })}
    </>;
});