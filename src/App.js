import React from 'react';
import './App.css';
import CreateUser from "./Components/User/CreateUser";
import GetUsers from "./Components/User/GetUsers";

function App() {
    return (
        <div className="App">
            <CreateUser></CreateUser>
            <div className="getUsers">
                <GetUsers></GetUsers>
            </div>
        </div>
    );
}

export default App;
