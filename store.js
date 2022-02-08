import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './redux/reducer';
import rootSaga from './redux/saga';

const saga = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(saga));

saga.run(rootSaga);

export default store;
