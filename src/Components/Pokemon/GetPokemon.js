import React, {useEffect} from 'react';
import axios from "axios";

const GetPokemon = () => {
    const [pokemon, setPokemon] = React.useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/pokemons")
            .then(res => {
                const pokemons = res.data;
                setPokemon(pokemons);
            }).catch((error) => {
            console.log(error);
        });
    }, ["http://localhost:3001/pokemons"]);

    function deletePokemon(id) {
        axios.delete("http://localhost:3001/pokemons/" + id + "/delete")
            .then(res => {

            })
    }

    return (
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Rang</th>
                <th>Nom</th>
                <th>Type1</th>
                <th>Type2</th>
                <th>Niveau</th>
                <th>Suppression</th>
            </tr>
            </thead>
            <tbody>
            {pokemon.map((pokemon, index) =>
                <tr key={index}>
                    <td>{storage._id}</td>
                    <td>{pokemon.rank}</td>
                    <td>{pokemon.name}</td>
                    <td>{storage.type1}</td>
                    <td>{storage.type2}</td>
                    <td>{pokemon.level}</td>
                    <td>
                        <button onClick={deletePokemon(pokemon._id)}><img src="delete.png" alt="" className="icon"/>
                        </button>
                    </td>
                </tr>
            )}
            </tbody>

        </table>
    )

};

export default GetPokemon;
