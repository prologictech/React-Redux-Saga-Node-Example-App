/**
 * Redux saga implementation
 *
 */

import { all } from 'redux-saga/effects';

import watchProducts from './products';

export default function* rootSaga() {
  yield all([
    watchProducts(),
  ]);
}
