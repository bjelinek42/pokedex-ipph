import logo from './images/pokemonLogo.png';
import './App.css';
import axios from 'axios'
import { useState } from 'react'

function App() {

  const [pokemonInfo, setPokemonInfo] = useState({
    name: ""
  })
  axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`).then(response => {
    let pokemonAttributes = response.data
    setPokemonInfo({
      name: pokemonAttributes.name
    })
    console.log(pokemonInfo)
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      </header>
    </div>
  );
}

export default App;
