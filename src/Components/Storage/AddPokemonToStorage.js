import React from 'react';
import axios from "axios";

const CreateUser = (props) => {
    const [error, setError] = React.useState("");

    function handleChangeStorage(event) {
        props.setStorage(event.target.value);
    }

    function handleChangePokemon(event) {
        props.setPokemon(event.target.value);
    }

    function handleChangeOwner(event) {
        props.setOwner(event.target.value);
    }

    function handleSubmit(event) {
        setError("");
        axios.put("http://localhost:3001/storages/" + props.storage + "/add-pokemon/" + props.pokemon + "/" + props.owner)
            .then(res => {
                    props.setLightRefreshStorages(true);
                }
            ).catch(error => {
            console.log(error);
            setError(error.response.data.error)
        });
        event.preventDefault();
    }


    return (
        <div>
            <h2>Ajout d'un pokémon à un espace de stockage</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Stockage :
                    <select onChange={handleChangeStorage}>
                        {
                            props.storages.map((stockage, index) =>
                                <option value={stockage._id} key={index}>{stockage._id} - {stockage.name}</option>
                            )
                        }
                    </select>
                </label>
                <label>
                    Pokémon :
                    <select onChange={handleChangePokemon}>
                        {
                            props.pokemons.map((pokemon, index) =>
                                <option value={pokemon._id} key={index}>{pokemon._id} - {pokemon.name}</option>
                            )
                        }
                    </select>
                </label>
                <label>
                    Propriétaire :
                    <select onChange={handleChangeOwner}>
                        {
                            props.users.map((user, index) =>
                                <option value={user._id} key={index}>{user._id} - {user.name}</option>
                            )
                        }
                    </select>
                </label>
                <input type="submit" value="Envoyer"/>

                <p className={"error"}>{error}</p>
            </form>
        </div>
    )


};

export default CreateUser;
