import { useEffect, useState } from 'react';

const Effect = () => {
    let [text, setSext] = useState('');
    let [user, setuser] = useState({});


    useEffect(() => {
        console.log('get API');
       fetch('https://jsonplaceholder.typicode.com/users/1')
       .then(res => res.json())
       .then(res => setUser(res));
    }, []);

    useEffect(() => {
        localStorage.setItem('text', text);
        console.log('singkronisasi');
    } , [text]);

    return (
        <div>
            <textarea cols="30" rows="30" onChange={(e) => setSext(e.target.value)} />
            <p>{user.name}</p>
        </div>
    )
}
export default Effect; 