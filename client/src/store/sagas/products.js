/**
 * Saga for products actions.
 *
 */

import {
  takeLatest,
  call,
  put,
} from 'redux-saga/effects';

import { apis } from '../../constants';
import api from '../../util/api';
import { PRODUCTS } from "../types";
const { SET_LOADING_REQUEST, SET_LOADING, LOAD_REQUEST, LOAD_SUCCESS, ADD_REQUEST } = PRODUCTS;


/**
 * setLoadingWorker
 * Set loading status worker
 */
function* setLoadingWorker(action) {
  yield put({ type: SET_LOADING, payload: action.payload });
}

/**
 * loadProductsWorker
 * Load product details worker
 */
function* loadProductsWorker() {
  try {
    yield put({ type: SET_LOADING_REQUEST, payload: true });
    const result = yield call(api.get, apis.endpoints.products);

    yield put({ type: LOAD_SUCCESS, payload: result.data });
  } catch (error) {
    console.log('...loadProductsWorker Worker Error', String(error));
    yield put({ type: SET_LOADING_REQUEST, payload: false });
  }
}

/**
 * addProductWorker
 * Add card worker
 */
function* addProductWorker(action) {
  const { name, quantity, price } = action.payload;

  try {
    yield put({ type: SET_LOADING_REQUEST, payload: true });
    yield call(
      api.post,
      apis.endpoints.products,
      { name, quantity, price },
    );

    yield call(loadProductsWorker);
  } catch (error) {
    console.log('...addProductWorker Error', String(error));
    yield put({ type: SET_LOADING_REQUEST, payload: false });
  }
}

/**
 * watchUser
 * Card Details watcher
 */
export default function* watchProducts() {
  yield takeLatest(SET_LOADING_REQUEST, setLoadingWorker);
  yield takeLatest(LOAD_REQUEST, loadProductsWorker);
  yield takeLatest(ADD_REQUEST, addProductWorker);
}
