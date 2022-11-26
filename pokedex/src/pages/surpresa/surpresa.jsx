import { urlMoreName } from "../../url/url"
import { useFetch } from "../../hook/useFetch"
import { useEffect, useState } from "react"
import { PokemonsS } from "../pokemons/stylePokemons"

const Surpresa = () => {

  const [random, setRandom] = useState(0)

  useEffect(() => {
    setRandom(Math.floor(Math.random() * (905 - 1) + 1))
  }, [])
  const { data, loading } = useFetch(urlMoreName + random)

  console.log(urlMoreName + random)

  return (
    <PokemonsS>
      {loading && <p>carregando</p>}
      {data && (
        <>
        <div className="all">
          <div className="about">
            <h1>{data.name}</h1>
            <p className="types">Tipos: {data.types['0'].type.name} {data['types'].length >= 2 && '- ' + data.types['1'].type.name}</p>
            <img src={data['sprites']['versions']['generation-v']['black-white']['animated'].front_default} />
          </div>
          <div className="image">
            <img src={data['sprites'].other['official-artwork'].front_default} />
          </div>
          
        </div>
        <button onClick={() => setRandom(Math.floor(Math.random() * (905 - 1) + 1))}>Buscar Outro</button>
        </>
      )}
    </PokemonsS>
  )
}

export default Surpresa