import React from 'react';
import axios from "axios";

const CreateUser = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [error, setError] = React.useState("");

    function handleSubmit(event) {
        axios.post("http://localhost:3001/users", {
            name: name,
            email: email
        }, )
            .then(res => {
                    // this.state.refresh = true;
                }
            ).catch(error => {
                setError("Erreur");
            });
        event.preventDefault();
    }


    return (
        <div>
            <h2>Créer un utilisateur</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nom :
                    <input type="text" name="name" required={true}/>
                </label>
                <label>
                    Email :
                    <input type="email" name="email" required={true}/>
                </label>
                <input type="submit" value="Envoyer"/>

                <p>{error}</p>
            </form>
        </div>
    )


};

export default CreateUser;