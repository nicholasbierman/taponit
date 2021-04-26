import { NavLink, Redirect } from 'react-router-dom';
import './product.css';
import { useDispatch } from 'react-redux';
import { fetchSingleProductById } from '../../store/singleProduct';

export const Product = ({ id, title, description, img, price, num_likes }) => {
    const dispatch = useDispatch();
    const handleClick = (e) => {
        dispatch(fetchSingleProductById(e.target.id));
        return (<Redirect to={`/products/${e.target.id}`}>

        </Redirect>)
    };

    return (
        <div className="Product-container">
            <NavLink id={id} to={`/products/${id}`} onClick={handleClick}>{title}</NavLink>
            <img src={img} alt={title} />
            Price: ${price} <br />
        </div>
    );
};

export default Product;