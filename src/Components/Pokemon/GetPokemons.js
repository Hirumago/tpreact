import React, {useEffect} from 'react';
import axios from "axios";

const GetPokemons = () => {
    const [pokemons, setPokemons] = React.useState([]);
    const [url, setUrl] = React.useState("http://localhost:3001/pokemons");
    const [refresh, setRefresh] = React.useState(0);

    useEffect(() => {
        axios.get(url)
            .then(res => {
                const pokemons = res.data;
                setPokemons(pokemons);
            }).catch((error) => {
            console.log(error);
        });
    }, [url, refresh]);

    return (
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
            {pokemons.map((pokemon, index) =>
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
                                    setRefresh(1)
                                }).catch((error) => {
                                console.log(error);
                            })
                        }><img src="delete.png" alt="" className="icon"/></button>

                    </td>
                </tr>
            )}
            </tbody>

        </table>
    )

};

export default GetPokemons;