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

 class Registrasi extends React.Component {
    state = {
        nama: '',
        jurusan: '',
        gender: '',
        alamat: '',
        member: false,
        email: '',
        password: '',
        errors: []
           
    }
    handleSubmit = event =>{
        event.preventDefault();
        
        const {nama, jurusan, gender, alamat, member, email, password} = this.state;
        let messages = [];
        if(nama.length === 0) {
            messages = [...messages, 'Nama  harus diisi'];
        }
        if(jurusan.length === 0) {
            messages = [...messages, 'Jurusan  harus diisi'];
        }
        if(gender.length === 0) {
            messages = [...messages, 'Jenis Kelamin  harus diisi'];
        }
        if(alamat.length === 0) {
            messages = [...messages, 'Alamat  harus diisi'];
        }

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
            `
            <h4>Selamat Data Anda Sudah Registrasi</h4>
            Nama : ${this.state.nama}
            Jurusan : ${this.state.jurusan}
            Jenis Kelamin : ${this.state.gender}
            Alamat : ${this.state.alamat}
            Member : ${this.state.member ? 'Ya' : 'Tidak'}    
            Email : ${this.state.email}
            Password : ${this.state.password} 

            ` );
            this.setState({
                errors: [],
            })
        }
        if(messages.length > 0) {
        this.setState({errors: messages}); 
        
    }
        
    }
    render(){
        const style = {
            width: '400px',
            margin: '100px auto',
            border: '1px solid black ',
            padding: '20px',
        }
        return(
            <div style={style}>
                
                <form onSubmit={this.handleSubmit}>
                    {
                    this.state.errors.length && <ShowError errors={this.state.errors} />
                }
                    <h3>Form Registrasi Member</h3>
            <label>
                Nama : <input type="text" name="nama" 
                onChange={e => this.setState({nama: e.target.value})} 
                />
            </label>
            <br />
            <br />
            <label >
                Jurusan : <select name="jurusan"
                onChange={ e => this.setState({jurusan: e.target.value})}
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
                onChange={ e => this.setState({gender: e.target.value})} />
                Laki-Laki
                <input type="radio" value="Perempuan" name="gender"
                onChange={ e => this.setState({gender: e.target.value})}
                /> Perempuan
            </label>
            <br />
            <br />
            <label>
                Alamat : <textarea type="text" cols="30" rows="10" name="alamat"
                onChange={ e => this.setState({alamat: e.target.value})}
               
                />
            </label>
            <br />
            <br />
            <label>
                Member : <input type="checkbox" checked={this.state.member} name="member"
                onChange={ e => this.setState({member: e.target.checked})}
                />
            </label>
            <br /><br /> 
            <label>
                Email : <input type="email" name="email" 
                onChange={ e => this.setState({email: e.target.value})} 
     
                />
            </label>
            <br />
            <br />
            <label>
                Password : <input type="password" name="password"          
                       onChange={ e => this.setState({password: e.target.value})} 

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
export default Registrasi;