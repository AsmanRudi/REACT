import React from "react";

export default class List extends React.Component {
   state = {
    users: ['Edit', 'Eko', 'Budi','Joko','anjing']
   }
    render() {
        return (
            <div>
                <ul>
                    {
                    this.state.users.map(function(user, i) {
                    return <li key={i}>{user}</li>
                })
                    }

                </ul>
            </div>

            )
        }
}
