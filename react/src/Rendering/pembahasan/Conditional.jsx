import React from "react";

export default class Conditional extends React.Component {
   state = {
    isLoading : true
   }
render() {
    setTimeout(() => {
        this.setState({
            isLoading: false
        })
}, 3000)
        return (
            <div>
               { this.state.isLoadingis
               ? <h1> Loading....</h1> 
               : <h1>Selamat Datang Dikelas MERN</h1>
               }
            </div>
        )
    }
}