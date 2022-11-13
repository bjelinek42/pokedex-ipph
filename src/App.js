import logo from './images/pokemonLogo.png';
import './App.css';
import axios from 'axios'

function App() {

  axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`).then(response => {
    console.log(response.data)

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
