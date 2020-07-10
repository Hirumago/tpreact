import React, {useEffect} from 'react';
import axios from "axios";

const GetStorages = () => {
    const [storages, setStorages] = React.useState([]);
    const [url, setUrl] = React.useState("http://localhost:3001/storages");
    const [refresh, setRefresh] = React.useState(0);

    useEffect(() => {
        axios.get(url)
            .then(res => {
                const storages = res.data;
                setStorages(storages);
            }).catch((error) => {
            console.log(error);
        });
    }, [url, refresh]);

    return (
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
            {storages.map((storage, index) =>
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
                            axios.delete("http://localhost:3001/storages/" + storage._id + "/delete")
                                .then(res => {
                                    setRefresh(1)
                                }).catch((error) => {
                                console.log(error);
                            })
                        }><img src="delete.png" alt="" className="icon"/></button>

                    </td>
                </tr>
            )}
            </tbody>

        </table>
    )

};

export default GetStorages;
