import { useEffect, useState } from "react"
import { useFetch } from "../../hook/useFetch"
import bug from '../../assets/bug.png'

const Pokemon = ({ url }) => {

    const { data, loading, error } = useFetch(url)
    const [type, setType] = useState('')

    useEffect(()=>{
        data && setType(data['types'][0].type.name)
    },[data])

    

    
    return (
        <div className="pok">
            {data && (
                <>
                    <h1>{data['name']}</h1>
                    <img className="type" src={bug}/>
                    <div className="flex">
                        <img src={data['sprites'].other.dream_world.front_default} />
                    </div>
                    <p>Tipo: {type}</p>
                </>
            )}
        </div>
    )
}

export default Pokemon