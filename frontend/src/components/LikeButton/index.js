import { useDispatch } from "react-redux";
import { likeProduct } from "../../store/products";


export const LikeButton = (id) => {
    const dispatch = useDispatch();
    const handleClick = (e) => {
        dispatch(likeProduct(id))
    }
    return (
        <button onClick={handleClick}>Like</button>
    );
};

export default LikeButton;