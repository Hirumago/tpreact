import React, {useEffect} from 'react';
import axios from "axios";

const GetUsers = (props) => {
    const [url, setUrl] = React.useState("http://localhost:3001/users");
    const [refresh, setRefresh] = React.useState(false);

    useEffect(() => {
        axios.get(url)
            .then(res => {
                const usersTemp = res.data;
                props.setUsers(usersTemp);
                setRefresh(false);
                props.setRefreshUsers(false);
                const ownerTemp = usersTemp[0];
                props.setOwner(ownerTemp._id);
            }).catch((error) => {
            console.log(error);
        });
    }, [url, refresh, props.refreshUsers]);

    return (
        <div>
            <h2>Liste des utilisateurs</h2>

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
                {props.users.map((user, index) =>
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
        </div>

    )

};

export default GetUsers;
