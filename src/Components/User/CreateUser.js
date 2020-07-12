import React from 'react';
import axios from "axios";

const CreateUser = (props) => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [error, setError] = React.useState("");

    function handleChangeName(event){
        setName(event.target.value);
    }
    function handleChangeEmail(event){
        setEmail(event.target.value);
    }

    function handleSubmit(event) {
        axios.post("http://localhost:3001/users", {
            name: name,
            email: email
        }, )
            .then(res => {
                    props.setRefreshUsers(true)
                }
            ).catch(error => {
                console.log(error);
            });
        event.preventDefault();
    }


    return (
        <div>
            <h2>Créer un utilisateur</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nom :
                    <input type="text" name="name" onChange={handleChangeName} required={true}/>
                </label>
                <label>
                    Email :
                    <input type="email" name="email" onChange={handleChangeEmail} required={true}/>
                </label>
                <input type="submit" value="Envoyer"/>

                <p>{error}</p>
            </form>
        </div>
    )


};

export default CreateUser;
