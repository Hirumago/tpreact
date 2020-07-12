import React from 'react';
import axios from "axios";

const CreatePokemon = (props) => {
    const [rank, setRank] = React.useState("");
    const [name, setName] = React.useState("");
    const [type1, setType1] = React.useState("");
    const [type2, setType2] = React.useState("");
    const [level, setLevel] = React.useState("");
    const [error, setError] = React.useState("");

    function handleChangeRank(event){
        setRank(event.target.value);
    }

        function handleChangeName(event){
            setName(event.target.value);
        }

        function handleChangeType1(event){
            setType1(event.target.value);
    }

    function handleChangeType2(event){
        setType2(event.target.value);
    }

    function handleChangeLevel(event){
        setLevel(event.target.value);
    }

    function handleSubmit(event) {
        axios.post("http://localhost:3001/pokemons", {
            rank: rank,
            name: name,
            type1: type1,
            type2: type2,
            level: level
        }, )
            .then(res => {
                    props.setRefreshPokemons(true)
                }
            ).catch(error => {
            console.log(error);
        });
        event.preventDefault();
    }


    return (
        <div>
            <h2>Créer un pokémon</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Rang :
                    <input type="text" name="name" onChange={handleChangeRank} required={true}/>
                </label>
                <label>
                    Nom :
                    <input type="text" name="name" onChange={handleChangeName} required={true}/>
                </label>
                <label>
                    Type 1 :
                    <input type="text" name="name" onChange={handleChangeType1} required={true}/>
                </label>
                <label>
                    Type 2 :
                    <input type="text" name="name" onChange={handleChangeType2} required={false}/>
                </label>
                <label>
                    Niveau :
                    <input type="text" name="name" onChange={handleChangeLevel} required={true}/>
                </label>
                <input type="submit" value="Envoyer"/>

                <p className={"error"}>{error}</p>
            </form>
        </div>
    )


};

export default CreatePokemon;
