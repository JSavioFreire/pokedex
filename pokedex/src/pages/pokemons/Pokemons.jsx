import { PokemonsContext } from "../../context/PokemonsContext"
import { useContext } from "react"
import { useFetch } from "../../hook/useFetch"
import { PokemonsS } from "./stylePokemons"
import SinglePokemon from "../../components/singlePokemon/SinglePokemon"

const Pokemons = () => {
  const { pokeContext } = useContext(PokemonsContext)
  const { data } = useFetch(pokeContext)

  return (
    <SinglePokemon data={data}/>
  )
}

export default Pokemons