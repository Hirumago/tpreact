import React, {useEffect} from 'react';
import axios from "axios";

const GetUsers = () => {
    const [users, setUsers] = React.useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/users")
            .then(res => {
                const users = res.data;
                setUsers(users);
            }).catch((error) => {
            console.log(error);
        });
    }, ["http://localhost:3001/users"]);

    function deleteUser(id) {
        axios.delete("http://localhost:3001/users/" + id + "/delete")
            .then(res => {

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
                        <button onClick={deleteUser(user._id)}><img src="delete.png" alt="" className="icon"/>
                        </button>
                    </td>
                </tr>
            )}
            </tbody>

        </table>
    )

};

export default GetUsers;
