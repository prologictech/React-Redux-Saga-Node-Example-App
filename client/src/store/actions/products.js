import { PRODUCTS } from "../types";

const { SET_LOADING_REQUEST, LOAD_REQUEST, ADD_REQUEST } = PRODUCTS;

// Set loading status
export const setLoading = (loading) => ({ type: SET_LOADING_REQUEST, payload: loading });

// Load all products
export const loadProducts = () => ({ type: LOAD_REQUEST })

// Add new prduct
export const addProduct = (name, quantity, price) => ({
  type: ADD_REQUEST, payload: { name, quantity, price }
})
