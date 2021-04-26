import { useDispatch } from "react-redux";
import { likeProduct } from "../../store/singleProduct";


export const LikeButton = ({ id }) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        if (localStorage.getItem(id)) {
            alert('Users can only like a product once!');
            return;
        }
        localStorage.setItem(id, true);
        dispatch(likeProduct(id))
    }
    return (
        <button onClick={handleClick}>Like</button>
    );
};

export default LikeButton;