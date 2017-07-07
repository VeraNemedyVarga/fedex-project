import axios from 'axios';
import store from '../../main_store.js';

function validateInputs(name, password, confirmpassword, email, dispatch) {
    let state = true;
    if(name === "") {
        dispatch({type: 'ERROR', payload: 'username is not valid'});
        state = false;
    }
    if(password === "") {
        dispatch({type: 'ERROR', payload: 'password is not valid'});
        state = false;
    }
    if(password !== confirmpassword) {
        dispatch({type: 'ERROR', payload: 'passwords dont match'});
        state = false;
    }
    if(email === "") {
        dispatch({type: 'ERROR', payload: 'email is not valid'});
        state = false;
    }
    if(state) {
        return true;
    } else {
        return false;
    }
}

function loginUser(name, password, confirmpassword, email) {
    store.dispatch((dispatch) => {
        if(validateInputs(name, password, confirmpassword, email, dispatch)) {
            axios.post('/registerdbcheck', {
                username: name,
                password: password,
                email: email
            }).then((response) => {
                dispatch({type: 'FETCHING_REGISTER', payload: response.data});
                if(!response.data.state) {
                    dispatch({type: 'ERROR', payload: response.data.error});
                } else {
                    localStorage.setItem('token', response.data.token);
                    dispatch({type: 'TOKEN_PROVIDED', payload: localStorage.getItem('token')});
                    window.location.href = '/dashboard';
                }
            });
        }
    });
}
export default loginUser;
