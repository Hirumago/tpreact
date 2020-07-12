import React from 'react';
import axios from "axios";

const GetStorages = (props) => {

    return (
        <div>
            <h2>Liste des espaces de stockages</h2>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Rang</th>
                    <th>Nom</th>
                    <th>Slots</th>
                    <th>Type 1</th>
                    <th>Type 2</th>
                    <th>Propriétaire</th>
                    <th>Suppression</th>
                </tr>
                </thead>
                <tbody>
                {props.storages.map((storage, index) =>
                    <tr key={index}>
                        <td>{storage._id}</td>
                        <td>{storage.rank}</td>
                        <td>{storage.name}</td>
                        <td>
                            {storage.slots.map((slot, subindex) =>
                                <p key={subindex}>{slot}</p>
                            )}
                        </td>
                        <td>{storage.type1}</td>
                        <td>{storage.type2}</td>
                        <td>{storage.owner}</td>
                        <td>
                            <button onClick={() =>

                                axios.delete(props.url + "/" + storage._id + "/delete/"+storage.owner)
                                    .then(res => {
                                        props.setRefreshStorages(true);
                                    }).catch((error) => {
                                        let status = error.response.status;
                                        if (status === 403) alert("L'espace de stockage n'est pas vide !");

                                        console.log(error);
                                })
                            }><img src="delete.png" alt="" className="icon"/></button>

                        </td>
                    </tr>
                )}
                </tbody>

            </table>
        </div>

    )

};

export default GetStorages;
