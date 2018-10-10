import * as types from './types';
import { call, put, take } from 'redux-saga/effects';

import { cloneableGenerator } from 'redux-saga/utils';
import productSaga from './saga';

describe('with redux-saga native testing', () => {
    const generator = cloneableGenerator(productSaga)({
        type: types.PRODUCTS_FETCH,
    });
    const user = { username: 'sam', isAdmin: true };
  
    it('gets the execution context', () => {
      generator.next()
      generator.next()
      const result = generator.next();
      console.log(result);
      expect(result).toEqual(select(getContext));
    });
});