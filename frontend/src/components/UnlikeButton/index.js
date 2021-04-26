import { useDispatch } from "react-redux";
import { unlikeProduct } from "../../store/singleProduct";

export const UnlikeButton = ({ id }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(unlikeProduct(id));
  };
  return <button onClick={handleClick}>Unlike</button>;
};

export default UnlikeButton;
