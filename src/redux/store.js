import { applyMiddleware, createStore } from 'redux';
import rootReducer from './root-reducer';
import logger from 'redux-logger'


const middleware=[logger];

export const store=createStore(rootReducer,applyMiddleware(...middleware))

export default store;
