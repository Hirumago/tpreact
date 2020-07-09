import React from 'react';
import axios from "axios";

export default class GetUsers extends React.Component {
    state = {
        users: []
    };

    componentDidMount() {
        axios.get("http://localhost:3001/users")
            .then(res => {
                const users = res.data;
                this.setState({ users });
            })
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nom</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users.map((user, index) =>
                        <tr key={index}>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    )}
                </tbody>

            </table>
        )
    }
}
