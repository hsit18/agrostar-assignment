import reducer from './reducers';
import * as types from './types';

describe('Products reducers', () => {
    
    it('should return the initial state', () => {
        const initialState = {
            productList: [],
            productCart: {},
            searchText: ''
        };
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should return the state with add product to cart', () => {
        const code = 'AN-32-XT';
        const productCart = {};
        productCart[code] = 1;
        expect(reducer(undefined, {
            type: types.PRODUCTS_ADD,
            code
          }
        )).toEqual({
            productList: [],
            productCart,
            searchText:''
        });
    });

    it('should return the state with removed product from cart', () => {
        const code = 'AN-32-XT';
        const productCart = {};
        productCart[code] = 1;
        expect(reducer({
                productList: [],
                productCart,
                searchText:''
            }, {
                type: types.PRODUCTS_REMOVE,
                code
            }
        )).toEqual({
            productList: [],
            productCart: {},
            searchText:''
        });
    });

    it('should return the state with search text', () => {
        expect(reducer(undefined, {
            type: types.PRODUCTS_SEARCH_TEXT,
            text: 'Power'
          }
        )).toEqual({
            productList: [],
            productCart: {},
            searchText: 'Power'
        });
    });



});
