import { useContext } from "react"
import { PokemonsContext } from "../../context/PokemonsContext"
import SinglePokemon from "../../components/singlePokemon/SinglePokemon"
import { urlMoreName } from "../../url/url"
import { useFetch } from "../../hook/useFetch"


const Search = () => {

    const { inputText } = useContext(PokemonsContext)
    const url = urlMoreName + inputText

    const { data, error } = useFetch(url)


    return (
        <>
            {inputText ?
                error ? <>Nome invalido</>
                    :
                    <SinglePokemon data={data} />
                
                :
                <>Nao encontrado</>
            }

        </>
    )
}

export default Search