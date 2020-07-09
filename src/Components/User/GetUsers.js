import React from 'react';
import axios from "axios";

export default class GetUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {users: []};

        this.loadUsers = this.loadUsers.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    componentDidMount() {
        this.loadUsers();
    }

    loadUsers(){
        axios.get("http://localhost:3001/users")
            .then(res => {
                const users = res.data;
                this.setState({ users });

            })
    }

    deleteUser(id, index){
        axios.delete("http://localhost:3001/users/"+id+"/delete")
            .then(res => {
                let users = this.state.users;
                users = users.slice(index, 1);
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
                        <th>Suppression</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users.map((user, index) =>
                        <tr key={index}>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><button onClick={this.deleteUser(user._id, index)}><img src="delete.png" alt="" className="icon" /></button></td>
                        </tr>
                    )}
                </tbody>

            </table>
        )
    }
}
