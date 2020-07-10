import React from 'react';
import CreateStorage from "./CreateStorage";
import GetStorages from "./GetStorages";
import AddPokemonToStorage from "./AddPokemonToStorage";

const Storage = (props) => {
    const [refreshStorages, setRefreshStorages] = React.useState(false);

    return (
            <div>
                <div>
                    <CreateStorage setRefreshStorages={setRefreshStorages}></CreateStorage>
                </div>
                <div className="getStorage">
                    <GetStorages refreshStorages={[refreshStorages]} setRefreshStorages={setRefreshStorages} storages={props.storages} setStorages={props.setStorages}></GetStorages>
                </div>
                <div>
                    <AddPokemonToStorage users={props.users} storages={props.storages} pokemons={props.pokemons}></AddPokemonToStorage>
                </div>
            </div>
        )
};

export default Storage;
