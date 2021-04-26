const SET_PRODUCTS = 'products/setProducts';

const setProducts = (products) => ({
    type: SET_PRODUCTS,
    payload: products
});

export const fetchProducts = () => async dispatch => {
    const response = await fetch('/api/products');
    const data = await response.json();
    await dispatch(setProducts(data));
    return response;
};


const initialState = { products: [] };

function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case SET_PRODUCTS:
            newState = { ...state, products: action.payload };
            return newState;
        default:
            return state;
    };
};

export default reducer;