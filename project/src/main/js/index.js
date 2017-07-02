import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import store from './main_store.js';

class App extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                First Test
            </div>
        )
    }

}

const render = () => {
    ReactDOM.render(<App />, document.getElementById('root'));
};

render();
