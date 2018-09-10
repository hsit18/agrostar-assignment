import { fork, all } from 'redux-saga/effects';

import productsSaga from './products/saga';

export default function* root() {
    yield all([
        fork(productsSaga),
    ]);
}
