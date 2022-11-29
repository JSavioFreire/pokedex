import { useContext, useState, useEffect } from "react"
import { PokemonsContext } from "../../context/PokemonsContext"

const ButtonAdd = ({ data }) => {
    
    const { setPokeTeamContext, pokeTeamContext } = useContext(PokemonsContext)
    const [have, setHave] = useState(false)

    const handleAddTeam = (e) => {
        e.preventDefault()
        setPokeTeamContext([...pokeTeamContext, data])
    }

    useEffect(() => {
        pokeTeamContext.map((val) => {
            if (data && data.name == val.name) {
                setHave(true)
            }
        })
    })


    return (
        <>
            {have ? <button className="disabled" disabled>Já está no time</button>
                : <button onClick={handleAddTeam}>Adicionar ao time</button>
            }
        </>
    )
}

export default ButtonAdd