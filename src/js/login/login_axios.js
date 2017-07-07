import axios from 'axios';
import store from '../../main_store.js';

// function loginUser(name, password) {
//     store.dispatch((dispatch) => {
//         axios.post('https://todowithpostgres.herokuapp.com/login', {
//             id: name,
//             token: password
//         }).then((response) => {
//             console.log(response.data);
//             if(response.data.status === 'success') {
//                 dispatch({type: 'FETCHING_LOGIN', payload: response.data})
//                 localStorage.setItem('token', response.data.token);
//                 dispatch({type: 'TOKEN_PROVIDED', payload: localStorage.getItem("token")});
//                 window.location.href = '/profile';
//             } else {
//                 throw new Error('server error')
//             }
//         }).catch(function(err) {
//             dispatch({type: 'ERROR', payload: response.data.error})
//             // console.log(err);
//         })
//     })
// }
//
// export default loginUser;


function loginUser(name, password) {
    store.dispatch((dispatch) => {
        axios.post('/logindbcheck', {
            username: name,
            password: password
        }).then((response) => {
            dispatch({type: 'FETCHING_USERS', payload: response.data})
            if(response.data.state) {
                localStorage.setItem('token', response.data.token);
                dispatch({type: 'TOKEN_PROVIDED', payload: localStorage.getItem("token")});
                window.location.href = '/dashboard';
            } else {
                dispatch({type: 'ERROR', payload: response.data.error})
            }
        })
    })
}

export default loginUser;
