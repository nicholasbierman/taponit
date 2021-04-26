import { useState } from 'react';
import { NavLink, Link, Redirect } from 'react-router-dom';
import './product.css';
import { useDispatch } from 'react-redux';
import { fetchSingleProductById } from '../../store/singleProduct';
import { useEffect } from 'react';
import LikeButton from '../LikeButton';

export const Product = ({ id, title, description, img, price, num_likes }) => {
    const dispatch = useDispatch();
    const handleClick = (e) => {
        dispatch(fetchSingleProductById(e.target.id));
        return (<Redirect to={`/products/${e.target.id}`}>

        </Redirect>)
    };

    return (
        <div className="Product-container">
            <NavLink id={id} to={`/products/${id}`} onClick={handleClick}>{id}: {title}</NavLink>
            <img src={img} alt={title} />
            Price: ${price} <br />
        </div>
    );
};

export default Product;