import React from 'react';

class CreateUser extends React.Component {
    render() {
        return (
            <div>
                <h2>Créer un utilisateur</h2>
                <form>
                    <label>
                        Nom :
                        <input type="text" name="name" required={true}/>
                    </label>
                    <label>
                        Email :
                        <input type="email" name="email" required={true}/>
                    </label>
                    <input type="submit" value="Envoyer" />
                </form>
            </div>
        )

    }
}

export default CreateUser;