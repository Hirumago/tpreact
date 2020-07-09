import React from 'react';
import axios from "axios";

export default class GetUsers extends React.Component {
    state = {
        users: []
    };

    componentDidMount() {
        axios.get("http://localhost:3001/users")
            .then(res => {

                console.log(res)
                const users = res.data;
                this.setState({ users });
            })
    }

    render() {
        return (
            <table>
                <tr>
                    <th>Id</th>
                    <th>Nom</th>
                    <th>Email</th>
                </tr>
                {this.state.users.map(user =>
                    <tr>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                )}
            </table>
        )
    }
}
