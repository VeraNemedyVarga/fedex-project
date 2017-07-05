import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Login from './login/login.js';
let Login = require('./login/login.js')
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import store from './main_store.js';

class App extends Component {

    // constructor(props) {
    //     super(props)
    // }
    render() {
        return (
            // <Router history="">
                <div>
                    {Login}
                    // <Route exact={true} path='/' render={() => <Login {...this.props}/>} />
                    // <Route path='/dashboard' render={() => <Dashboard {...this.props}/>} />
                    // <Route path='/creatediscussion'render={() => <DiscPost {...this.props}/>} />
                    // <Route path='/newcomment' render={() => <NewComment {...this.props}/>} />
                </div>
            // </Router>
        )
    }

}

const render = () => {
    ReactDOM.render(<App />, document.getElementById('root'));
};

// reactDOM.listen()
