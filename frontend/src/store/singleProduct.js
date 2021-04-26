const SET_SINGLE_PRODUCT = "singleProduct/setSingleProduct";

const setSingleProduct = (product) => ({
  type: SET_SINGLE_PRODUCT,
  payload: product,
});

export const fetchSingleProductById = (id) => async (dispatch) => {
  const response = await fetch(`/api/products/${id}`);
  const data = await response.json();
  return dispatch(setSingleProduct(data));
};

export const likeProduct = (id) => async (dispatch) => {
  const response = await fetch(`/api/products/like/${id}`, {
    method: "POST",
  });
  const data = await response.json();
  return dispatch(setSingleProduct(data));
};

export const unlikeProduct = (id) => async (dispatch) => {
  const response = await fetch(`/api/products/like/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return dispatch(setSingleProduct(data));
}


const initialState = { singleProduct: null };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_SINGLE_PRODUCT:
      newState = { singleProduct: action.payload };
      return newState;
    default:
      return state;
    };
};

export default reducer;
