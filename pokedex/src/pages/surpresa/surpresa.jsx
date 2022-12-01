import { urlMoreName } from "../../url/url"
import { useFetch } from "../../hook/useFetch"
import { useEffect, useState } from "react"
import SinglePokemon from "../../components/singlePokemon/SinglePokemon"
import { SinglePokemonS } from "../../components/singlePokemon/styleSinglePokemon"

const Surpresa = () => {

  const [random, setRandom] = useState(0)

  const ran = () => {
    setRandom(Math.floor(Math.random() * (905 - 1) + 1))
  }
  useEffect(() => {
    ran()
  }, [])

  const { data } = useFetch(urlMoreName + random)

  return (
    <SinglePokemonS>
      <SinglePokemon data={data} />
    </SinglePokemonS>
  )
}

export default Surpresa