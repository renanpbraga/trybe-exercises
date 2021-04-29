import React from 'react';
import Pokedex from './pokedex';
import './App.css'

class PokeList extends React.Component {
  render() {
      const { pokemons } = this.props;
      return (
          <main>
              <div classname="pokeList">
                  {pokemons.map((pokemon) => (
                      <Pokedex key={ pokemon.id} pokemon={ pokemon } />
                  ))}
              </div>
          </main>
      )
  }
}
export default PokeList;