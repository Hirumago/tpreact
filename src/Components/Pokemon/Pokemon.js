import React from 'react';
import CreatePokemon from "./CreatePokemon";
import GetPokemons from "./GetPokemons";

const User = () => {
    const [refreshPokemons, setRefreshPokemons] = React.useState(false);

        return (
            <div>
                {/*<div>*/}
                {/*    <CreatePokemon setRefreshPokemons = {setRefreshPokemons}></CreatePokemon>*/}
                {/*</div>*/}
                <div className="getPokemon">
                    <GetPokemons refreshPokemons = {refreshPokemons} setRefreshPokemons = {setRefreshPokemons}></GetPokemons>
                </div>
            </div>
        )
}
