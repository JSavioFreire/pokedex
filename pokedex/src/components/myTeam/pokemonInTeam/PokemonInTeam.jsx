import React from 'react'

const PokemonInTeam = ({ name, image }) => {
    return (
        <div className='pokemonInTeam'>
            <img src={image}/>
            <h1>{name}</h1>
        </div>
    )
}

export default PokemonInTeam