import React from 'react';
import axios from "axios";


const CreateStorage = () => {
    const [rank, setRank] = React.useState("");
    const [name, setName] = React.useState("");
    const [slots, setSlots] = React.useState("");
    const [type1, setType2] = React.useState("");
    const [type2, setType2] = React.useState("");
    const [owner, setOwner] = React.useState("");

    function handleChangeName(event){
        setName(event.target.value);
    }

    function handleChangeEmail(event){
        setEmail(event.target.value);
    }


}

export default CreateStorage;
