import { useSelector, useDispatch } from "react-redux";
import { Product } from "../Product";
import { fetchSingleProductById } from '../../store/singleProduct';
import { useEffect } from "react";
import LikeButton from "../LikeButton";
import ProductDetails from '../ProductDetails';


export const SinglePage = () => {
  const singleProduct = useSelector((state) => state.singleProduct.singleProduct);


  return (
    <div>
      {singleProduct && (
        <Product
          id={singleProduct.id}
          title={singleProduct.title}
          img={singleProduct.img}
          price={singleProduct.price}
        />
      )}
      {singleProduct && (
        <ProductDetails
          description={singleProduct.description}
          num_likes={singleProduct.num_likes}
        />
      )}
      {singleProduct && <LikeButton id={singleProduct.id} />}
    </div>
  );
};

export default SinglePage;