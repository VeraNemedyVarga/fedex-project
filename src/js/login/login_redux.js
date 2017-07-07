import React, { Component } from 'react';
import loginUser from './login_axios.js';
import registerUser from './register_axios.js';
// import registerUser from './actions/registerAjax.js';
// import tokenVerify from './actions/tokenGetAjax.js';
import store from '../../main_store.js';

class Login extends Component {
    constructor(props) {
        let login = props.login;
        super(props);
        this.login = login;
        debugger;
        // tokenVerify();
    }
    handleLogin() {
        debugger;
        store.dispatch({
            type: 'LOGIN_BUTTON',
            status: 'login'
        });
    }
    handleRegister() {
        store.dispatch({
            type: 'REGISTER_BUTTON',
            status: 'register'
        })
    }
    handleConfirm() {
        debugger;
        console.log("rendering");
        // console.log(this.refs.name.value, this.refs.password.value);
        loginUser(this.refs.name.value, this.refs.password.value);
        if(this.login.status === 'login') {
            debugger;
            loginUser(this.refs.name.value, this.refs.password.value);
        } else {
            debugger;
            registerUser(this.refs.name.value, this.refs.password.value, this.refs.confirmpassword.value, this.refs.email.value);
        }
    }
    render() {
        let inputs;
        debugger;
        if(this.login.status === 'login') {
            inputs = (
                <div className='login_inputs_container'>
                    <input className="login_name" type="text" placeholder="name" ref="name"></input>
                    <input className="login_name" type="password" placeholder="password" ref="password"></input>
                </div>
            )
        } else {
            inputs = (
                <div className='register_inputs_container'>
                    <input className="login_name" type="text" placeholder="name" ref="name"></input>
                    <input className="login_name" type="password" placeholder="password" ref="password"></input>
                    <input className="login_name" type="password" placeholder="confirm password" ref="confirmpassword"></input>
                    <input className="login_name" type="email" placeholder="email" ref="email"></input>
                </div>
            )
        }
        let error;
        if(this.login.error) {
            error = (
                <div className='error'>
                    <h2>{this.props.state.login.error}</h2>
                </div>
            )
        }
        return(
            // debugger;
            <div className="App">
                <div className="App-header">
                    <div className="login_title">CherryTable Login</div>
                    <div className="container__login">
                    <label className="name">Title
                        <br></br>
                        <input type="text" className="name" placeholder="name" ref="name"/></label>
                        <br></br>
                    <label className="password">Title
                        <br></br>
                        <input type="text" className="password" placeholder="password" ref="password"/></label>
                        <div className="container__button">
                            <button onClick={this.handleLogin.bind(this)}>LOGIN</button>
                            <button onClick={this.handleRegister.bind(this)}>REGISTER</button>
                        </div>
                        {inputs}
                        <button className="confirm_button" onClick={this.handleConfirm.bind(this)}>Confirm</button>
                        {error}
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
