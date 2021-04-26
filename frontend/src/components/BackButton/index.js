import { NavLink } from 'react-router-dom';


export const BackButton = () => {
    const handleClick = () => {

    };
    return (
        <NavLink to='/products'><button>Back to Main Page</button></NavLink>
    );
};

export default BackButton;