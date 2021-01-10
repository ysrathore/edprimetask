import {createStore,applyMiddleware} from 'redux';
import rootReducer from './reducers/index.js';
import createSagaMiddleware from 'redux-saga';
import userSagaHandler from './sagas/userSaga';

const sagaMiddleware=createSagaMiddleware();
const store=createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(userSagaHandler);

export default store;