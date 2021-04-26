import { useSelector } from "react-redux";
import { Product } from "../Product";
import LikeButton from "../LikeButton";
import ProductDetails from '../ProductDetails';
import UnlikeButton from "../UnlikeButton";
import BackButton from '../BackButton';

export const SinglePage = () => {
  const singleProduct = useSelector((state) => state.singleProduct.singleProduct);


  return (
    <div>
      {singleProduct && (
        <div>
        <Product
          id={singleProduct.id}
          title={singleProduct.title}
          img={singleProduct.img}
          price={singleProduct.price}
        />
        <ProductDetails
          description={singleProduct.description}
          num_likes={singleProduct.num_likes}
        />
          <LikeButton id={singleProduct.id} />
          <UnlikeButton id={singleProduct.id} />
      </div>)}
      <BackButton />
    </div>
  );
};

export default SinglePage;