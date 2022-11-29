import { urlMoreName } from "../../url/url"
import { useFetch } from "../../hook/useFetch"
import { useEffect, useState } from "react"
import SinglePokemon from "../../components/singlePokemon/SinglePokemon"
import { SinglePokemonS } from "../../components/singlePokemon/styleSinglePokemon"

const Surpresa = () => {

  const [random, setRandom] = useState(0)

  useEffect(() => {
    setRandom(Math.floor(Math.random() * (905 - 1) + 1))
  }, [])
  const { data } = useFetch(urlMoreName + random)

  console.log(urlMoreName + random)

  return (
    <SinglePokemonS>
      <SinglePokemon data={data} />
      <button>Buscar outro</button>
    </SinglePokemonS>
  )
}

export default Surpresa