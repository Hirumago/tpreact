import React from 'react';
import axios from "axios";


const CreateStorage = (props) => {
   const [rank, setRank] = React.useState("");
   const [name, setName] = React.useState("");
   const [slots, setSlots] = React.useState([]);
   const [type1, setType1] = React.useState("");
   const [type2, setType2] = React.useState("");
   const [owner, setOwner] = React.useState("");
   const [error, setError] = React.useState("");

    function handleChangeRank(event){
        setRank(event.target.value);
    }

   function handleChangeName(event){
       setName(event.target.value);
   }

   function handleChangeSlots(event){
       setSlots(event.target.value);
   }

    function handleChangeOwner(event){
        setOwner(event.target.value);
    }

    function handleSubmit(event) {
        axios.post("http://localhost:3001/storages", {
            rank: rank,
            name: name,
            slots: slots,
            type1: type1,
            type2: type2,
            owner: owner
        }, )
            .then(res => {
                     props.setRefreshStorages(true)
                }
            ).catch(error => {
            setError("Erreur");
        });
        event.preventDefault();
    }

    return (
        <div>
            <h2>Créer un espace de stockage</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Rang :
                    <input type="text" name="name" onChange={handleChangeRank} required={true}/>
                </label>
                <label>
                    Nom :
                    <input type="text" name="name" onChange={handleChangeName} required={true}/>
                </label>
                <label>
                    Propriétaire :
                    <select onChange={handleChangeOwner}>
                        {
                            props.users.map((user, index) =>
                                <option value={user._id} key={index}>{user._id} - {user.name}</option>
                            )
                        }
                    </select>
                </label>
                <input type="submit" value="Envoyer"/>

                <p class="error">{error}</p>
            </form>
        </div>
    )

}

export default CreateStorage;
