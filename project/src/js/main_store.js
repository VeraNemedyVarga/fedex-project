import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import { createLogger } from 'redux-logger';

const reducers = combineReducers({
    //more reducers here
});

const middleWare = applyMiddleware(thunk, createLogger());

const store = createStore(reducers, middleWare);

export default store;
