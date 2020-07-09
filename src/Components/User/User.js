import React from 'react';
import CreateUser from "./CreateUser";
import GetUsers from "./GetUsers";

export default class User extends React.Component {
    state = {
        refresh: false
    };

    render() {
        return (
            <div>
                <div>
                    <CreateUser></CreateUser>
                </div>
                <div className="getUsers">
                    <GetUsers></GetUsers>
                </div>
            </div>
        )
    }
}
