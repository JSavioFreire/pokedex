import { FiDelete } from 'react-icons/fi';


const PokemonInTeam = ({ name, image, typeOne, typeTwo, hadleDelete }) => {




    return (
        <div className='pokemonInTeam'>
            <img src={image} />
            <h2>Tipos: {typeOne}{typeTwo && <span> e </span>}{typeTwo}</h2>
            <h1>{name}</h1>
            <div className='del'>
                <FiDelete onClick={() => hadleDelete(name)} />
            </div>
        </div>
    )
}

export default PokemonInTeam