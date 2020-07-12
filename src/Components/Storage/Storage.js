import React, {useEffect} from 'react';
import CreateStorage from "./CreateStorage";
import GetStorages from "./GetStorages";
import AddPokemonToStorage from "./AddPokemonToStorage";
import axios from "axios";

const Storage = (props) => {
    const [refreshStorages, setRefreshStorages] = React.useState(false);
    const [lightRefreshStorages, setLightRefreshStorages] = React.useState(false);
    const url = "http://localhost:3001/storages";

    useEffect( () => {
        axios.get(url)
            .then(res => {
                const storagesTemp = res.data;
                props.setStorages(storagesTemp);
                setRefreshStorages(false);

                const storageTemp = storagesTemp[0];
                props.setStorage(storageTemp._id);
            }).catch((error) => {
            console.log(error);
        });
    }, [refreshStorages]);

    useEffect( () => {
        axios.get(url)
            .then(res => {
                console.log('ici')
                const storagesTemp = res.data;
                props.setStorages(storagesTemp);
                setLightRefreshStorages(false);
            }).catch((error) => {
            console.log(error);
        });
    }, [lightRefreshStorages]);

    return (
        <div>
            <div>
                <CreateStorage
                    setRefreshStorages={setRefreshStorages}
                    users={props.users}
                ></CreateStorage>
            </div>
            <div className="getStorage">
                <GetStorages
                    refreshStorages={[refreshStorages]}
                    setRefreshStorages={setRefreshStorages}
                    storages={props.storages}
                    setStorages={props.setStorages}
                    setStorage={props.setStorage}
                    url={url}
                ></GetStorages>
            </div>
            <div>
                <AddPokemonToStorage
                    users={props.users}
                    storages={props.storages}
                    pokemons={props.pokemons}
                    owner={props.owner}
                    setOwner={props.setOwner}
                    storage={props.storage}
                    setStorage={props.setStorage}
                    pokemon={props.pokemon}
                    setPokemon={props.setPokemon}
                    setLightRefreshStorages={setLightRefreshStorages}
                ></AddPokemonToStorage>
            </div>
        </div>
    )
};

export default Storage;
