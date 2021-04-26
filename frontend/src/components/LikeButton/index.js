import { useDispatch } from "react-redux";
import { likeProduct } from "../../store/singleProduct";


export const LikeButton = ({ id }) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(likeProduct(id))
    }
    return (
        <button onClick={handleClick}>Like</button>
    );
};

export default LikeButton;