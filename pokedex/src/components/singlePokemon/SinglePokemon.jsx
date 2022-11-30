import ButtonAdd from "../buttonAdd/ButtonAdd"
import SingleEvolutionPokemon from "./singleEvolutionPokemon/SingleEvolutionPokemon"
import { useFetch } from "../../hook/useFetch"
import { PokemonsS } from "../../pages/pokemons/stylePokemons"
import { useEffect, useState } from "react"

const SinglePokemon = ({ data }) => {

    const [evolutions, setEvolutions] = useState()
    const [urlEvolution, setUrlEvolution] = useState()

    const { data: evolve } = useFetch(evolutions)
    const { data: urlEvolve } = useFetch(urlEvolution)

    const index = []

    useEffect(() => {
        evolve && setUrlEvolution(evolve['evolution_chain'].url)

    }, [evolve])

    useEffect(() => {
        if (data) {
            const species = data.species.url
            setEvolutions(species)
        }
    }, [data])


    if (urlEvolve) {
        for (let i = 0; i < urlEvolve.chain['evolves_to'].length; i++) {
            index.push(i)
        }
    }
    return (
        <PokemonsS>
            {data && (
                <div className="all">
                    <div className="about">
                        <div className="nameId">
                            <h1>{data.name}</h1>
                            <h2>N° {data.id}</h2>
                        </div>
                        <p className="types">Tipos: {data.types['0'].type.name} {data['types'].length >= 2 && '- ' + data.types['1'].type.name}</p>
                        <div>
                            <h2>Evoluções</h2>
                            {urlEvolve && (

                                <div className="evol">
                                    <SingleEvolutionPokemon urlEvolve={urlEvolve.chain.species.name} />
                                    {urlEvolve.chain['evolves_to'].length < 2 ?
                                        <>
                                            <SingleEvolutionPokemon urlEvolve={urlEvolve.chain['evolves_to'].length != 0 && urlEvolve.chain['evolves_to'] && urlEvolve.chain['evolves_to']['0']['species'].name} />
                                            <SingleEvolutionPokemon urlEvolve={urlEvolve.chain['evolves_to'].length != 0 && urlEvolve.chain['evolves_to']['0']['evolves_to']['0'] && urlEvolve.chain['evolves_to']['0']['evolves_to']['0']['species'].name} />
                                        </>
                                        :
                                        <>
                                            {index.map((i) => (
                                                <>
                                                    <SingleEvolutionPokemon urlEvolve={urlEvolve.chain['evolves_to'] && urlEvolve.chain['evolves_to'][i]['species'].name} />
                                                </>
                                            ))}
                                        </>
                                    }
                                </div>
                            )
                            }
                        </div>
                        <ButtonAdd data={data} />
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