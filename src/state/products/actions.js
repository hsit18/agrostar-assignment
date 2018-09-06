import * as types from './types';

export function fetchProducts() {
    return {
        type: types.PRODUCTS_FETCH,
    };
};
