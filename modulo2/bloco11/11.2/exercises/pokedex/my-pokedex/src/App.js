import React from 'react';
import pokemons from './data';
import PokeList from './pokelist'
import './App.css'

class App extends React.Component {
  render () {
    return(
    <div>
      <PokeList pokemons={ pokemons } />
    </div>
    )
  }
}

export default App;

