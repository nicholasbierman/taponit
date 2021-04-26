import { useSelector, useDispatch } from "react-redux";
import { Product } from "../Product";
import { fetchSingleProductById } from '../../store/singleProduct';
import { useEffect } from "react";


export const SinglePage = () => {
  const singleProduct = useSelector((state) => state.singleProduct.singleProduct);


  return (
    <div>
      {singleProduct && <Product id={singleProduct.id} title={singleProduct.title} description={singleProduct.description} img={singleProduct.img} price={singleProduct.price} num_likes={singleProduct.num_likes} />}
    </div>
    );
};

export default SinglePage;