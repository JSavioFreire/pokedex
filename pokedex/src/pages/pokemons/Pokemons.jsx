import { PokemonsContext } from "../../context/PokemonsContext"
import { useContext } from "react"
import { useFetch } from "../../hook/useFetch"
import { PokemonsS } from "./stylePokemons"

const Pokemons = () => {
  const { pokeContext } = useContext(PokemonsContext)
  const { data, loading } = useFetch(pokeContext)

  data && console.log(data)

  return (
    <PokemonsS>
      {loading && <p>carregando</p>}
      {data && (
        <div className="all">
          <div className="about">
            <h1>{data.name}</h1>
          </div>
          <div className="image">
            <img src={data['sprites'].other['official-artwork'].front_default} />

          </div>
        </div>
      )}

    </PokemonsS>
  )
}

export default Pokemons