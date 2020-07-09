import React from 'react';

class CreateUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '', email: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        alert("nom : " + this.state.name + ", email : " +  this.state.email);
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
                    <input type="submit" value="Envoyer" />
                </form>
            </div>
        )

    }
}

export default CreateUser;