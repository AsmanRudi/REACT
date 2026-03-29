import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from "./Form";
import Rendering from './Rendering';
import Validation from './Form/pembahasan/Validation';



function App() {
  const [count, setCount] = useState(0)

  return (
     
        <div className="App">
            <Validation />
        </div>
    
  )
}

export default App
