import React from 'react';
import CreatePokemon from "./CreatePokemon";
import GetPokemons from "./GetPokemons";

export default class Pokemon extends React.Component {
    state = {
        refresh: false
    };

    render() {
        return (
            <div>
                {/*<div>*/}
                {/*    <CreatePokemon></CreatePokemon>*/}
                {/*</div>*/}
                <div className="getPokemon">
                    <GetPokemons></GetPokemons>
                </div>
            </div>
        )
    }
}
