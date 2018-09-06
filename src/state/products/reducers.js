import * as types from './types';

export default function products(state = {}, action) {
    switch(action) {
        case types.PRODUCTS_FETCH:
            break;
        
        default:
            return state;
    }
}