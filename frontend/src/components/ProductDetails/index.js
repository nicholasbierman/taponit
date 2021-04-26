export const ProductDetails = ({ description, num_likes }) => {
  return (
    <div>
      <p>Description: {description}</p>
      <p>Likes: {num_likes}</p>
    </div>
  );
};

export default ProductDetails;
