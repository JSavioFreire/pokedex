import { useEffect, useState } from "react"
import { useFetch } from "../../hook/useFetch"
import Types from "../types/types"
import pokeboll from '../../components/loading.png'

const Pokemon = ({ url }) => {

    const { data, loading, error } = useFetch(url)
    const [type, setType] = useState('')
    const [typeTwo, setTypeTwo] = useState('')

    useEffect(() => {
        if(data){
            setType(data['types'][0].type.name)
            if(data['types'].length >= 2){
                setTypeTwo(data['types'][1].type.name)
            }
        }
    }, [data])

    
  

    return (
        <div className="pok">
            {loading && <><img className="test" src={pokeboll} /></>}
            {data && (
                <>
                    <header className="headerCard">
                        <h1>{data['name']}</h1>
                        <h2>N° {data.id}</h2>
                        <div><Types type={type} typeTwo={typeTwo} /></div>
                    </header>
                    <div className="flex">
                        <img src={data['sprites'].other.dream_world.front_default} />
                    </div>
                </>
            )}
        </div>
    )
}

export default Pokemon