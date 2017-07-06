import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './Dashboard/dashboard'

class App extends React.Component {
    render() {
        return (
            <Router history="">
                <div className="App">
                    <Route path="/organization" component={Dashboard}/>
                    <h1>Hello world</h1>
                </div>
            </Router>
        );
    }
}

export default App;
