import React from 'react';
import './App.css';
import User from "./Components/User/User";
import Storage from "./Components/Storage/Storage";
import Pokemon from "./Components/Pokemon/Pokemon";

function App() {

    return (
        <div className="App">
            <User></User>
            <Storage></Storage>
            <Pokemon></Pokemon>
        </div>
    );
}

export default App;
