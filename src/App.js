import logo from './images/pokemonLogo.png';
import './App.css';
import axios from 'axios'
import { useState } from 'react'

function App() {

  const [pokemonInfo, setPokemonInfo] = useState({
    name: ""
  })

  const search = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`).then(response => {
      let pokemonAttributes = response.data
      setPokemonInfo({
        name: pokemonAttributes.name
      })
      console.log(pokemonInfo)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Enter a pokemon: <input type="text" />
        </p>
        <button onClick={(search)}>Get Info</button>

      </header>
    </div>
  );
}

export default App;
