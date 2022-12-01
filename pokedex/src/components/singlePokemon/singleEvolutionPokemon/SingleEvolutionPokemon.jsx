import { Link } from "react-router-dom"
import { useFetch } from "../../../hook/useFetch"
import { urlMoreName } from "../../../url/url"
import { useContext } from "react"
import { PokemonsContext } from "../../../context/PokemonsContext"

const SingleEvolutionPokemon = ({ urlEvolve }) => {

    const url = urlMoreName + urlEvolve

    const { data } = useFetch(url)
    const { setPokeContext } = useContext(PokemonsContext)

    const handlePokemonContext = () => {
        setPokeContext(url)
    }
    return (
        data && (
            <Link to={'/pokemons'} onClick={handlePokemonContext}>
                <div className="evolveEach">
                    <div className="flex">
                        <p>{urlEvolve}</p>
                        <p>N° {data.id}</p>
                    </div>
                    <img className="evolveImg" src={data['sprites'].other['official-artwork'].front_default} />
                </div>
            </Link>
        )
    )
}

export default SingleEvolutionPokemon