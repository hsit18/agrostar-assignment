import * as types from './types';

const initialState = {
    productList: [],
    productCart: {},
    searchText: ''
}
export default function products(state = initialState, action) {
    switch(action.type) {
        case types.PRODUCTS_SUCCESS:
            return { ...state, productList: action.products.responseData.productList};
        
        case types.PRODUCTS_ADD:
            const productCart = Object.assign({}, state.productCart);
            if(productCart[action.code]) {
                productCart[action.code]++;
            } else {
                productCart[action.code] = 1;
            }

            return { ...state, productCart: productCart};
        
        case types.PRODUCTS_REMOVE:
            const productCartRemove = Object.assign({}, state.productCart);
            if(productCartRemove[action.code] && productCartRemove[action.code] > 1) {
                productCartRemove[action.code]--;
            } else {
                delete productCartRemove[action.code];
            }

            return { ...state, productCart: productCartRemove};
        
        case types.PRODUCTS_SEARCH_TEXT:
            const searchText = action.text;
            return { ...state, searchText};
                    
        default:
            return state;
    }
}