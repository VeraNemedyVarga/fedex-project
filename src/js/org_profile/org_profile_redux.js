import React, { Component } from 'react';
// import loginUser from './login_ajax.js';
// import registerUser from './register_ajax.js';
import store from '../../main_store.js';

class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let projects= ["goodstuff", "badstuff"];
        let projectList = [];
        for (let i=0; i<projects.length; i++) {
            console.log(projects);
            console.log(projectList);
            projectList.push(<li key={i.toString()}> {projects[i]} </li>)
        }
        return(
            <div className="profile">
                <div className="orgdata">
                    <h2 className="orgname">Organization Name</h2>
                    <p className="intro">Introduction</p>
                    <p className="field">Field</p>
                </div>

                <ul className="projects">
                    {projectList}
                </ul>
            </div>
        );
    }
}

export default Profile;
