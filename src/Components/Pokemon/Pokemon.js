import React from 'react';
import CreatePokemon from "./CreatePokemon";
import GetPokemons from "./GetPokemons";
import GetUsers from "../User/GetUsers";

const Pokemon = (props) => {
    const [refreshPokemons, setRefreshPokemons] = React.useState(false);

        return (
            <div>
                <div>
                    <CreatePokemon setRefreshPokemons = {setRefreshPokemons}></CreatePokemon>
                </div>
                <div className="getPokemon">
                    <GetPokemons refreshPokemons = {refreshPokemons} setRefreshPokemons = {setRefreshPokemons} pokemons={props.pokemons} setPokemons={props.setPokemons}></GetPokemons>
                </div>
            </div>
        )
};

export default Pokemon;
