import React from 'react';
import './App.css'

class Pokedex extends React.Component {
    render() {
        const { pokemon } = this.props;
        const { id, name, type, image, moreInfo } = pokemon;
        return (
            <section className="pokeCard">
                <div>
                    <p className="pokeId">{ id }</p>
                    <img src={ image } alt={ name } />
                    <p className="pokeNome">{ name }</p>
                    <p className="pokeType">{ type }</p>
                    <a className="pokeMoreInfo" href={moreInfo} >Mais informações</a>
                </div>
            </section>
        )
    }
}

export default Pokedex;