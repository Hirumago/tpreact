import React from 'react';
import CreateStorage from "./CreateStorage";
import GetStorages from "./GetStorages";

export default class Storage extends React.Component {
    state = {
        refresh: false
    };

    render() {
        return (
            <div>
                <div>
                    <CreateStorage></CreateStorage>
                </div>
                <div className="getStorage">
                    <GetStorages></GetStorages>
                </div>
            </div>
        )
    }
}
