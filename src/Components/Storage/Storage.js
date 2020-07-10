import React from 'react';
import CreateStorage from "./CreateStorage";
import GetStorages from "./GetStorages";


const Storage = () => {
    const [refreshStorages, setRefreshStorages] = React.useState(false);

        return (
            <div>
                <div>
                    <CreateStorage setRefreshStorages={setRefreshStorages}></CreateStorage>
                </div>
                <div className="getStorage">
                    <GetStorages refreshStorages={[refreshStorages]} setRefreshStorages = {setRefreshStorages}></GetStorages>
                </div>
            </div>
        )
}

export default Storage;
