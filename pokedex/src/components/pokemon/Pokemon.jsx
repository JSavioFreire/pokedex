import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useFetch } from "../../hook/useFetch"
import { PokemonsContext } from "../../context/PokemonsContext"
import Types from "../types/types"
import ButtonAdd from "../buttonAdd/ButtonAdd"
import pokeboll from '/loading.png'

const Pokemon = ({ url }) => {

    const { data, loading } = useFetch(url)
    const [type, setType] = useState('')
    const [typeTwo, setTypeTwo] = useState('')
    const { setPokeContext } = useContext(PokemonsContext)

    const handlePokemonContext = () => {
        setPokeContext(url)
    }

    useEffect(() => {
        if (data) {
            setType(data['types'][0].type.name)
            if (data['types'].length >= 2) {
                setTypeTwo(data['types'][1].type.name)
            }
        }
    }, [data])

    return (
        <Link to={'/pokemons'} className="pok" onClick={handlePokemonContext}>
            {loading && <img className="test" src={pokeboll} />}
            {data && (
                <>
                    <header className="headerCard">
                        <h1>{data['name']}</h1>
                        <h2>N° {data.id}</h2>
                        <div><Types type={type} typeTwo={typeTwo} /></div>
                    </header>
                    <div className="flex">
                        <img src={data['sprites'].other['official-artwork'].front_default} />
                    </div>
                    <ButtonAdd data={data} />
                </>
            )}
        </Link>
    )
}

export default Pokemon