import React from 'react';
import CreateUser from "./CreateUser";
import GetUsers from "./GetUsers";

const User = (props) => {
    const [refreshUsers, setRefreshUsers] = React.useState(false);

    return (
        <div>
            <div>
                <CreateUser setRefreshUsers={setRefreshUsers}></CreateUser>
            </div>
            <div className="getUsers">
                <GetUsers refreshUsers={refreshUsers} setRefreshUsers={setRefreshUsers} users={props.users} setUsers={props.setUsers}></GetUsers>
            </div>
        </div>
    )
};

export default User;
