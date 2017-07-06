import loginReducer from './js/login/login_reducer.js';
import OrgProfileReducer from './js/org_profile/org_profile_reducer.js';
import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import { createLogger } from 'redux-logger';

const reducers = combineReducers({
    login: loginReducer,
    profile: OrgProfileReducer
});

const middleWare = applyMiddleware(thunk, createLogger());

const store = createStore(reducers, middleWare);

export default store;
