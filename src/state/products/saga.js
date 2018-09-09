import { call, put, take } from 'redux-saga/effects';

import * as types from './types';
import fetchProducts from '../../services/product';

function* loadProducts() {
    try {
        const products = yield call(fetchProducts);
        yield put({ type: types.PRODUCTS_SUCCESS, products });
    } catch (error) {
        yield put({ type: types.PRODUCTS_FAILURE, error });
    }
}

export default function* productsSaga() {
    while (true) {
        yield take(types.PRODUCTS_FETCH);
        yield call(loadProducts);
    }
}
