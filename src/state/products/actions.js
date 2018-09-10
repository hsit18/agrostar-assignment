import * as types from './types';

export function fetchProducts() {
    return {
        type: types.PRODUCTS_FETCH,
    };
};

export function addProduct(code) {
    return {
        type: types.PRODUCTS_ADD,
        code
    };
};

export function removeProduct(code) {
    return {
        type: types.PRODUCTS_REMOVE,
        code
    };
};

export function setProductSearchText(text) {
    return {
        type: types.PRODUCTS_SEARCH_TEXT,
        text
    };
};