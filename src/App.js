import logo from './images/pokemonLogo.png';
import './App.css';
import axios from 'axios'
import { useState } from 'react'
import Navbar from './components/Navbar.js'

function App() {

  const [searchName, setSearchName] = useState("")
  const [pokemonInfo, setPokemonInfo] = useState({
    name: ""
  })

  const search = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${searchName}`).then(response => {
      let pokemonAttributes = response.data
      setPokemonInfo({
        name: pokemonAttributes.name,
        image: pokemonAttributes.sprites.front_default,
        ability1: pokemonAttributes.abilities[0].ability.name,
        ability2: pokemonAttributes.abilities[1].ability.name
      })
    })
      .catch((error) => {
        window.alert("No Match Found")
      });
  }

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Enter a pokemon: <input type="text" onChange={(event) => { setSearchName(event.target.value) }} />
        </p>
        <button onClick={(search)}>Get Info</button>
        <div>
          {pokemonInfo.name.length === 0 ?
            (<h1>Enter a Pokemon</h1>) :
            (<div>
              <h1>{pokemonInfo.name}</h1>
              <img className="App-image" src={pokemonInfo.image} alt={pokemonInfo.name} />
              <h2> Abilities: {pokemonInfo.ability1}, {pokemonInfo.ability2}</h2>
            </div>)}
          { }
        </div>

      </header>
    </div>
  );
}

export default App;
