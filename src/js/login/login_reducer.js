'use strict';
import axios from 'axios';

let initialState = {
    status: 'login',
    error: null
}

const loginReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'LOGIN_BUTTON': {
            state = {...state, status: action.status}
            break;
        }
        case 'REGISTER_BUTTON': {
            state = {...state, status: action.status}
            break;
        }
        case 'FETCHING_USERS': {
            state = {...state, data: action.payload}
            break;
        }
        case 'FETCHING_LOGIN': {
            state = {...state, data: action.payload}
            break;
        }
        case 'FETCHING_REGISTER': {
            state = {...state, data: action.payload}
            break;
        }
        case 'TOKEN_PROVIDED': {
            state = {...state, token: action.payload}
            break;
        }
        case 'ERROR': {
            state = {...state, error: action.payload}
            break;
        }
    }
    return state;
}

export default loginReducer
