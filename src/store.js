import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import reducers from './state';
import rootSaga from './state/sagas';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/** create store */
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(logger, sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

/** export store as default */
export default store;
