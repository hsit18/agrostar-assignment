import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import {loadState, saveState} from './localStorage';
import reducers from './state';
import rootSaga from './state/sagas';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
    products: loadState()
}
/** create store */
const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(logger, sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
    saveState({
        productCart: store.getState().products.productCart
    })
});

/** export store as default */
export default store;
