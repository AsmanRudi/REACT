import React from "react";


const Input = ({label, type, name, onChange}) => {
    return (
        <div>
            <label> {label} : </label>
            <br />
            <input type={type} name={name} onChange={e => onChange(e.target.value)} />
            <br />
        </div>
    )
}
const ShowError = ({errors}) => {
    return (
        <ul style={{color: 'red', marginLeft: '-20px'}}>
           {
                errors.map((error, i) => <li key={i}>{error}</li>)
        }
            </ul>
        )
    }


                

class Registrasi extends React.Component {
    state = {
        nama: '',
        username: '',
        email: '',
        password: '',
        errors: []
    }
    handleSubmit = event => {
        event.preventDefault();
        const {email, password} = this.state;
        
        
    
        let messages = [];

        if(email.length === 0) {
            messages = [...messages, 'Email  harus diisi'];
        }

    if(password.length === 0) {
        messages = [...messages, 'Password  harus diisi'];

    }
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
        if(!re.test(String(email).toLowerCase())) {
            messages = [...messages, 'Email tidak valid'];
        }
        if(password.length < 8) {
            messages = [...messages, 'Password anda terlalu pendek'];
        }else {
            alert(
            `Nama : ${this.state.email}
            Jurusan : ${this.state.password} 
           
            ` );
            this.setState({
                errors: [],
            })
        }

    if(messages.length > 0) {
        this.setState({errors: messages}); 
        
    }
}

render() {
        const style = {
            width: '400px',
            margin: '100px auto',
            border: '1px solid black ',
            padding: '20px',
            
        }
        return (
            <div style={style}>
                {
                    this.state.errors.length > 0 && <ShowError errors={this.state.errors} />
                }
                <h4>Form Registrasi</h4>
                <form onSubmit={this.handleSubmit}>
                    <Input label="Nama" type="text" name="nama" 
                      onChange={value => this.setState({nama: value})} />
                    <Input label="Username" type="text" name="username" 
                      onChange={value => this.setState({username: value})} />
                      <Input label="Jenis Kelamin" type="text" name="jenisKelamin" 
                      onChange={value => this.setState({jenisKelamin: value})} />
                    <Input label="Email" type="email" name="email" 
                      onChange={value => this.setState({email: value})} />
                    <Input label="Password" type="password" name="password" 
                      onChange={value => this.setState({password: value})} />
                    <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}
export default Registrasi;