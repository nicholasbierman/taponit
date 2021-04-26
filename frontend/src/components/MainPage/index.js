import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from '../../store/products';
import { Product } from '../Product';

export const MainPage = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])

    return (
        <div>
            <h1>All Products</h1>
            {products && products.map((product, i) => {
                return (<Product key={i} id={product.id} title={product.title}
                    description={product.description} img={product.img} price={product.price} />);
            })}
        </div>
    );
};

export default MainPage;
