import React from 'react';
import axios from "axios";

class CreateUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '', email: '', error: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        axios.post("http://localhost:3001/users", {
            name: this.state.name,
            email: this.state.email
        }, )
            .then(res => {
                    this.state.refresh = true;
                }
            ).catch(error => {
                this.setState({error: "Erreur"});
            });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h2>Créer un utilisateur</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nom :
                        <input type="text" name="name" onChange={this.handleChange} required={true}/>
                    </label>
                    <label>
                        Email :
                        <input type="email" name="email" onChange={this.handleChange} required={true}/>
                    </label>
                    <input type="submit" value="Envoyer"/>

                    <p>{this.state.error}</p>
                </form>
            </div>
        )

    }
}

export default CreateUser;