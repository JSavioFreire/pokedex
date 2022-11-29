import { PokemonsS } from "../../pages/pokemons/stylePokemons"
import ButtonAdd from "../buttonAdd/ButtonAdd"

const SinglePokemon = ({ data }) => {

    return (
        <PokemonsS>
            {data && (
                <div className="all">
                    <div className="about">
                        <h1>{data.name}</h1>
                        <p className="types">Tipos: {data.types['0'].type.name} {data['types'].length >= 2 && '- ' + data.types['1'].type.name}</p>
                        <img src={data['sprites']['versions']['generation-v']['black-white']['animated'].front_default} />
                        <ButtonAdd data={data}/>
                    </div>
                    <div className="image">
                        <img src={data['sprites'].other['official-artwork'].front_default} />
                    </div>
                </div>
            )}
        </PokemonsS>
    )
}

export default SinglePokemon