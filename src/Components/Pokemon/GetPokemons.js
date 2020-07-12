import React, {useEffect} from 'react';
import axios from "axios";

const GetPokemons = (props) => {
    const [url, setUrl] = React.useState("http://localhost:3001/pokemons");
    const [refresh, setRefresh] = React.useState(false);

    useEffect(() => {
        axios.get(url)
            .then(res => {
                const pokemonsTemp = res.data;
                props.setPokemons(pokemonsTemp);
                setRefresh(false);
                props.setRefreshPokemons(false);
                const pokemonTemp = pokemonsTemp[0];
                props.setPokemon(pokemonTemp._id);
            }).catch((error) => {
            console.log(error);
        });
    }, [url, refresh, props.refreshPokemons]);

    return (
        <div>
            <h2>Liste de pokemons</h2>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Rang</th>
                    <th>Nom</th>
                    <th>Type 1</th>
                    <th>Type 2</th>
                    <th>Niveau</th>
                    <th>Suppression</th>
                </tr>
                </thead>
                <tbody>
                {props.pokemons.map((pokemon, index) =>
                    <tr key={index}>
                        <td>{pokemon._id}</td>
                        <td>{pokemon.rank}</td>
                        <td>{pokemon.name}</td>
                        <td>{pokemon.type1}</td>
                        <td>{pokemon.type2}</td>
                        <td>{pokemon.level}</td>
                        <td>
                            <button onClick={() =>
                                axios.delete("http://localhost:3001/pokemons/" + pokemon._id + "/delete")
                                    .then(res => {
                                        setRefresh(true)
                                    }).catch((error) => {
                                    console.log(error);
                                })
                            }><img src="delete.png" alt="" className="icon"/></button>

                        </td>
                    </tr>
                )}
                </tbody>

            </table>
        </div>

    )

};

export default GetPokemons;
