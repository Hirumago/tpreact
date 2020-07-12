import React from 'react';
import './App.css';
import User from "./Components/User/User";
import Storage from "./Components/Storage/Storage";
import Pokemon from "./Components/Pokemon/Pokemon";

function App() {
    const [users, setUsers] = React.useState([]);
    const [storages, setStorages] = React.useState([]);
    const [pokemons, setPokemons] = React.useState([]);

    const [owner, setOwner] = React.useState("");
    const [storage, setStorage] = React.useState("");
    const [pokemon, setPokemon] = React.useState("");

    return (
        <div className="App">
            <User
                users={users}
                setUsers={setUsers}
                owner={owner}
                setOwner={setOwner}
            ></User>
            <Storage storages={storages}
                     setStorages={setStorages}
                     users={users}
                     pokemons={pokemons}
                     owner={owner}
                     setOwner={setOwner}
                     storage={storage}
                     setStorage={setStorage}
                     pokemon={pokemon}
                     setPokemon={setPokemon}
            ></Storage>
            <Pokemon
                pokemons={pokemons}
                setPokemons={setPokemons}
                pokemon={pokemon}
                setPokemon={setPokemon}
            ></Pokemon>
        </div>
    );
}

export default App;
