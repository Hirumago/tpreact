import React from 'react';
import axios from "axios";

const GetUsers = () => {
    const [users, setUsers] = React.useState([]);

    function getUsers(){
        axios.get("http://localhost:3001/users")
            .then(res => {
                const users = res.data;
                setUsers( users );
            });
    }

    function deleteUser(id, index){
        axios.delete("http://localhost:3001/users/"+id+"/delete")
            .then(res => {
                let usersTemp = users;
                usersTemp = usersTemp.slice(index, 1);
                setUsers( usersTemp );
            })
    }

    return (
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Nom</th>
                <th>Email</th>
                <th>Suppression</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user, index) =>
                <tr key={index}>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button onClick={deleteUser(user._id, index)}><img src="delete.png" alt="" className="icon"/></button>
                    </td>
                </tr>
            )}
            </tbody>

        </table>
    )

};

export default GetUsers;
