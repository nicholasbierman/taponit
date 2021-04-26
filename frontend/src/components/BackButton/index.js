import { NavLink } from 'react-router-dom';


export const BackButton = () => {
    return (
        <NavLink to='/products'><button>Back to Main Page</button></NavLink>
    );
};

export default BackButton;