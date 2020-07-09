import React, {useEffect} from 'react';
import axios from "axios";

const GetStorage = () => {
    const [storage, setStorage] = React.useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/storage")
            .then(res => {
                const storage = res.data;
                setStorage(storage);
            }).catch((error) => {
            console.log(error);
        });
    }, ["http://localhost:3001/storage"]);

    function deleteStorage(id) {
        axios.delete("http://localhost:3001/storage/" + id + "/delete")
            .then(res => {

            })
    }

    return (
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Rang</th>
                <th>Nom</th>
                <th>Slots</th>
                <th>Type1</th>
                <th>Type2</th>
                <th>Propriétaire</th>
                <th>Suppression</th>
            </tr>
            </thead>
            <tbody>
            {storage.map((storage, index) =>
                <tr key={index}>
                    <td>{storage._id}</td>
                    <td>{storage.name}</td>
                    <td>{storage._getSlots}</td>
                    <td>{storage.type1}</td>
                    <td>{storage.type2}</td>
                    <td>{storage._owner}</td>
                    <td>
                        <button onClick={deleteStorage(storage._id)}><img src="delete.png" alt="" className="icon"/>
                        </button>
                    </td>
                </tr>
            )}
            </tbody>

        </table>
    )

};

export default GetStorage;
