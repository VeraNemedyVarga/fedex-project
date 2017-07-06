import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './main_store.js';
import Login from './js/login/login_redux.js';
import Profile from './js/org_profile/org_profile_redux.js';

class App extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Router history="">
                <div>
                    <h2>whatever</h2>
                    <Login />
                    <Profile />
                    // <Route exact={true} path='/login' render={() => <Login {...this.props}/>} />
                </div>
            </Router>
        )
    }

}

const render = () => {
    ReactDOM.render(<App state={store.getState()}/>, document.getElementById('root'));
};

store.subscribe(render);
render();
