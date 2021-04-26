import { useDispatch } from "react-redux";
import { likeProduct } from "../../store/products";


export const LikeButton = () => {
    const dispatch = useDispatch();
    const handleClick = (e) => {
        dispatch(likeProduct(e.target.id))
    }
    return (
        <button onClick={handleClick}>Like</button>
    );
};

export default LikeButton;