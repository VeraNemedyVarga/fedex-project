import React from "react";
import Ajax from '../ajax';

let ajax = new Ajax();

export class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            organisation: {},
            projects: {}
    };

    ajax.loadData('/organization/' + window.sessionStorage.organizationID)
        .then((data) => {
            this.setState({
            organisation: data
            });
        });

    ajax.loadData('/allprojects')
        .then((data) => {
            this.setState({
                projects: data
            });
        });
    }

    render() {
        return (
            <div>
                <p>Fuck yeah</p>
            </div>
        );
    }
}

export default Dashboard;
