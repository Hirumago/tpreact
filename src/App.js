import React from 'react';
import './App.css';
import User from "./Components/User/User";
import Storage from "./Components/Storage/Storage";
import Pokemon from "./Components/Pokemon/Pokemon";

function App() {
    const [users, setUsers] = React.useState([]);
    const [storages, setStorages] = React.useState([]);
    const [pokemons, setPokemons] = React.useState([]);

    return (
        <div className="App">
            <User users={users} setUsers={setUsers}></User>
            <Storage storages={storages} setStorages={setStorages} users={users} pokemons={pokemons}></Storage>
            <Pokemon pokemons={pokemons} setPokemons={setPokemons}></Pokemon>
        </div>
    );
}

export default App;
