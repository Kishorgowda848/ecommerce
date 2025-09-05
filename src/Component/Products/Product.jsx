import { memo, useEffect, useState } from 'react';
import ProductCard from '../ProductCard';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

 export default memo(function Product() {

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products').then(res => {
            setLoading(false);
            return res.json();
        }).then(res => {
            setList(res);
        })
    }, [])

    console.log("Product ....")
    return <div style={{display:'flex',    flexWrap: 'wrap'}}>
    <Link to="/cart">View Cart</Link>
        {loading ? <p>Loading ...</p> : list.map(product => {
            return <ProductCard product={product} key={product.title}/>
        })}
    </div>;
});