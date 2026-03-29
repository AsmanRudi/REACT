import React from "react";


const ShowError = ({errors}) => {
    return (
        <ul style={{color: 'red', marginLeft: '-20px'}}>
           {
                errors.map((error, i) => <li key={i}>{error}</li>)
        }
            </ul>
        )
    }

export default class Registrasi extends React.Component {
    state = {
        nama: '',
        jurusan: '',
        gender: '',
        alamat: '',
        member: false
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        let messages = [];
        const email = this.state.email;
        const password = this.state.password;

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
        }else {
            this.setState({
                nama: '',
                jurusan: '',
                gender: '',
                alamat: '',
                member: false,
                email: '',
                password: ''
            })
        }
    }
    render(){
        return(
            <div style={{margin: '100px auto', border: '1px solid gray', padding: '20px', width: '400px'}}>
                <form onSubmit={this.handleSubmit}>
                    <h3>Form Registrasi</h3>
            <label>
                Nama : <input type="text" name="nama" 
                onChange={ value => this.setState({nama: value})} 
                value={this.state.nama}
                />
            </label>
            <br />
            <br />
            <label >
                Jurusan : <select name="jurusan"
                onChange={ value => this.setState({jurusan: value})}
                >

                <option value="">Pilih Jurusan </option>
                <option value="Teknik Informatika">Teknik Informatika</option>
                <option value="Sistem Informasi">Sistem Informasi</option>
                <option value="Desain Komunikasi Visual">Desain Komunikasi Visual</option>
                </select>
            </label>
            <br />
                <br />
            <label>
                Jenis Kelamin :
                <input type="radio"  value="Laki-Laki" name="gender"
                onChange={ value => this.setState({gender: value})} />
                Laki-Laki
                <input type="radio" value="Perempuan" name="gender"
                onChange={ value => this.setState({gender: value})}
                /> Perempuan
            </label>
            <br />
            <br />
            <label>
                Alamat : <textarea cols="30" rows="10" name="alamat"
                onChange={ value => this.setState({alamat: value})}
                value={this.state.alamat}
                />
            </label>
            <br />
            <label>
                Member : <input type="checkbox" checked={this.state.member} name="member"
                onChange={ checked => this.setState({member: checked})}
                />
            </label>
            <br /><br /> 
            <label>
                Email : <input type="email" name="email" 
                onChange={ value => this.setState({email: value})} 
                value={this.state.email}
                />
            </label>
            <label>
                Password : <input type="password" name="password"                 onChange={ value => this.setState({password: value})} 
                value={this.state.password}
                />
            </label>
            <br />
            <br />   
            <button type="submit">Submit</button>
        </form>
            </div>
            
            
        )
    }
}