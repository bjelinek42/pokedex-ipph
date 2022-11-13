import logo from './images/pokemonLogo.png';
import './App.css';
import axios from 'axios'
import { useState } from 'react'

function App() {

  const [searchName, setSearchName] = useState("")
  const [pokemonInfo, setPokemonInfo] = useState({
    name: ""
  })
  const [error, setError] = useState()

  const search = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${searchName}`).then(response => {
      let pokemonAttributes = response.data
      setPokemonInfo({
        name: pokemonAttributes.name
      })
      console.log(pokemonInfo)
    })
      .catch((error) => {
        setError(error.response)
        console.log(error)
        window.alert("No Match Found")
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Enter a pokemon: <input type="text" onChange={(event) => { setSearchName(event.target.value) }} />
        </p>
        <button onClick={(search)}>Get Info</button>
        <div>
          {!pokemonInfo.name.length === 0 ?
            (<h1>Enter a Pokemon</h1>) :
            (<div>
              <h1>{pokemonInfo.name}</h1>
            </div>)}
        </div>

      </header>
    </div>
  );
}

export default App;
