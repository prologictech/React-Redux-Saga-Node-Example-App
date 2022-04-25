import { PRODUCTS } from "../types";

const { SET_LOADING, LOAD_SUCCESS } = PRODUCTS;

const initialState = {
  isLoading: false,
  products: []
};

// Products reducer
export default function productsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: payload
      };
    default:
      return state;
  }
}
