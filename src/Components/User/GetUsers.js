import React, {useEffect} from 'react';
import axios from "axios";

const GetUsers = (props) => {
    const [users, setUsers] = React.useState([]);
    const [url, setUrl] = React.useState("http://localhost:3001/users");
    const [refresh, setRefresh] = React.useState(false);

    useEffect(() => {
        axios.get(url)
            .then(res => {
                const users = res.data;
                setUsers(users);
                setRefresh(false);
                props.setRefreshUsers(false);
            }).catch((error) => {
            console.log(error);
        });
    }, [url, refresh, props.refreshUsers]);

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
                        <button onClick={() =>
                            axios.delete("http://localhost:3001/users/" + user._id + "/delete")
                                .then(res => {
                                    setRefresh(true)
                                }).catch((error) => {
                                console.log(error);
                            })
                        }><img src="delete.png" alt="" className="icon"/></button>

                    </td>
                </tr>
            )}
            </tbody>

        </table>
    )

};

export default GetUsers;
