import React from 'react';
import CreateUser from "./CreateUser";
import GetUsers from "./GetUsers";

const User = () => {
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
};

export default User;
