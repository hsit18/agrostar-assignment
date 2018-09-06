import { call, put, take } from 'redux-saga/effects';

import fetchProducts from '../../services/product';

function* loadProducts() {
    try {
        const products = yield call(fetchProducts);
        yield put({ type: 'PRODUCTS_SUCCESS', products });
    } catch (error) {
        yield put({ type: 'PRODUCTS_FAILURE', error });
    }
}

export default function* productsSaga() {
    while (true) {
        yield take('FETCH_PRODUCTS');
        yield call(loadProducts);
    }
}
