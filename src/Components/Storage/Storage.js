import React from 'react';
import CreateStorage from "./CreateStorage";
import GetStorage from "./GetStorages";

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
                    <GetStorage></GetStorage>
                </div>
            </div>
        )
    }
}
