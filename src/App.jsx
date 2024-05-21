
import './App.css';

import { useState, useEffect } from 'react';

//useState GERENCIA O ESTADO DE ALGUM VALOR
//GETTER SETTER

//------------------------------------------------------------------------------------------------  

//useEffect MONITORA OS ESTADOS 

function App() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState(1)

const changeNumber = () => {
  setNumber(number + 1)
}

useEffect (() => {
  console.log('nome atualizado para:', name)
}, [name])

useEffect (() => {
  console.log('número atualizado para:', number)
}, [number])

return (
  <div className='container'>
    <h1 className='name-resul'>Meu nome é: {name}</h1>
    <input className='input' type="text" onChange={e => setName(e.target.value)} placeholder='digite seu nome aqui'/>
    <div>
    <h2>Número: {number}</h2>
    <button onClick={changeNumber}>Mudar de número</button>
    </div>
  </div>
)
}

export default App;




