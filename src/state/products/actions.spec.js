import * as types from './types';
import * as actions from './actions';

describe('Product State actions', function () {
    
    it('should create an action to fetch the products', () => {
        const expectedAction = {
            type: types.PRODUCTS_FETCH 
          }
        expect(actions.fetchProducts()).toEqual(expectedAction);
    });

    it('should create an action to add the product', () => {
        const code = "AX-E-23";
        const expectedAction = {
            type: types.PRODUCTS_ADD,
            code
          }
        expect(actions.addProduct(code)).toEqual(expectedAction);
    });

    it('should create an action to remove the product', () => {
        const code = "AX-E-23";
        const expectedAction = {
            type: types.PRODUCTS_REMOVE,
            code
          }
        expect(actions.removeProduct(code)).toEqual(expectedAction);
    });

	it('should create an action to search the text', () => {
        const text = "power";
        const expectedAction = {
            type: types.PRODUCTS_SEARCH_TEXT,
            text
          }
        expect(actions.setProductSearchText(text)).toEqual(expectedAction);
    });
});
